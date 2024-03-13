import React, { useState } from "react";
import RoundedButton from './RoundedButton';
import Attach from "../../assets/Attach.png" ;
import Bold from "../../assets/Bold.png" ;
import Italic from "../../assets/Italic.png" ;
import Underline from "../../assets/Underline.png" ;
import NumberPoints from "../../assets/NumberPoints.png" ;
import Points from "../../assets/Points.png" ;

const StepTwoForm = () => {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);

  const handleToggleBold = () => {
    setIsBold(!isBold);
  };

  const handleToggleItalic = () => {
    setIsItalic(!isItalic);
  };

  return (
    <div>
      <div className="bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Minimum Education <span className="text-red-500">*</span>
          </div>
          <div className="flex">
            <RoundedButton>10th or below 10th</RoundedButton>
            <RoundedButton>12th pass</RoundedButton>
            <RoundedButton>diploma</RoundedButton>
            <RoundedButton>ITI</RoundedButton>
            <RoundedButton>Graduate</RoundedButton>
            <RoundedButton>Post Graduate</RoundedButton>
          </div>
        </div>

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Total experience required <span className="text-red-500">*</span>
          </div>
          <div className="flex mb-2">
            <RoundedButton>Any</RoundedButton>
            <RoundedButton>Experienced only</RoundedButton>
            <RoundedButton>Freshers only</RoundedButton>
          </div>
        </div>

        <div className="my-4">
          <div className="font-medium py-1 px-4 mb-2">
            Language <span className="text-red-500">*</span>
          </div>
          <div className="flex">
            <RoundedButton>English +</RoundedButton>
            <RoundedButton>Hindi +</RoundedButton>
            <RoundedButton>Arabic +</RoundedButton>
          </div>
        </div>
        <div className="font-semibold text-blue-800 mx-4">+ Add your perks</div>
      </div>
      <div>
        <h2 className="text-2xl font-medium py-3">Additional Requirement (Optional)</h2>
      </div>
      <div className="bg-gray-100 border rounded-lg w-full py-2 px-3">
        <div className="flex">
          <RoundedButton>Age +</RoundedButton>
          <RoundedButton>Gender +</RoundedButton>
          <RoundedButton>Skills +</RoundedButton>
          <RoundedButton>Regional languages +</RoundedButton>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-medium py-3">Job Description </h2>
        <textarea
          className="w-full border rounded-lg px-3 py-2"
          placeholder="Enter job description..."
          rows="4"
          style={{
            fontWeight: isBold ? "bold" : "normal",
            fontStyle: isItalic ? "italic" : "normal",
          }}
        ></textarea>

        <div className="flex  bg-gray-100 border rounded-lg w-full py-2 px-3">
          <button>
            <img src={Attach} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button
            onClick={handleToggleBold}
            className={`font-medium mr-4 ${isBold ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <img src={Bold} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button
            onClick={handleToggleItalic}
            className={`italic ${isItalic ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <img src={Italic} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={Underline} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={NumberPoints} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={Points} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
          <button>
            <img src={Italic} alt="Bold Icon" className="w-6 h-6 mx-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwoForm;
