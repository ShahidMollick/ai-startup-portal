import React, { useState, useEffect } from "react";
import "../ideation/index.css";
import Card from "../../components/card";
import axios from 'axios';
import "../ideation/ideationInput.json"

const Ideas = () => {
  const [headlines, setHeadlines] = useState([]);
  const [content, setContent] = useState([]);
  const [formData, setFormData] = useState({
    location: '',
    skills: '',
    interests: '',
    specific_area_of_business: '',
    financial_resources: '',
    tools: '',
    facilities: ''
  });

  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post('http://localhost:5000/generate-ideas', {
          location: "Kolkata, India",
          skills: "Programming and Data Science",
          interests: "Business",
          specific_area: "",
          resources: "Limited financial resources, basic tools, and facilities"
        });
        setHeadlines(response.data.headlines);
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="row-Container">
        {headlines.map((headline, index) => (
          <Card
            key={index}
            header={<h2 style={{ color: '#2A282F' }}>{headline}</h2>}
            body={<p style={{ textOverflow: 'ellipsis', overflow: 'hidden' }}>{content[index]}</p>}
          />
        ))}
      </div>
    </div>
  );
}

export default Ideas;

