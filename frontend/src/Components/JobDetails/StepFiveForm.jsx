import React from "react";
import Expires from "../../assets/Expires.png";

const StepFiveForm = () => {
  return (
    <>
      <div className="font-semibold  text-xl py-2 px-3">
        Buy coins to close your hiring
      </div>
      <div className="flex bg-green-200 text-green-800 border rounded-lg w-full py-2 px-3">
        <div>
          Congratulation! SAVE300 coupon unlocked! Get 30% OFF on your first
          purchase
        </div>

        <div className="flex items-center mx-2">
          <img src={Expires} alt="Expiration Icon" className="h-5 w-5 mr-1" />
          <span className="text-red-600">Expires in 1 week</span>
        </div>

      </div>
    </>
  );
};

export default StepFiveForm;
