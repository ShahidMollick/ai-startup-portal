import React, { useState } from 'react';
import '../ideation/index.css';
import SkillsInput from '../../components/skillInput/index';
import InputField from '../../components/inputField'; 
import Button from '../../components/button';
import skillsData from './data/skills.json';
import interestsData from './data/interests.json';
import Modal from '../../components/modal/index'; // Adjust the import path as needed

const Ideation = () => {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState("IND"); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sections, setSections] = useState([]);

  const handleAddSection = (info) => {
    setSections([...sections, info]);
    setIsModalOpen(false);
  };

  return (
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
          />
        </div>
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
  );
};

export default Ideation;
