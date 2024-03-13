import React from "react";
import { IoMdAdd } from "react-icons/io";

const Documents = () => {
  return (
    <div className="mb-12">
      <div className="bg-gray-100 rounded-lg py-6 px-8 mt-8">
        <h1 className="text-lg font-medium tracking-wide text-gray-800">
          Documents & assets
        </h1>
        <p className="text-gray-400 py-4 font-medium text-sm  ">
          Adding your documented and assets will increase your visibility with
          employers by 26%
        </p>

        <div className="flex items-center gap-6 justify-center px-6 lg:w-1/2 py-2 bg-white border rounded text-blue-600 border-blue-500">
          <IoMdAdd className="text-lg" />
          <span className="font-medium ">Add preferred title/role</span>
        </div>
      </div>
    </div>
  );
};

export default Documents;
