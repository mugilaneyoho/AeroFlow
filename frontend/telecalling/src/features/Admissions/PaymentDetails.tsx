import React from 'react'

const PaymentDetails:React.FC = () => {

  return (
    <div className='flex flex-col gap-5'>
        <div className='flex flex-col gap-5 mt-5 border-2 p-4 border-[#A99595] rounded-2xl' >
            <p className='text-2xl font-semibold'>Student Summary</p>
            <div className=" grid grid-cols-4 gap-5">
                <div><p className='text-[#776E6E] font-medium text-xl'>Name: <span className='text-black text-xl font-bold ml-2'>divriya</span> </p></div>
                <div><p className='text-[#776E6E] font-medium text-xl'>Phone: <span className='text-black text-xl font-bold ml-2'>9876543214</span> </p></div>
                <div><p className='text-[#776E6E] font-medium text-xl'>Course: <span className='text-black text-xl font-bold ml-2'>FullStack</span> </p></div>
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
                            name="addmissionFee"
                            placeholder="Enter address"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Date</label>
                        <input
                            type="text"
                            name="paymentDate"
                            placeholder="DD-MM-YYYY"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Mode</label>
                        <select
                            name="paymentMode"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Receipt Number</label>
                        <input
                            type="text"
                            name="state"
                            placeholder="state"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Transaction ID / Reference Number</label>
                        <input
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Collected By Telecaller Name</label>
                        <input
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Payment Remarks</label>
                        <input
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                </div>
        </div>

        <div className='flex flex-col gap-5 border-black border-2 bg-[#2516F833] rounded-2xl p-4'>
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
        </div>
    </div>
  )
}

export default PaymentDetails