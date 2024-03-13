import React, { useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import EditLanguagesModal from "./EditLanguagesModal";
import UploadModal from "./UploadModal"; // Import the UploadModal component

const Languages = () => {
  const initialLanguagesData = [
    { language: "English", proficiency: "Advanced" },
    { language: "Hindi", proficiency: "Native" },
  ];

  const [languagesData, setLanguagesData] = useState(initialLanguagesData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false); // State for upload modal

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const openUploadModal = () => {
    setIsUploadModalOpen(true);
  };

  const closeUploadModal = () => {
    setIsUploadModalOpen(false);
  };

  const updateLanguagesData = (newData) => {
    setLanguagesData(newData);
    closeEditModal();
  };

  return (
    <div className="mb-12">
      <div className="bg-gray-100  rounded-lg py-6 px-8">
        <div className="flex items-center justify-between gap-8">
          <div>
            <h1 className="text-lg font-medium tracking-wide text-gray-800">
              Languages Known
            </h1>
          </div>
          <div className="flex items-center  text-blue-700 gap-3" onClick={openEditModal}>
            <FaRegEdit className="text-xl font-medium" />{" "}
            <span className="font-medium">Edit</span>
          </div>
        </div>
        <div className="pt-6 flex items-center gap-4">
          {languagesData.map((language, index) => (
            <div key={index} className="px-3 py-2 text-sm bg-white text-gray-300 border rounded-lg">
              {language.language} - <span className="text-blue-600">{language.proficiency}</span>
            </div>
          ))}
        </div>
      </div>
      {isEditModalOpen && (
        <EditLanguagesModal
          languagesData={languagesData}
          updateLanguagesData={updateLanguagesData}
          onClose={closeEditModal}
        />
      )}
      <div className="bg-gray-100 rounded-lg py-6 px-8 mt-12">
        <h1 className="text-lg font-medium tracking-wide text-gray-800">
          Upload Video Resume
        </h1>
        <p className="text-gray-400 py-4 font-medium text-sm  ">
          Having the required level of English speaking proficiency will help you
          find a job at top companies
        </p>
        <div className="flex items-center gap-6 justify-center px-6 lg:w-1/2 py-2 bg-white border rounded text-blue-600 border-blue-500" onClick={openUploadModal}>
          <IoMdAdd className="text-lg" />
          <span className="font-medium ">Upload</span>
        </div>
      </div>
      {isUploadModalOpen && ( <UploadModal onClose={closeUploadModal} />
      )}
    </div>
  );
};

export default Languages;

