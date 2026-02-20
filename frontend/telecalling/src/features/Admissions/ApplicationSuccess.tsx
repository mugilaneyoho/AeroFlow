import React from 'react'
import { GiConfirmed } from "react-icons/gi";
import AdmissionsBtn from './AdmissionsBtn';

type props = {
  currentStep: number;
  BackStep?: () => void;
  NextStep?: () => void;
  payment:any;
}


const ApplicationSuccess: React.FC<props> = ({ currentStep ,payment}) => {

  const data = payment?.data

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div className="flex flex-col gap-2 items-center justify-center mt-5">
        <div className='bg-blue-600 p-2 w-max h-max rounded-[50%] text-4xl text-white'>
          <GiConfirmed />
        </div>
        <p className='text-2xl font-black'>Admission Successfull</p>
        <p className='text-lg font-medium'>Student has been Successfully admitted</p>
      </div>
      <div className='flex w-2/4 *:w-full flex-col gap-5 justify-center items-center border-2 border-[#42454b8e] rounded-2xl p-4'>

        <div className='flex flex-col justify-center items-center gap-2 py-2 border-b border-dashed'>
          <p className='text-xl font-bold'>ADMISSION RECEIPT</p>
          <p className='text-lg font-semibold text-[#0000004D]'>Receipt No: {data?.receiptNumber}</p>
        </div>

        <div className=' grid grid-cols-1 border-b border-dashed'>
          <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Student Name:</p>
            <p className='text-xl font-medium'>{data?.studentName}</p>
          </div>
          <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Transaction Id:</p>
            <p className='text-xl font-medium'>{data?.transactionId}</p>
          </div>
          {/* <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Phone:</p>
            <p className='text-xl font-medium'>priya</p>
          </div> */}
          <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Date:</p>
            <p className='text-xl font-medium'>{data?.paymentDate}</p>
          </div>
        </div>

        <div className=' grid grid-cols-1 border-b border-dashed'>
          <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Total Course Fees:</p>
            <p className='text-xl font-medium'>priya</p>
          </div>
          <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Admission Fees Paid:</p>
            <p className='text-xl font-medium'>{data?.amount}</p>
          </div>
          {/* <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Balance Amount:</p>
            <p className='text-xl font-medium'>priya</p>
          </div> */}
        </div>

        <div className=' grid grid-cols-1 border-b border-dashed'>
          <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>Payment Mode:</p>
            <p className='text-xl font-medium'>priya</p>
          </div>
          <div className='py-2 flex flex-row justify-between'>
            <p className='text-[#0000004D] text-xl'>transaction ID:</p>
            <p className='text-xl font-medium'>{data?.transactionId}</p>
          </div>
        </div>

      </div>
      <AdmissionsBtn currentStep={currentStep} />

    </div>
  )
}

export default ApplicationSuccess