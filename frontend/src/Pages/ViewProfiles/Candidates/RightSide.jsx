import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import ExperienceCard from "../../../Components/ViewProfile/CandidateProfile/ExperienceCard";
import Skills from "../../../Components/ViewProfile/CandidateProfile/Skills";
import Languages from "../../../Components/ViewProfile/CandidateProfile/Languages";
import Resume from "../../../Components/ViewProfile/CandidateProfile/Resume";
import OtherDetails from "../../../Components/ViewProfile/CandidateProfile/OtherDetails";
import Location from "../../../Components/ViewProfile/CandidateProfile/Location";
import Documents from "../../../Components/ViewProfile/CandidateProfile/Documents";

const RightSide = () => {
  const [experiences, setExperiences] = useState([<ExperienceCard key={0} />]);

  const addExperience = () => {
    const newExperience = <ExperienceCard key={experiences.length} />;
    setExperiences([...experiences, newExperience]);
  };

  return (
    <div className="lg:px-0 px-6">
      <div>
        {/* work experience */}
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-medium tracking-wide text-gray-600">
            Work Experience
          </h1>
          <div
            className="flex items-center  text-blue-700 gap-3"
            onClick={addExperience}
            style={{ cursor: "pointer" }}
          >
            <IoMdAdd className="text-xl font-medium" />{" "}
            <span className="font-medium">Add</span>
          </div>
        </div>

        {experiences.map((experience, index) => (
          <div key={index}>{experience}</div>
        ))}

        <div className="pt-6">
          {/* Other content */}
          <Skills />
          <Languages />
          <Resume />
          <OtherDetails />
          <Location />
          <Documents />
        </div>
      </div>
    </div>
  );
};

export default RightSide;
