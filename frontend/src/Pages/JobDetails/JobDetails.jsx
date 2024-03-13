import React, { useState } from 'react';
import Stepper from '../../Components/JobDetails/Stepper';
import StepOneForm from '../../Components/JobDetails/StepOneForm';
import StepTwoForm from '../../Components/JobDetails/StepTwoForm';
import StepThreeForm from '../../Components/JobDetails/StepThreeForm';
import StepFourForm from '../../Components/JobDetails/StepFourForm';
import StepFiveForm from '../../Components/JobDetails/StepFiveForm';

const Form = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
  };

  const renderStepComponent = (step) => {
    switch (step) {
      case 1:
        return <StepOneForm nextStep={nextStep} />;
      case 2:
        return <StepTwoForm nextStep={nextStep} />;
      case 3:
        return <StepThreeForm nextStep={nextStep} />;
      case 4:
        return <StepFourForm nextStep={nextStep} />;
      case 5:
        return <StepFiveForm />;
      default:
        return null;
    }
  };

  return (
    <>

    <div className="max-w-6xl mx-auto p-8">
    <Stepper currentStep={currentStep} steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5']} />
      <form onSubmit={handleSubmit}>
        {renderStepComponent(currentStep)}
        <div className="mt-4 flex justify-center">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="text-black border border-black hover:bg-gray-200 py-1 px-20 rounded mx-2">
              Back
            </button>

          )}
          {currentStep < 5 && (
            <button type="button" onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded mx-2">
              Continue
            </button>
          )}
          {currentStep === 5 && (
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded mx-2">
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
    </>

  );
};

export default Form;
