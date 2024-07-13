import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import Select from 'react-select';
import Flag from 'react-world-flags';
import defaultSearchIcon from '../../assets/icons/search.png'; 

const sizes = {
  small: '12px',
  default: '16px',
  large: '24px',
};

const variants = {
  outlined: css`
    border: 1px solid #000;
    background-color: #fff;
    color: #4A45FF;
    border-radius: 32px;
    &:focus-within {
      border: 1px solid var(--primary-accent-color);
    }
  `,
  secondary: css`
    border: 1px solid #ddd;
    background-color: #f9f9f9;
    color: #444;
  `,
  country: css`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
    border-radius: 32px;
    &:focus-within {
      border: 1px solid var(--primary-accent-color);
    }
    height: 35px; /* Specific height for country variant */
    width: 122px; /* Specific width for country variant */
  `,
};

const StyledInputContainer = styled.div`
  display: flex;
  align-items: center;
  ${({ variant }) => variants[variant]}
  width: ${({ width, variant }) => (variant === 'country' ? '122px' : width || '100%')};
  height: ${({ height, variant }) => (variant === 'country' ? '20px' : height || 'auto')};
  padding: 10px 16px;
  position: relative;

  img {
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  background: transparent;
  color: inherit;
  transition: color 0.5s ease-in-out;

  &::placeholder {
    color: #aaa;
    transition: color 0.2s ease-in-out;
  }

  &:focus::placeholder {
    color: #666; /* Placeholder color when focused */
  }
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  max-height: 200px;
  overflow-y: auto;
  z-index: 1000;
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const DropdownItem = styled.div`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const CountrySelectContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%; /* Ensure it matches the parent container */

  .react-select__control {
    border: none;
    box-shadow: none;
    background: transparent;
    font-size: 15px;
    color: inherit;
    height: 100%; /* Match the height */
  }

  .react-select__placeholder {
    color: #aaa;
  }

  .react-select__single-value {
    display: flex;
    align-items: center;
    color: inherit;
  }

  .react-select__single-value img {
    margin-right: 10px;
    height: 20px;
    width: 20px;
  }
`;

const InputField = React.forwardRef(({
  type = 'search',
  variant = 'outlined',
  width,
  height,
  icon,
  searchOptions = [],
  onSelectOption,
  ...props
}, ref) => {
  const [searchText, setSearchText] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const defaultIcon = type === 'search' ? defaultSearchIcon : 'None';
  const displayIcon = icon !== undefined ? icon : defaultIcon;

  useEffect(() => {
    if (searchText) {
      const filtered = searchOptions.filter(option =>
        option.label.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredOptions(filtered);
    } else {
      setFilteredOptions(searchOptions);
    }
  }, [searchText, searchOptions]);

  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const formatOptionLabel = ({ value, label, flag }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Flag code={flag} style={{ marginRight: 10, height: 10, width: 20 }} />
      <span>{label}</span>
    </div>
  );

  const handleSelect = (option) => {
    onSelectOption(option);
    setSearchText('');
    setFilteredOptions([]);
    setDropdownOpen(false);
  };

  const handleFocus = () => {
    setDropdownOpen(true);
  };

  const handleBlur = () => {
    setTimeout(() => setDropdownOpen(false), 200); 
  };

  return (
    <StyledInputContainer variant={variant} width={width} height={height}>
      {variant === 'country' && selectedCountry && (
        <Flag code={selectedCountry.flag} alt="flag" />
      )}
      {displayIcon !== 'None' && variant !== 'country' && <img src={displayIcon} alt="icon" />}
      {variant === 'country' ? (
        <CountrySelectContainer>
          <Select
            ref={ref}
            options={countryOptions}
            onChange={handleCountryChange}
            placeholder="Select"
            classNamePrefix="react-select"
            value={selectedCountry}
            formatOptionLabel={formatOptionLabel}
            {...props}
          />
        </CountrySelectContainer>
      ) : (
        <>
          <StyledInput
            ref={ref}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
          <Dropdown isOpen={dropdownOpen}>
            {filteredOptions.map((option, index) => (
              <DropdownItem key={index} onClick={() => handleSelect(option)}>
                {option.label}
              </DropdownItem>
            ))}
            {searchText && !filteredOptions.find(option => option.label === searchText) && (
              <DropdownItem onClick={() => handleSelect({ label: searchText, value: searchText })}>
                {searchText}
              </DropdownItem>
            )}
          </Dropdown>
        </>
      )}
    </StyledInputContainer>
  );
});

export default InputField;

const countryOptions = [
  { value: 'US', label: 'US', flag: 'US' },
  { value: 'CA', label: 'CAN', flag: 'CA' },
  { value: 'GB', label: 'UK', flag: 'GB' },
  { value: 'IN', label: 'IND', flag: 'IN' },
];
