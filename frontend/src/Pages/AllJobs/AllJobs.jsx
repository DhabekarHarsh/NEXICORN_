import React from "react";
import Header from "./Header";
import Sidebar from "../FinalHomeScreen/SideBar";
import NewJobButton from "./NewJobButton";
import Job from "./Job";

const AllJobs = () => {
  return (
    <>
      <Header />
      <div className="flex">
        <div>
          <Sidebar />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center justify-center">
            <div className="text-2xl font-bold ml-6">All Jobs</div>
            <div className="ml-auto mx-6 my-6">
              <NewJobButton />
            </div>
          </div>

          <div>
            <Job />
            <Job />
            <Job />
            <Job />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllJobs;
