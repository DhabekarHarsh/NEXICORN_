import React, { useState } from "react";

const EditLanguagesModal = ({ languagesData, updateLanguagesData, onClose }) => {
  const [formData, setFormData] = useState(languagesData);

  const handleInputChange = (index, e) => {
    const { name, value } = e.target;
    const updatedData = [...formData];
    updatedData[index][name] = value;
    setFormData(updatedData);
  };

  const handleAddLanguage = () => {
    setFormData([...formData, { language: "", proficiency: "" }]);
  };

  const handleRemoveLanguage = (index) => {
    const updatedData = [...formData];
    updatedData.splice(index, 1);
    setFormData(updatedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateLanguagesData(formData);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white w-full max-w-md p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Edit Languages</h2>
          <form onSubmit={handleSubmit}>
            {formData.map((language, index) => (
              <div key={index} className="mb-4">
                <label htmlFor={`language-${index}`} className="block text-gray-700 font-medium mb-1">{`Language ${index + 1}:`}</label>
                <input type="text" id={`language-${index}`} name="language" value={language.language} onChange={(e) => handleInputChange(index, e)} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
                <label htmlFor={`proficiency-${index}`} className="block text-gray-700 font-medium mb-1 mt-2">Proficiency:</label>
                <input type="text" id={`proficiency-${index}`} name="proficiency" value={language.proficiency} onChange={(e) => handleInputChange(index, e)} className="border border-gray-300 rounded-lg px-4 py-2 w-full" />
                <button type="button" onClick={() => handleRemoveLanguage(index)} className="text-red-500 font-medium mt-2">Remove</button>
              </div>
            ))}
            <button type="button" onClick={handleAddLanguage} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Add Language</button>
            <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 ml-2">Save Changes</button>
            <button type="button" onClick={onClose} className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 ml-2">Cancel</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditLanguagesModal;
