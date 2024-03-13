import React from "react";

const Job = () => {
  return (
    <div className="border border-gray-300 rounded p-4 mx-5 my-2 shadow-lg" style={{ width: '1030px', height: '132px', borderRadius: '12px' }}>
      <div className="flex justify-between">
        <div className="mt-4 mb-4">
          <div className="flex flex-row items-center mb-4">
            <div className="flex flex-col items-center text-lg font-bold mr-4">
              Driver
            </div>
            <div className="select-plate-button text-red-500 bg-gray-100 px-2 py-1 rounded text-xs">
              Select Plan
            </div>
          </div>
          <div className="flex">
            <div className="select-plate-button text-blue-500 bg-gray-100 px-2 py-1 rounded text-xs mr-2">
              Job Role: <span className="text-black">Driver</span>
            </div>
            <div className="select-plate-button text-blue-500 bg-gray-100 px-2 py-1 rounded text-xs">
              Posted on: <span className="text-black">15 Jan 2024</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>0</div>
          <div>Action pending</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div>0</div>
          <div>Action candidates</div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <button className="border border-blue-800 rounded px-4 py-2">Select plan</button>
        </div>
      </div>
    </div>
  );
};

export default Job;
