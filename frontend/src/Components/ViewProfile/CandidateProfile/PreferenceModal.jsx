import React, { useState } from "react";

const JobPreferenceModal = ({ preferences, onSaveChanges, onClose }) => {
  const [newPreference, setNewPreference] = useState("");

  const handleInputChange = (e) => {
    setNewPreference(e.target.value);
  };

  const handleAddPreference = () => {
    if (newPreference.trim() !== "") {
      onSaveChanges([...preferences, newPreference]);
      setNewPreference("");
    }
  };

  const handleRemovePreference = (index) => {
    const updatedPreferences = [...preferences];
    updatedPreferences.splice(index, 1);
    onSaveChanges(updatedPreferences);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white w-full max-w-md p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Edit Job Preferences</h2>
        <div className="mb-4">
          <input
            type="text"
            value={newPreference}
            onChange={handleInputChange}
            placeholder="Enter a new preference"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAddPreference}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mb-2"
        >
          Add Preference
        </button>
        <ul className="list-inside list-none">
          {preferences.map((preference, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-sm font-medium text-gray-600 hover:text-red-600 cursor-pointer py-2 px-4 border-b border-gray-200 last:border-b-0"
            >
              <span>{preference}</span>
              <button onClick={() => handleRemovePreference(index)} className="text-red-500 font-medium">Remove</button>
            </li>
          ))}
        </ul>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobPreferenceModal;
