import React from 'react'
import NotSaved from "../../../assets/notsaved.png";
import openingIcon from "../../../assets/openingIcon.png";
import postedIcon from "../../../assets/postedIcon.png";
import jobTypeIcon from "../../../assets/jobTypeIcon.png";
import locationIcon from "../../../assets/locationIcon.png";
import salaryIcon from "../../../assets/salaryIcon.png";


const JobList = ({filteredJobs}) => {
  console.log("fil is ",filteredJobs);
  return (
    <div>
        {filteredJobs.map(job => (
        <div class='w-100 p-1 lg:p-5 flex my-6 justify-between custom-box-shadow m-auto'>
            <div class='w-1/3 lg:w-1/6 flex p-1 lg:p-4'>
                <img src={job.jobImg} alt="/"/>
            </div>
            <div class='w-2/3 flex flex-1 flex-col justify-between p-1'>
              <div class='flex w-full justify-between p-1 lg:p-2'>
                <div class="text-xl w-1/2 lg:w-4/5 p-1">{job.jobRole}</div>
                <div class='flex w-1/3 lg:w-1/5 p-1 justify-evenly'>
                  <div class='p-1 lg:w-1/5 flex justify-center align-middle'>
                    <img class='h-1/2 lg:h-full' src={NotSaved} alt="/"/>
                  </div>
                  <div class=' p-1'>Save</div>
                </div>
              </div>
              <div class='flex w-full justify-start p-1 lg:p-2'>
                <div class='p-0.5 pr-2'>
                  <img src={salaryIcon} alt="/"/>
                </div>
                <div class='p-0.5'>{job.salary}</div>
              </div>
              <div class='flex w-full justify-between p-1 lg:p-2'>
                <div class='flex flex-col w-full lg:w-4/5 justify-between'>
                  <div class='flex w-1/1.5 justify-between'>
                    <div class='flex w-1/2 justify-start'>
                      <div class='p-0.5 pr-2'>
                        <img src={jobTypeIcon} alt="/"/>
                      </div>
                      <div class='p-0.5'>{job.jobType}</div>
                    </div>
                    <div class='flex w-1/2 justify-start'>
                      <div class='p-0.5 pr-2'>
                        <img src={openingIcon} alt="/"/>
                      </div>
                      <div class='p-0.5 '>{job.openings} opening</div>
                    </div>
                  </div>
                  <div class='flex w-1/1.5 justify-between'>
                    <div class='flex w-1/2 justify-start'>
                      <div class='p-0.5 pr-2'>
                        <img src={locationIcon} alt="/"/>
                      </div>
                      <div class='p-0.5'>{job.location}</div>
                    </div>
                    <div class='flex w-1/2 justify-start'>
                      <div class='p-0.5 pr-2'>
                        <img src={postedIcon} alt="/"/>
                      </div>
                      <div class='p-0.5'>Posted {job.date} month ago</div>
                    </div>
                  </div>
                </div>
                <div class='hidden lg:flex flex-col w-1/5'>
                  <div class='flex bg-custom-blue rounded-lg p-1'>
                    <div class='m-auto p-1 text-white'>Apply Now</div>
                  </div>
                </div>
                </div>
            </div>
        </div>
    ))}
    </div>
  )
}

export default JobList