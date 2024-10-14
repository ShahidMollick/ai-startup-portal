import React, { useRef, useState } from 'react';
import Button from '../button/index';
import './index.css'
import Chip from '../chips/index';
import InputField from '../../components/inputField/index';

const SkillsInput = ({ type, items, setItems, searchOptions }) => {
  const searchInputRef = useRef(null);
  const [location, setLocation] = useState(null);

  const handleFocusSearch = () => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      addItem(event.target.value.trim());
    }
  };

  const addItem = (item) => {
    if (item && !items.includes(item)) {
      setItems([...items, item]);
      if (searchInputRef.current) {
        searchInputRef.current.value = '';
      }
    }
  };

  const handleAddItem = () => {
    if (searchInputRef.current) {
      addItem(searchInputRef.current.value.trim());
    }
  };

  const removeItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const handleCountryChange = (selectedCountry) => {
    setLocation(selectedCountry);
  };

  const handleSelectOption = (option) => {
    addItem(option.label);
  };

  return (
    <div>
      <div className="search-container">
        <span className="search-label">{type}</span>
        <InputField 
          ref={searchInputRef} 
          onKeyPress={handleKeyPress}
          placeholder={`Enter your ${type.toLowerCase()} here...`}
          searchOptions={searchOptions}
          onSelectOption={handleSelectOption}
        />
      </div>

      <div className="skills-container">
        <Button 
        style={{'box-sizing':'content-box',
        'display':'flex',
        'height':'14px',
        'width':'auto',
        'gap':'4px',
        'justify-content':'space-between',
        'text-wrap':'nowrap'}} 
        variant="secondary" 
        onClick={handleFocusSearch}>
          <span>add {type}</span><span>+</span>
        </Button>
        {items.map((item, index) => (
          <Chip
            key={index}
            icon={null}  
            variant="outline"
            onRemove={() => removeItem(index)}
          >
            {item}
          </Chip>
        ))}
      </div>

      {type === 'Location' && (
        <div className="location-container">
          <InputField 
            variant="country"
            placeholder="Select your country"
            onChange={handleCountryChange}
            value={location}
          />
          <Button variant="outline" onClick={handleAddItem}>
            Add Location
          </Button>
        </div>
      )}
    </div>
  );
};

export default SkillsInput;