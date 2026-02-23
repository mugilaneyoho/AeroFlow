/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import AdmissionsBtn from './AdmissionsBtn'
import { useCreatePaymentAdmissionMutation } from '../../services/RTKQuery/CallerQueryApi';
import { useParams } from 'react-router-dom';

type props = {
    currentStep:number;
    BackStep?:()=>void;
    NextStep?:()=>void;
    student:any;
    setpayment:(data:any)=>void;
}

const PaymentDetails:React.FC<props> = ({currentStep,BackStep,NextStep,student,setpayment}) => {


    const amountRef = useRef<HTMLInputElement | null>(null)
    const paymentDateRef = useRef<HTMLInputElement | null>(null)
    const TransacRef = useRef<HTMLInputElement | null>(null)
    const paymentModeRef = useRef<HTMLSelectElement | null>(null)
    const paymentRemarkRef = useRef<HTMLInputElement | null>(null)

    const {uuid} = useParams()

    const [CreatePayment,{isLoading,isSuccess}] = useCreatePaymentAdmissionMutation()

    const handelSubmit = async()=>{
        const admissionFees = amountRef.current?.value;
        const paymentDate = paymentDateRef.current?.value;
        const paymentMode = paymentModeRef.current?.value;
        const transactionId = TransacRef.current?.value;
        const studentId = student?.uuid;
        const studentName = student?.student_name;
        const remarks = paymentRemarkRef.current?.value;

        const data = {
            admissionFees,
            paymentDate,
            paymentMode,
            transactionId,
            studentId,
            studentName,
            remarks,
            leadid:uuid,
            courseName:student?.course?.course_name,
            batchId:student?.batch_id,
        }

        const res = await CreatePayment(data)

        setpayment(res?.data)

        NextStep?.()
    }

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5 mt-5 border-2 p-4 border-[#A99595] rounded-2xl' >
            <p className='text-2xl font-semibold'>Student Summary</p>
            <div className=" grid grid-cols-4 gap-5">
                <div><p className='text-[#776E6E] font-medium text-xl'>Name: <span className='text-black text-xl font-bold ml-2'>{student?.student_name}</span> </p></div>
                <div><p className='text-[#776E6E] font-medium text-xl'>Phone: <span className='text-black text-xl font-bold ml-2'>{student?.phone_number}</span> </p></div>
                <div><p className='text-[#776E6E] font-medium text-xl'>Course: <span className='text-black text-xl font-bold ml-2'>{student?.course?.course_name}</span> </p></div>
                <div><p className='text-[#776E6E] font-medium text-xl'>Addmission Fees: <span className='text-black text-xl font-bold ml-2'>50000</span> </p></div>
            </div>
        </div>

        <div className='flex flex-col gap-5 border-[#A99595] border-2 rounded-2xl p-4'>
            <p className='font-semibold text-2xl'>Payment Information</p>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admission Fees Paying</label>
                        <input
                            type="text"
                            ref={amountRef}
                            name="addmissionFee"
                            placeholder="Enter amount"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                        <input
                            type="date"
                            name="paymentDate"
                            ref={paymentDateRef}
                            placeholder="DD-MM-YYYY"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode</label>
                        <select
                            name="paymentMode"
                            ref={paymentModeRef}
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>select mode</option>
                            <option value='upi'>UPI</option>
                            <option value='card'>CARD</option>
                            <option value='netbanking'>NET BANKING</option>
                        </select>
                    </div>
                    {/* <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Receipt Number</label>
                        <input
                            type="text"
                            name="state"
                            placeholder="state"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div> */}
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID / Reference Number</label>
                        <input
                            type="text"
                            name="pincode"
                            ref={TransacRef}
                            placeholder="transaction id"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    {/* <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Collected By Telecaller Name</label>
                        <input
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div> */}
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Remarks</label>
                        <input
                            type="text"
                            name="pincode"
                            ref={paymentRemarkRef}
                            placeholder="remarks"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                </div>
        </div>

        {/* <div className='flex flex-col gap-5 border-black border-2 bg-[#2516F833] rounded-2xl p-4'>
            <p className='font-semibold text-2xl'>Payment Information</p>
            <div className='flex flex-col gap-2'>
            <div className='flex flex-row justify-between'>
                <p className='font-medium text-xl'>Admission Fees:</p>
                <p className='font-medium text-xl'>100</p>
            </div>
            <div className='flex flex-row justify-between'>
                <p className='font-medium text-xl'>Admission Fees Paying:</p>
                <p className='font-medium text-xl'>100</p>
            </div>
            <div className='flex flex-row justify-between mt-5 border-t pt-4'>
                <p className='font-medium text-xl text-[#2516F8]'>Balance Amount:</p>
                <p className='font-medium text-xl text-[#2516F8]'>100</p>
            </div>
            </div>
        </div> */}

        <AdmissionsBtn currentStep={currentStep} BackStep={BackStep} NextStep={NextStep} handelSubmit={handelSubmit}/>
    </div>
  )
}

export default PaymentDetails