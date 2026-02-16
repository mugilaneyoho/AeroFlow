import React, { useState } from 'react'
import { StepIndicator } from './Stepper';
import PersonalDetails from './PersonalDetails';

const AdmissionsForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
  return (
    <div className='mx-20'>
        <div className='flex flex-col gap-5 border-b-2 border-solid border-gray-300'>
            <p className='font-bold text-2xl'>Admission Process</p>
            <div className='flex flex-row gap-5 font-medium text-xl text-gray-400'>
                <p>Leads 987654323456</p>
                <p>priya sharma</p>
            </div>

            <StepIndicator currentStep={currentStep}/>
        </div>
        <div>
        {
            currentStep === 1 && <PersonalDetails/>
        }
        </div>

        <div className='flex flex-row gap-5 justify-end text-xl'>
            <div className='border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl'>
                <p>Cancel</p>
            </div>
            <div className='border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl'>
                <p>Save</p>
            </div>
            <div className='border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl'>
                <p>Next Payment Details</p>
            </div>
        </div>
    </div>
  )
}

export default AdmissionsForm