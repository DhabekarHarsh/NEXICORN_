import React from 'react'
import StepFourFormContent from './StepFourFormContent'

const StepFourForm = () => {
  return (
    <div>
        <div className="my-4"><StepFourFormContent heading = "Job Details"/></div>
        <div className="my-4"><StepFourFormContent heading = "Candidates Requirements"/></div>
        <div className="my-4"><StepFourFormContent heading = "Interview Information"/></div>



    </div>
  )
}

export default StepFourForm