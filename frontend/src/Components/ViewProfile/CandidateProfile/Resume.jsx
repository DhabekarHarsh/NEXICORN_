import React from "react";
import { IoMdAdd } from "react-icons/io";

const Resume = () => {
  return (
    <div>
      <div className="space-y-2">
        <h1 className="text-xl font-medium text-gray-800">Resume</h1>
        <p className="text-sm font-medium text-gray-400">Only visible to HR</p>
      </div>
      <div className="bg-gray-100 mb-12 rounded-lg py-6 px-8 mt-8">
        <p className="text-gray-400 py-4 font-medium text-sm  ">
          Having the reuired level of english speaking proficiency will help you
          find job at top companies
        </p>

        <div className="flex items-center gap-6 justify-center px-6 lg:w-1/2 py-2 bg-white border rounded text-blue-600 border-blue-500">
          <IoMdAdd className="text-lg" />
          <span className="font-medium ">Verify Now</span>
        </div>
      </div>
    </div>
  );
};

export default Resume;
