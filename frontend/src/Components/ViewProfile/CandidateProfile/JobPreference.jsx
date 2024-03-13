import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import PreferenceModal from "./PreferenceModal"

const JobPreference = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [preferences, setPreferences] = useState([
    "Night Shift",
    "Work from Home",
    "Work of Office",
    "Mobile UI design"
  ]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveChanges = (updatedPreferences) => {
    setPreferences(updatedPreferences);
    handleCloseModal();
  };

  return (
    <>
      <div className="bg-gray-100 mt-12 mb-12 rounded-lg py-6 px-8">
        <div className="flex items-center justify-between gap-8">
          <div>
            <h1 className="text-lg font-medium tracking-wide text-gray-800">
              Job preferences
            </h1>
          </div>
          <div className="flex items-center text-blue-700 gap-3 cursor-pointer" onClick={handleOpenModal}>
            <FaArrowRight className="text-xl font-medium" />
          </div>
        </div>
        <ul className="lg:flex pt-5 gap-3 list-inside list-none">
          {preferences.map((preference, index) => (
            <li key={index} className="text-sm font-medium text-gray-400">{preference}</li>
          ))}
        </ul>
      </div>
      {isModalOpen && (
        <PreferenceModal preferences={preferences} onSaveChanges={handleSaveChanges} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default JobPreference;
