import React, { useState } from 'react';
import './Dropdown.scss'; // CSS for styles
import { message } from 'antd';

const DropdownWithButton = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('Facebook');
  const [selectedCategory, setSelectedCategory] = useState('Select Category');

  const platforms = ['Instagram', 'Snapchat', 'Facebook', 'YouTube'];
  const categories = ['Select Category', 'Category 1', 'Category 2', 'Category 3']; // Add "Select Category"

  const handleSearchClick = () => {
  
    if (selectedCategory === 'Select Category') {
      message.open({
        type:"error",
        content : "Please select a valid category",
        duration:2
      })
    } else {
      message.open({
        type:"success",
        content : `Selected Platform: ${selectedPlatform} , Selected Category: ${selectedCategory}`,
        duration:2
    });
    }
  };

  return (
    <div className="dropdown-container">
      <select
        className="custom-select platform-select"
        value={selectedPlatform}
        onChange={(e) => setSelectedPlatform(e.target.value)}
      >
        {platforms.map((platform, index) => (
          <option key={index} value={platform}>
            {platform}
          </option>
        ))}
      </select>

      <select
        className="custom-select category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>

      <button className="search-btn" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default DropdownWithButton;
