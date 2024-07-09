import React, { useRef, useState } from 'react';
import CustomTextComponent from '../../components/chips/filledChip/index';
import CustomButton from '../../components/chips/plainChip';
import VariantButton from '../chips/variantButton';
import InputField from '../../components/inputField/index'; // Ensure the correct import
import search from '../../assets/icons/search.png';

const SkillsInput = ({ type, items, setItems }) => {
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
    if (item) {
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

  return (
    <div>
      <div className="search-container">
        <span className="search-label">{type}</span>
        <InputField 
          ref={searchInputRef} 
          onKeyPress={handleKeyPress}
          placeholder={`Enter your ${type.toLowerCase()} here...`}
        />
      </div>

      <div className="skills-container">
        <CustomTextComponent onFocusSearch={handleFocusSearch} type={type} />
        {items.map((item, index) => (
          <CustomButton
            key={index}
            text={item}
            onRemove={() => removeItem(index)}
          />
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
          {/* Add the new VariantButton */}
          <VariantButton />
        </div>
      )}
    </div>
  );
};

export default SkillsInput;
