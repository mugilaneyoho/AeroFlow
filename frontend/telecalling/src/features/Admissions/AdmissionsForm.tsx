/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from 'react'
import { StepIndicator } from './Stepper';
import PersonalDetails from './PersonalDetails';
import PaymentDetails from './PaymentDetails';
import { useLocation, useNavigate } from 'react-router-dom';
import ApplicationSuccess from './ApplicationSuccess';

const AdmissionsForm = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const navigate = useNavigate()
    const formRef = useRef<any>(null)
    const [student, setstudent] = useState<any | null>(null);
    const [paymentdata,setpaymentdata] = useState<any | null>(null);
    const {state} = useLocation()

    function NextStep() {
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
                    <p>Leads {state?.phone}</p>
                    <p>{state?.name}</p>
                </div>

                <StepIndicator currentStep={currentStep} />
            </div>
            <div>
                {currentStep === 1 && <PersonalDetails currentStep={currentStep} BackStep={BackStep} NextStep={NextStep} setStudent={setstudent}/>}
                {currentStep === 2 && <PaymentDetails currentStep={currentStep} BackStep={BackStep} NextStep={NextStep} student={student} setpayment={setpaymentdata}/>}
                {currentStep === 3 && <ApplicationSuccess currentStep={currentStep} payment={paymentdata} />}
            </div>
        </div>
    )
}

export default AdmissionsForm