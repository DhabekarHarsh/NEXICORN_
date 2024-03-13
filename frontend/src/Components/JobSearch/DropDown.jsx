import React, { useState } from 'react';

const DropDown = ({children , options}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [componentHeight, setComponentHeight] = useState(0);


  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setComponentHeight(showOptions ? 0 : 150);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="relative" style={{ marginBottom: componentHeight }}>
      <div className=" p-4 text-blue-500 text-lg font-semibold cursor-pointer" onClick={toggleOptions}>
        {children}
      </div>
      {showOptions && (
        <div
          className="absolute top-10 bg-white p-4  rounded-md"
          style={{ height: componentHeight, transition: 'height 0.3s ease-in-out' }}
        >
          {options.map((option, index) => (
            <label key={index} className="block mb-2 flex items-center">
              <input
                type="radio"
                value={option}
                checked={selectedOption === option}
                onChange={handleOptionChange}
                className="mr-6"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropDown;
