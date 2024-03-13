import React, { useState } from "react";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import EditExperienceModal from "./EditExperienceModal";

const ExperienceCard = () => {
  const initialExperienceData = {
    title: "Product design intern",
    company: "Nexicorn",
    department: ["UI / UX Design", "Mobile UI design"],
    industry: ["AI tool / Development"],
    startDate: "Dec 2022",
    endDate: "Present",
    employmentType: "Full-time",
  };

  const [experienceData, setExperienceData] = useState(initialExperienceData);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

  const updateExperienceData = (newData) => {
    setExperienceData(newData);
    closeEditModal();
  };

  return (
    <section className="mt-8 mb-8">
      <div className="bg-gray-100 px-4 rounded-lg py-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex gap-4 lg:gap-8">
            <MdOutlineMapsHomeWork className="text-4xl mt-2" />
            <div>
              <h1 className="text-lg font-medium tracking-wide text-gray-800">
                {experienceData.title}
              </h1>
              <p className="text-sm font-medium text-gray-800">
                {experienceData.company}
              </p>
            </div>
          </div>
          <div
            className="flex items-center  text-blue-700 gap-3"
            onClick={openEditModal}
          >
            <FaRegEdit className="text-xl font-medium" />
            <span className="font-medium">Edit</span>
          </div>
        </div>
        <div className="lg:ps-[68px]">
          <div className="pt-6">
            <h3 className="text-sm text-gray-400 font-medium ">Department</h3>
            <ul className="flex pt-2 gap-3 list-inside list-disc">
              <li className="text-sm font-medium text-gray-800">
                {experienceData.department}
              </li>
            </ul>
          </div>
          <div className="pt-6">
            <h3 className="text-sm text-gray-400 font-medium ">Industry</h3>
            <ul className="flex pt-2 gap-3 list-inside list-disc">
              <li className="text-sm font-medium text-gray-800">
                {experienceData.industry}
              </li>
            </ul>
          </div>
          <div className="pt-6 flex items-center gap-4">
            <div className="px-3 py-2 text-sm bg-white text-gray-300 border rounded-lg">
              {experienceData.startDate} {experienceData.endDate}
            </div>
            <div className="px-3 py-2 text-sm bg-white text-gray-300 border rounded-lg">
              {experienceData.employmentType}
            </div>
          </div>
        </div>
      </div>
      {isEditModalOpen && (
        <EditExperienceModal
          experienceData={experienceData}
          updateExperienceData={updateExperienceData}
          onClose={closeEditModal}
        />
      )}
    </section>
  );
};

export default ExperienceCard;
