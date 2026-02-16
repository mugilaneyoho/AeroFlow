import React from 'react'

const PersonalDetails: React.FC = () => {
    return (
        <div className='flex flex-col gap-5 w-full mt-5'>
            <div className="flex flex-col gap-5 border-2 p-4 border-[#A99595] rounded-2xl">
                <p className='font-semibold text-2xl'>Personal information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input
                            type="text"
                            name="studentName"
                            placeholder="Enter Full Name"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select
                            name="gender"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Date Of Birth</label>
                        <input
                            type="text"
                            name="dob"
                            placeholder="DD-MM-YYYY"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 border-2 p-4 border-[#A99595] rounded-2xl">
                <p className='font-semibold text-2xl'>Contact Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Primary Phone</label>
                        <input
                            type="text"
                            name="primaryPhone"
                            placeholder="Enter number"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone</label>
                        <input
                            type="text"
                            name="alternatePhone"
                            placeholder="optional"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="text"
                            name="email"
                            placeholder="DD-MM-YYYY"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 border-2 p-4 border-[#A99595] rounded-2xl">
                <p className='font-semibold text-2xl'> Address Information</p>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder="Enter address"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                            type="text"
                            name="city"
                            placeholder="city"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                        <input
                            type="text"
                            name="state"
                            placeholder="state"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                        <input
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-5 border-2 p-4 border-[#A99595] rounded-2xl">
                <p className='font-semibold text-2xl'>Course & Academic Information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Educational Qualification</label>
                        <input
                            type="text"
                            name="education"
                            placeholder="qualification"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                   <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                        <select
                            name="gender"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                   <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Batch</label>
                        <select
                            name="gender"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admission Fee</label>
                        <input
                            type="text"
                            name="pincode"
                            placeholder="pincode"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetails