
import React, { useState } from "react";
import JobList from "../../Pages/MyJobs/JobList/index";
import jobImg from "../../assets/jobImg.png";
import DropDown from "../../Components/JobSearch/DropDown";
const JobSearch = () => {

  const MonthlySalary = ["Upto Rs. 2000" , "Rs. 2001 - Rs. 4000" , "Rs. 4001 - Rs. 6000" , "Rs. 6000+"] ;
  const WorkType = ["Fresher" , "Intership" , "Full Time"] ;
  const Gender = ["Jobs for Men" , "Jobs for Women"] ;


  const jobsData = [
    {
      id: 1,
      jobImg: jobImg,
      jobRole: "2D Animator",
      salary: "50,000 - 1,49,999/Per month",
      jobType: "Full Time",
      location: "Pune",
      openings: "5+",
      date: "1",
      saved: false,
    },
    {
      id: 1,
      jobImg: jobImg,
      jobRole: "2D Animator",
      salary: "50,000 - 1,49,999/Per month",
      jobType: "Full Time",
      location: "Pune",
      openings: "5+",
      date: "1",
      saved: false,
    },
    {
      id: 1,
      jobImg: jobImg,
      jobRole: "2D Animator",
      salary: "50,000 - 1,49,999/Per month",
      jobType: "Full Time",
      location: "Pune",
      openings: "5+",
      date: "1",
      saved: false,
    },
    {
      id: 1,
      jobImg: jobImg,
      jobRole: "2D Animator",
      salary: "50,000 - 1,49,999/Per month",
      jobType: "Full Time",
      location: "Pune",
      openings: "5+",
      date: "1",
      saved: false,
    },
  ];

  const [filteredJobs, setFilteredJobs] = useState(jobsData);

  return (
    <>

      <div className="flex flex-col md:flex-row items-center border border-blue-500 rounded-md px-4 py-2 mx-4 md:mx-10 my-4">
        <input
          type="text"
          placeholder="Search..."
          className="rounded-md md:rounded-l-md py-2 px-4 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        />
        <input
          type="text"
          placeholder="Location..."
          className="rounded-md md:rounded-r-md py-2 px-4 mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        />
        <button className="bg-blue-800 hover:bg-blue-600 text-white py-2 px-4 rounded-md md:ml-auto">
          Update Search
        </button>
      </div>


      <div className="flex">
        <div className="w-64 h-full bg-white border border-gray-200 rounded p-4 flex flex-col justify-between mx-10">
          <div className="flex">
            <div>
              <h1 className="text-blue-500 text-xl font-bold mb-4">Filters</h1>
            </div>
            <div className="text-black text-gray-500 font-semibold ml-auto">
              Clear
            </div>
          </div>
          <hr className="my-4" />

          <div className="flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:border-blue-500"
            />

          </div>

          <div className="flex">
            <div className="text-sm border border-blue-500 rounded-lg  my-1 px-1 py-1">
              UI/UX designer
            </div>
            <div className="text-sm border border-blue-500 rounded-lg  my-1 px-1 py-1">
              Product designer
            </div>
          </div>
          <div className="text-sm border border-blue-500 rounded-lg my-1 px-1 py-1">
            Graphic designer
          </div>

          <DropDown options = {MonthlySalary}>Monthly Salary</DropDown>
          <DropDown options ={WorkType}>Work type</DropDown>
          <DropDown options = {Gender} >Gender</DropDown>
        </div>

        <div>
          <div className="flex">
            <div class="font-bold text-xl">1234 Results</div>
            <div className="ml-auto">Sort by </div>
          </div>

          <JobList filteredJobs={filteredJobs} />
        </div>
      </div>
    </>
  );
};

export default JobSearch;
