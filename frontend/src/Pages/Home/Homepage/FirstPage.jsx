import React from "react";
import "./FirstPage.css";
import HomepageBg1 from "../Images/HomepageBg1.png";
import searchbar from "../Images/searchbar.png";
import SearchIcon from "../../../assets/SearchIcon.png";
import LocationIcon from "../../../assets/LocationIcon.png";

function FirstPage() {
  return (
    <div className="FirstPageBox">
      <div className="HomePage1">
        <div className="TypeOfJop">
          <div className="Type1">Job Seeker</div>
          <div className="Type2">Job Provider</div>
        </div>
        <div className="HomePageBg">
          {/* <img src={HomepageBg1} alt='HomepageBg1' className='HomepageBg1Img' /> */}
          <div className="HomePageContent1 lg:pt-20">
            <div className="sloganContent hidden lg:block">
              Unlock Your Career Potential with JobOwn:
              <br /> Your Gateway to Opportunities
            </div>
            <div className="sloganContent block lg:hidden">
              JobOwn: Elevate Your Career Journey
            </div>
            <div className="HomePageSearch hidden lg:flex lg:w-[60%] w-3/4 lg:h-20 h-12 mx-auto">
              <input
                type="text"
                placeholder="Search Jobs"
                className="HomePageSearchIcon"
              />
              |
              <input
                type="text"
                placeholder="Country, State, City"
                className="HomePageSearchIcon"
              />
              <button
                type="search"
                className="lg:w-14 lg:h-14 w-10 h-10 lg:pr-0 pr-2"
              >
                <img src={searchbar} alt="" className="" />
              </button>
            </div>
            <div className="hidden lg:block lg:ms-[280px] lg:pt-52">
              <div className="   w-3/4 ps-3">
                <div className="flex items-center justify-center Apply">
                  <div class="underline text-blue-800 lg:text-xl text-lg">
                    Apply for jobs
                  </div>
                  <div class="text-black lg:text-xl text-lg">-</div>
                  <div class="text-black lg:text-xl text-lg ">
                    within seconds
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class='w-4/5 mx-auto lg:hidden mt-10 custom-input1'>
           <div class='flex custom-border-firstpage'>
              <div class='w-1/5 p-2'>
                <img src={SearchIcon} alt="/"/>
              </div>
              <input
                  type="text"
                  placeholder="Search Jobs,Title"
                  className="w-3/5 flex justify-center items-center p-2"
                />
           </div>
           <div class='flex'>
              <div class='w-1/5 p-2'>
                <img src={LocationIcon} alt="/"/>
              </div>
              <input
                  type="text"
                  placeholder="Location"
                  className="w-3/5 flex justify-center items-center p-2"
                />
           </div>
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
