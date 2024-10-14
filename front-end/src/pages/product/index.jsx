// import React, { useState } from 'react';
// import axios from 'axios';
// import '../ideation/index.css';
// import SkillsInput from '../../components/skillInput/index';
// import InputField from '../../components/inputField'; 
// import Button from '../../components/button';
// import skillsData from './data/skills.json';
// import interestsData from './data/interests.json';
// import BigInput from '../../components/bigInput/bigInput';
// import Modal from '../../components/modal/index'; 
// import { useNavigate } from 'react-router-dom';
// import resourcesData from './data/resources.json';

// const Product = () => {
//   const [skills, setSkills] = useState([]);
//   const [interests, setInterests] = useState([]);
//   const [country, setCountry] = useState("IND"); 
//   const [location, setLocation] = useState('');
//   const [resources, setResources] = useState([]); // Initialize as an array
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [sections, setSections] = useState({});
  
//   const flattenedResourcesData = Object.values(resourcesData).reduce((acc, category) => acc.concat(category), []);
//   console.log(flattenedResourcesData);
//   const navigate = useNavigate(); 

//   const handleAddSection = (info) => {
//     setSections(prevSections => ({
//       ...prevSections,
//       [info]: [] // Initialize with an empty array to store values
//     }));
//     setIsModalOpen(false);
//   };

//   const handleSectionInputChange = (section, newItems) => {
//     setSections(prevSections => ({
//       ...prevSections,
//       [section]: newItems
//     }));
//   };

//   const handleGenerateIdeas = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/generate-strategy', {
//         location: country,
//         detailed_location: location,
//         skills: skills,
//         interests: interests,
//         additionalSections: sections,
//         resources: resources,
//       });
  
//       // Use the correct names for strategy data
//       const { bestPractices, improveFirst, poorProspects, worstProspects } = response.data;
  
//       // Pass the data to /target route
//       navigate('/target', {
//         state: {
//           locationData: { bestPractices, improveFirst, poorProspects, worstProspects },
//         },
//       });
//     } catch (error) {
//       console.error('Error generating ideas:', error);
//     }
//   };
  

//   return (
//     <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
//       <div className="ideation-page">
//         <h3>Hey! Let us know you better</h3>
        
//         <div className="section">
//           <SkillsInput 
//             type="Skills" 
//             items={skills} 
//             setItems={setSkills} 
//             searchOptions={skillsData} 
//           />
//         </div>
        
//         <div className="section">
//           <SkillsInput 
//             type="Interests" 
//             items={interests} 
//             setItems={setInterests} 
//             searchOptions={interestsData} 
//           />
//         </div>

//         <div className="section">
//           <SkillsInput 
//             type="Resources" 
//             items={resources} 
//             setItems={setResources} 
//             searchOptions={flattenedResourcesData} // Merges all resources categories
//           />
//         </div>

//         <div className="section">
//           <div className="location-label"><span><p>Location</p></span></div>
//           <div className="input-field-container">
//             <InputField 
//               variant="country"
//               placeholder="Select"
//               value={country}
//               onChange={(option) => setCountry(option)}
//             />
//             <InputField 
//               placeholder="Enter your location here..."
//               value={location} 
//               onChange={(e) => setLocation(e.target.value)} 
//             />
//           </div>
//         </div>

//         {Object.keys(sections).map((section, index) => (
//           <div className="section" key={index}>
//             <SkillsInput
//               type={section}
//               items={sections[section]}
//               setItems={(newItems) => handleSectionInputChange(section, newItems)}
//               searchOptions={section === 'Skills' ? skillsData : interestsData}
//             />
//           </div>
//         ))}

//         <Button
//           style={{ justifyContent: 'center' }}
//           variant="outline"
//           width="100%"
//           onClick={() => setIsModalOpen(true)}
//         >
//           Add more information
//         </Button>

//         {isModalOpen && (
//           <Modal
//             onClose={() => setIsModalOpen(false)}
//             onSelect={handleAddSection}
//           />
//         )}
//       </div>

//       <div className="rightInput">
//         Have some other things in your mind? Let us know!
//         <div className="inputBox">
//           <BigInput />
//         </div>
//         <Button
//           variant='primary'
//           onClick={handleGenerateIdeas}
//         >
//           Generate
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Product;
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import '../ideation/index.css';
import SkillsInput from '../../components/skillInput/index';
import InputField from '../../components/inputField'; 
import Button from '../../components/button';
import BigInput from '../../components/bigInput/bigInput';
import Modal from '../../components/modal/index'; 
import skillsData from './data/skills.json';
import interestsData from './data/interests.json';
import resourcesData from './data/resources.json';

const Product = () => {
  const [skills, setSkills] = useState([]);
  const [interests, setInterests] = useState([]);
  const [country, setCountry] = useState("IND"); 
  const [location, setLocation] = useState('');
  const [resources, setResources] = useState([]); 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sections, setSections] = useState({});
  
  const flattenedResourcesData = Object.values(resourcesData).reduce((acc, category) => acc.concat(category), []);
  const navigate = useNavigate(); 

  const handleAddSection = (info) => {
    setSections(prevSections => ({
      ...prevSections,
      [info]: [] 
    }));
    setIsModalOpen(false);
  };

  const handleSectionInputChange = (section, newItems) => {
    setSections(prevSections => ({
      ...prevSections,
      [section]: newItems
    }));
  };

  const handleGenerateIdeas = async () => {
    try {
      const response = await axios.post('http://localhost:5000/generate-strategy', {
        location: country,
        detailed_location: location,
        skills: skills,
        interests: interests,
        additionalSections: sections,
        resources: resources,
      });
  
      const { bestPractices, improveFirst, poorProspects, worstProspects } = response.data;
      
      // Save data to localStorage
      localStorage.setItem('targetData', JSON.stringify({ bestPractices, improveFirst, poorProspects, worstProspects }));
  
      // Navigate to target page
      // Modify this part of handleGenerateIdeas
    navigate('/target');

    } catch (error) {
      console.error('Error generating ideas:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '16px' }}>
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
          <SkillsInput 
            type="Resources" 
            items={resources} 
            setItems={setResources} 
            searchOptions={flattenedResourcesData}
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
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
            />
          </div>
        </div>

        {Object.keys(sections).map((section, index) => (
          <div className="section" key={index}>
            <SkillsInput
              type={section}
              items={sections[section]}
              setItems={(newItems) => handleSectionInputChange(section, newItems)}
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

      <div className="rightInput">
        Have some other things in your mind? Let us know!
        <div className="inputBox">
          <BigInput />
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

export default Product;

