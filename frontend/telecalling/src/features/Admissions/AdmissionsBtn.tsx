import React from 'react'
import { useNavigate } from 'react-router-dom';

type props = {
    currentStep:number;
    BackStep?:()=>void;
    NextStep?:()=>void;
    handelSubmit?:()=>void;
}

const AdmissionsBtn:React.FC<props> = ({currentStep,BackStep,NextStep,handelSubmit}) => {
    const navigate = useNavigate()
    return (
        <div className='flex flex-row gap-5 justify-end text-xl mt-5'>
            {currentStep === 3 ?
                <div className='flex flex-row gap-5'>
                    <div className=' cursor-pointer border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
                        <p>Download Receipt</p>
                    </div>
                    <div onClick={() => navigate(-1)} className=' cursor-pointer border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
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
                    <div onClick={handelSubmit} className='cursor-pointer border-2 border-[#2516F8] px-8 py-2 font-medium rounded-xl hover:bg-[#2516F8] hover:text-white'>
                        <p>{currentStep === 1 ? 'Next Payment Details' : 'Confirm Payment'}</p>
                    </div>
                </>
            }
        </div>
    )
}

export default AdmissionsBtn