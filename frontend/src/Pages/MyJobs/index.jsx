import React,{useState} from 'react'
import jobImg from "../../assets/jobImg.png";
import SearchBar from "../../assets/searchbar.png";
import JobList from "./JobList/index.jsx"
import Sidebar from './Sidebar/index.jsx';
import "./index.css";

const MyJobs = () => {

    const jobsData = [
        {
          id : 1,
          jobImg : jobImg,
          jobRole : "2D Animator",
          salary : "50,000 - 1,49,999/Per month",
          jobType : "Full Time",
          location : "Pune",
          openings : "5+",
          date : "1",
          saved : false
        },
        {
            id : 1,
            jobImg : jobImg,
            jobRole : "2D Animator",
            salary : "50,000 - 1,49,999/Per month",
            jobType : "Full Time",
            location : "Pune",
            openings : "5+",
            date : "1",
            saved : false
          },
          {
            id : 1,
            jobImg : jobImg,
            jobRole : "2D Animator",
            salary : "50,000 - 1,49,999/Per month",
            jobType : "Full Time",
            location : "Pune",
            openings : "5+",
            date : "1",
            saved : false
          },
          {
            id : 1,
            jobImg : jobImg,
            jobRole : "2D Animator",
            salary : "50,000 - 1,49,999/Per month",
            jobType : "Full Time",
            location : "Pune",
            openings : "5+",
            date : "1",
            saved : false
          }
      ];

      const [filteredJobs, setFilteredJobs] = useState(jobsData);
    
  return (
    <div className="max-w-7xl mx-auto ">
      <div class="flex w-full my-6 justify-between flex-col lg:flex-row">
        <div class='lg:w-1/5 text-3xl text-blue-700 p-2'>My Jobs</div>
        <div class='flex lg:w-4/5 p-2'>
          <div class='flex-1 flex rounded-md border border-solid border-gray-500'>
              <div class='lg:w-4/5 m-auto p-1'>
                <input class='w-full p-2' placeholder='Search Job By Name'></input>
              </div>
              <div class='lg:w-1/5 flex justify-center align-middle p-2'>
                <img class='w-1/3' src={SearchBar} alt="/"/>
              </div>
          </div>
          <div class='w-1/4 flex justify-center align-middle p-2'>Sort By</div>
        </div>
      </div>
      <div class="my-2 w-100 flex">
        <div class='w-1/5 h-50vh p-4 hidden lg:block'>
            <Sidebar></Sidebar>
        </div>
        <div class='w-full lg:w-4/5'>
        <JobList filteredJobs={filteredJobs}/>
        </div>
      </div>
    </div>
  )
}

export default MyJobs