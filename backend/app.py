from flask import Flask, jsonify, request
import re
from groq import Groq
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

GROQ_API_KEY="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"
client = Groq(api_key=GROQ_API_KEY)

messages = [
    {
        "role": "system",
        "content": "You are The Business Startup Portal (BSP), a tool to help people who want to start a business decide what that business could be, how to plan its development and get to launch. Be conversational yet professional, and lead the user step by step through the business startup cycle."
    },
    {
        "role": "user",
        "content": "Hello, I need help finding a business to start."
    }
]

global_headlines = []
global_content = []

def generate_chat_response(messages, model="llama3-8b-8192"):
    chat_completion = client.chat.completions.create(
        messages=messages,
        model=model,
    )
    return chat_completion.choices[0].message.content

def parse_ideas(response):
    pattern = r"(\d+)\.\s\*\*(.*?)\*\*"
    matches = re.findall(pattern, response)
    headlines = [match[1] for match in matches]
    
    content_pattern = r"\d+\.\s\*\*.*?\*\*:\s(.*)"
    content_matches = re.findall(content_pattern, response)
    
    return headlines, content_matches

@app.route('/generate-ideas', methods=['POST'])
def generate_ideas():
    data = request.json
    location = data.get("location")
    skills = data.get("skills")
    interests = data.get("interests")
    specific_area = data.get("specific_area")
    resources = data.get("resources")

    prompt = f"""
    User is in {location}.
    They have skills: {skills}.
    Their interests are: {interests}.
    They have in mind: {specific_area}.
    Their resources include: {resources}.

    Provide a set of exact 5 business startup ideas suitable for this user. Keep the answers little descriptive and conversational. Offer to help with designing their service or product offering after they choose an option.
    """

    messages.append({"role": "user", "content": prompt})
    response = generate_chat_response(messages)
    headlines, content = parse_ideas(response)
    
    # global_headlines.extend(headlines)
    # global_content.extend(content)
    
    global_headlines = headlines[:5]
    global_content = content[:5]
    
    return jsonify({
        "headlines": global_headlines,
        "content": global_content
    })

if __name__ == '__main__':
    app.run(debug=True)
