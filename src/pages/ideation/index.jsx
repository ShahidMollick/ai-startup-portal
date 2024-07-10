import React, { useState } from 'react';
import '../ideation/index.css';
import SkillsInput from '../../components/skillInput/index';
import InputField from '../../components/inputField'; 
import VariantButton from '../../components/chips/variantButton';
import Button from '../../components/button';

const Ideation = () => {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState("IND"); 

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
        <Button variant='outline'width='100%' >Add more information
        </Button>
        <Button variant='primary'width='100%' >Add more information
        </Button>
          
      </div>
    </div>
  );
};

export default Ideation;
