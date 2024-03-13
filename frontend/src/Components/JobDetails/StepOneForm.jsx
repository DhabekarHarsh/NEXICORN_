import React, { useState } from 'react';
import RoundedButton from './RoundedButton';
const StepOneForm = ({ nextStep }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      <div className="mb-4">
        <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="bg-gray-100  appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your first name"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="bg-gray-100  appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          placeholder="Enter your last name"
        />
      </div>
      <div className="bg-gray-100 border rounded-lg w-full py-2 px-3">

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Type of Job <span className='text-red-500'>*</span>
          </div>
          <div className="flex">
            <RoundedButton>Full Time</RoundedButton>
            <RoundedButton>Part Time</RoundedButton>
            <RoundedButton>Both(Full Time and Part Time)</RoundedButton>
          </div>
        </div>

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            What is the pay type? <span className='text-red-500'>*</span>
          </div>
          <div className="flex mb-2">
            <RoundedButton>Fixed Only</RoundedButton>
            <RoundedButton>Fixed + Incentive</RoundedButton>
            <RoundedButton>Incentive only</RoundedButton>
          </div>
        </div>

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Any additional perks? <span className='text-red-500'>*</span>
          </div>
          <div className="flex">
            <RoundedButton>Flexible working hours +</RoundedButton>
            <RoundedButton>Weekly Payout +</RoundedButton>
            <RoundedButton>Overtime Pay +</RoundedButton>
            <RoundedButton>Joining Bonus +</RoundedButton>
            <RoundedButton>Travel Allowance +</RoundedButton>
            <RoundedButton>Overtime Pay +</RoundedButton>
          </div>
        </div>
        <div className="font-semibold text-blue-800 mx-4">
          + Add your perks
        </div>

      </div>
    </div>
  );
};

export default StepOneForm;
