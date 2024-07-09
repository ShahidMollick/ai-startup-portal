import React, { useState } from 'react';
import '../ideation/index.css';
import SkillsInput from '../../components/skillInput/index';
import InputField from '../../components/inputField'; // Import the new InputField component
import VariantButton from '../../components/chips/variantButton';

const Ideation = () => {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState("IND"); // Set default country to IND

  return (
    <div className="ideation-page">
      <h1>Ideation Page</h1>
      
      <div className="section">
        <SkillsInput type="Skills" items={skills} setItems={setSkills} />
      </div>
      
      <div className="section">
        <SkillsInput type="Interests" items={interests} setItems={setInterests} />
      </div>
      
      <div className="section">
        <div className="location-label">Location</div>
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
        <VariantButton text="Add more information section" />
      </div>
    </div>
  );
};

export default Ideation;
