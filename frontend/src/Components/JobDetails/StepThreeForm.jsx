import React from "react";
import RoundedButton from "./RoundedButton";
const StepThreeForm = () => {
  return (
    <>
      <div className="font-semibold  text-xl py-2 px-3">
        Interview information
      </div>
      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3 text-blue-700">
        Leads information will be accessible on Jobsown and can be <b>downloaded in
        excel</b> format.
      </div>
      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="px-3 py-3">
          <div className="text-lg font-semibold  mt-2 py-2 px-3">What is your favorite color?</div>
          <div className="flex items-center mb-2 px-3">
            <input type="radio" id="option1" name="color" className="mr-2" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center mb-2 px-3">
            <input type="radio" id="option2" name="color" className="mr-2" />
            <label htmlFor="option2">Option 2</label>
          </div>
          <div className="flex items-center mb-2 px-3">
            <input type="radio" id="option3" name="color" className="mr-2" />
            <label htmlFor="option3">Option 3</label>
          </div>

          <div className="text-lg font-semibold  mt-2 py-2 px-3 py-3">What is your favorite color?</div>
          <div className="flex items-center mb-2 px-3">
            <input type="radio" id="option1" name="color" className="mr-2" />
            <label htmlFor="option1">Option 1</label>
          </div>
          <div className="flex items-center mb-2 px-3">
            <input type="radio" id="option2" name="color" className="mr-2" />
            <label htmlFor="option2">Option 2</label>
          </div>
        </div>
      </div>

      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="font-semibold  text-xl py-2 px-3">Notification Prefrences</div>
        <div className="text-lg font-semibold  mt-2 py-2 px-3">What is your favorite color?</div>
        <div className="flex items-center mb-2 px-3">
          <input type="radio" id="option1" name="color" className="mr-2" />
          <label htmlFor="option1">Option 1</label>
        </div>
        <div className="flex items-center mb-2 px-3">
          <input type="radio" id="option2" name="color" className="mr-2" />
          <label htmlFor="option2">Option 2</label>
        </div>
      </div>

      <div className="my-4 bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="font-semibold  text-xl py-2 px-3">Interview method and address*</div>
        <div className="flex">
          <RoundedButton>Inperson interview</RoundedButton>
          <RoundedButton>Online interview</RoundedButton>
        </div>
        <div className="text-lg font-semibold  mt-2 py-2 px-3">Company Address</div>
        <input
          type="text"
          className="appearance-none border rounded-lg w-full py-2 px-3 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="New Delhi, India"
        />
      </div>
    </>
  );
};

export default StepThreeForm;
