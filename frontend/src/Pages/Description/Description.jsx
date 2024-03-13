import React from "react";
import descriptionImg from "../../assets/description.png";
import NotSaved from "../../assets/notSaved.png";
import NexicornLogo from "../../assets/NexicornLogo.png";
import SalaryIcon from "../../assets/SalaryIcon.png";
import KeyFeatures from "./KeyFeatures/index.jsx";
import Pros from "./Pros/index.jsx";
import JobReq from "./JobRequirements/index.jsx";
import JobDetails from "./JobDetails/index.jsx";
import AboutCompany from "./AboutCompany/index.jsx";
import MoreJobs from "./MoreJobs/index.jsx";
import "./index.css";

const Description = () => {
  return (
    // <div class=" m-4 mx-auto md-8">
    //   <div class="flex justify-between ml-6 mr-8">
    //     <div class="w-1/5 flex items-center p-4">
    //       <img src={descriptionImg} alt="/" />
    //     </div>
    //     <div class="w-4/5 flex custom-shadow-desc p-4">
    //       <div class="w-1/2 p-4 mt-4">
    //         <div class="flex w-full">
    //           <div class="flex items-center text-3xl p-2 w-3/5">
    //             Product Designer
    //           </div>
    //           <div class="flex justify-center items-center w-1/5">
    //             <img class="w-1/5 flex" src={NotSaved} alt="/" />
    //           </div>
    //         </div>
    //         <div class="flex">
    //           <div class="flex justify-center items-center p-2">
    //             <img src={NexicornLogo} alt="/" />
    //           </div>
    //           <div class="flex justify-center items-center p-2 text-xl">
    //             Nexicorn Solutions
    //           </div>
    //         </div>
    //         <div class="flex">
    //           <div class="flex justify-center items-center p-2">
    //             <img src={SalaryIcon} alt="/" />
    //           </div>
    //           <div class="flex justify-center items-center p-2 text-xl">
    //             50,000 -1,49,999 / Per month
    //           </div>
    //         </div>
    //       </div>
    //       <div class="w-1/2 p-4 flex justify-evenly items-start mt-4">
    //         <button class="custom-shadow-btn1 h-10 text-xl">
    //           Register to apply
    //         </button>
    //         <button class="custom-shadow-btn2 text-white h-10 text-xl">
    //           Login to Apply
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="flex w-full">
    //     <KeyFeatures></KeyFeatures>
    //   </div>
    //   <div class="flex w-full">
    //     <Pros></Pros>
    //   </div>
    //   <div class="flex w-full">
    //     <div class="w-[80%] flex flex-col justify-between m-2">
    //       <div class="">
    //         <JobReq></JobReq>
    //       </div>
    //       <div  class="">
    //         <JobDetails></JobDetails>
    //       </div>
    //     </div>
    //     <div class="w-[40%] flex flex-col justify-between m-2">
    //       <div>
    //         <AboutCompany></AboutCompany>
    //       </div>
    //       <div class="">
    //         <MoreJobs></MoreJobs>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    <div className="max-w-7xl mx-auto">
      <div class="flex justify-between ml-6 mr-8">
        <div class="w-1/5 flex items-center p-4">
          <img src={descriptionImg} alt="/" />
        </div>
        <div class="w-4/5 flex custom-shadow-desc p-4">
          <div class="w-1/2 p-4 mt-4">
            <div class="flex w-full">
              <div class="flex items-center text-3xl p-2 w-3/5">
                Product Designer
              </div>
              <div class="flex justify-center items-center w-1/5">
                <img class="w-1/5 flex" src={NotSaved} alt="/" />
              </div>
            </div>
            <div class="flex">
              <div class="flex justify-center items-center p-2">
                <img src={NexicornLogo} alt="/" />
              </div>
              <div class="flex justify-center items-center p-2 text-xl">
                Nexicorn Solutions
              </div>
            </div>
            <div class="flex">
              <div class="flex justify-center items-center p-2">
                <img src={SalaryIcon} alt="/" />
              </div>
              <div class="flex justify-center items-center p-2 text-xl">
                50,000 -1,49,999 / Per month
              </div>
            </div>
          </div>
          <div class="w-1/2 p-4 flex justify-evenly items-start mt-4">
            <button class="custom-shadow-btn1 h-10 text-xl">
              Register to apply
            </button>
            <button class="custom-shadow-btn2 text-white h-10 text-xl">
              Login to Apply
            </button>
          </div>
        </div>
      </div>

      <KeyFeatures></KeyFeatures>

      <Pros></Pros>

      <div className="flex mx-4">
        <div className="w-2/3">
          <JobReq></JobReq>
          <JobDetails></JobDetails>
        </div>
        <div className="w-1/3">
          <AboutCompany></AboutCompany>
          <MoreJobs></MoreJobs>
        </div>
      </div>
    </div>
  );
};

export default Description;
