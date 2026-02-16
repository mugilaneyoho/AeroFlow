/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import { StepIndicator } from './Stepper';
import PersonalDetails from './PersonalDetails';
import PaymentDetails from './PaymentDetails';
import { useNavigate } from 'react-router-dom';
import ApplicationSuccess from './ApplicationSuccess';

const AdmissionsForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate()
    const formRef = useRef<any>(null)

    function NestStep() {
        setCurrentStep(currentStep + 1)
    }

    function BackStep() {
        setCurrentStep(currentStep - 1)
    }

    useEffect(() => {
        formRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }, [currentStep]);

    return (
        <div ref={formRef} className='mx-20'>
            <div className='flex flex-col gap-5 border-b-2 border-solid border-gray-300'>
                <p className='font-bold text-2xl'>Admission Process</p>
                <div className='flex flex-row gap-5 font-medium text-xl text-gray-400'>
                    <p>Leads 987654323456</p>
                    <p>priya sharma</p>
                </div>

                <StepIndicator currentStep={currentStep} />
            </div>
            <div>
                {currentStep === 1 && <PersonalDetails />}
                {currentStep === 2 && <PaymentDetails />}
                {currentStep === 3 && <ApplicationSuccess/>}
            </div>

            <div className='flex flex-row gap-5 justify-end text-xl mt-5'>

                {currentStep === 3 ?
                    <div className='flex flex-row gap-5'>
                        <div className=' cursor-pointer border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
                            <p>Download Receipt</p>
                        </div>
                        <div onClick={()=>navigate(-1)} className=' cursor-pointer border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
                            <p>Finish & Close</p>
                        </div>
                    </div>
                    :
                    <>
                        <div onClick={() => navigate(-1)} className='border-2 cursor-pointer border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
                            <p>Cancel</p>
                        </div>
                        {
                            currentStep !== 1 &&
                            <div onClick={BackStep} className=' cursor-pointer border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
                                <p>Back</p>
                            </div>
                        }
                        <div onClick={NestStep} className='cursor-pointer border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
                            <p>{currentStep === 1 ? 'Next Payment Details' : 'Confirm Payment'}</p>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}

export default AdmissionsForm