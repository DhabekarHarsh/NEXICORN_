import React from 'react'
import Sidebar from './Sidebar/index.jsx';
import PostJobIcon from "../../assets/postJobIcon.png";
import "./PostNewJob.css";
import SearchIconBlue from "../../assets/SearchIconBlue.png";
const PostNewJob = () => {
  return (
    <div className="mx-auto flex justify-between">
          <div class='w-2/7 mr-8'>
            <Sidebar></Sidebar>
          </div>
          <div class='w-5/6 p-8'>
            <div class='mb-4 flex justify-between'>
              <div class='w-4/6 flex justify-between custom-searchbar-newjob'>
                <div class='ml-6 flex text-xl justify-center items-center p-2'>Search posted jobs</div>
                <div class='mr-6 flex text-xl justify-center items-center p-2'>
                  <img src={SearchIconBlue} alt="/"/>
                </div>
              </div>
              <div class='m-2 flex justify-center'>
                <button class='text-white custom-btn-newjob p-4'>Post a new job +</button>
              </div>
            </div>
            <div class='p-4 custom-bg-postnewjob h-5/6 flex flex-col justify-evenly'>
              <div class='m-2 flex justify-center w-full text-5xl custom-col-blue'>Post a first Job</div>
              <div class='mx-auto w-1/2 m-2 text-2xl text-center custom-col-text-grey'>It appears you haven't posted any jobs yet. Begin now to discover the ideal candidates for your company.</div>
              <div class='m-2 w-full flex items-center justify-center'>
                <img src={PostJobIcon} alt="/"/>
              </div>
              <div class='m-2 w-full flex justify-center'>
                <button class='text-white custom-btn-newjob p-4'>Post a new job +</button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default PostNewJob