import React, { useState } from 'react';
import axios from 'axios';
import '../ideation/index.css';
import SkillsInput from '../../components/skillInput/index';
import InputField from '../../components/inputField'; 
import Button from '../../components/button';
import skillsData from './data/skills.json';
import interestsData from './data/interests.json';
import BigInput from '../../components/bigInput/bigInput';
import Modal from '../../components/modal/index'; // Adjust the import path as needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Ideation = () => {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState("IND"); 
  const [location, setLocation] = useState(''); // Added state for detailed location
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sections, setSections] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleAddSection = (info) => {
    setSections(prevSections => [...prevSections, info]); // Use functional update to avoid recursion
    setIsModalOpen(false);
  };

  const handleGenerateIdeas = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-ideas', {
        location: country,
        detailed_location: location, // Include detailed location
        skills: skills,
        interests: interests,
        // specific_area: '',  // Add specific_area and resources as needed
        // resources: ''
      });
      const { headlines, content } = response.data;
      console.log("The response is here: " + response.data)
      console.log("Headlines : ", headlines)
      console.log("Content is : ", content)
      // Navigate to post generation page with generated ideas
      navigate('/postgeneration', { state: { headlines, content } });
    } catch (error) {
      console.error('Error generating ideas:', error);
      // Handle error appropriately
    }
  };

  return (
    <div style={{display: 'flex', flexDirection:'row', gap: '16px'}}>
    <div className="ideation-page">
      <h3>Hey! Let us know you better</h3>
      
      <div className="section">
        <SkillsInput 
          type="Skills" 
          items={skills} 
          setItems={setSkills} 
          searchOptions={skillsData} 
        />
      </div>
      
      <div className="section">
        <SkillsInput 
          type="Interests" 
          items={interests} 
          setItems={setInterests} 
          searchOptions={interestsData} 
        />
      </div>
      
      <div className="section">
        <div className="location-label"><span><p>Location</p></span></div>
        <div className="input-field-container">
          <InputField 
            variant="country"
            placeholder="Select"
            value={country}
            onChange={(option) => setCountry(option)}
          />
          <InputField 
            placeholder="Enter your location here..."
            value={location} // Added value prop
            onChange={(e) => setLocation(e.target.value)} // Added onChange handler
          />
        </div>
      {sections.map((section, index) => (
        <div className="section" key={index}>
          <SkillsInput
            type={section}
            items={[]}
            setItems={() => {}}
            searchOptions={section === 'Skills' ? skillsData : interestsData}
          />
        </div>
      ))}

      <Button
        style={{ justifyContent: 'center' }}
        variant="outline"
        width="100%"
        onClick={() => setIsModalOpen(true)}
      >
        Add more information
      </Button>

      {isModalOpen && (
        <Modal
          onClose={() => setIsModalOpen(false)}
          onSelect={handleAddSection}
        />
      )}
  </div>
  </div>

      <div className="rightInput">
              Have some other things in your mind? Let us know!
              <div className="inputBox">
                <BigInput/>
              </div>
      <Button
        variant='primary'
        onClick={handleGenerateIdeas}
      >
        Generate
      </Button>
      </div>
    </div>
  );
};

export default Ideation;
