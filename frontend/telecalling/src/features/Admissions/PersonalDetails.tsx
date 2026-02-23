/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import AdmissionsBtn from './AdmissionsBtn';
import { useCreateStudentAdmissionMutation, useGetAllBatchQuery, useGetAllcourseQuery } from '../../services/RTKQuery/CallerQueryApi';
import { GetProfileUUID } from '../../utils/LocalStorage';

type props = {
    currentStep:number;
    BackStep?:()=>void;
    NextStep?:()=>void;
    setStudent:(data:any)=>void
}

const PersonalDetails: React.FC<props> = ({currentStep,BackStep,NextStep,setStudent}) => {

    const studentNameRef = useRef<HTMLInputElement | null>(null)
    const genderRef = useRef<HTMLSelectElement | null>(null)
    const emailRef = useRef<HTMLInputElement | null>(null)
    const phoneRef = useRef<HTMLInputElement | null>(null)
    const qualificationRef = useRef<HTMLInputElement | null>(null)
    const AlterRef = useRef<HTMLInputElement | null>(null)
    const admissionDateRef = useRef<HTMLInputElement | null>(null)
    // const passwordRef = useRef<HTMLInputElement | null>(null)
    const addressRef = useRef<HTMLInputElement | null>(null)
    const cityRef = useRef<HTMLInputElement | null>(null)
    const stateRef = useRef<HTMLInputElement | null>(null)
    const pincodeRef = useRef<HTMLInputElement | null>(null)
    const admissionFeesRef = useRef<HTMLInputElement | null>(null)
    const batchRef = useRef<HTMLSelectElement | null>(null)

    const [courseId, setcourseId] = useState<string | null>(null);

    const {data:courseData} = useGetAllcourseQuery('course')

    const {data:BatchData} = useGetAllBatchQuery(courseId,{
        skip:!courseId
    })

    const [createStudent,{isLoading}] = useCreateStudentAdmissionMutation()
    console.log(isLoading)

    async function handelsubmit(){
        const course_id = courseId;
        const batch_id = batchRef.current?.value;
        const student_name = studentNameRef.current?.value;
        const email = emailRef.current?.value;
        const phone_number = phoneRef.current?.value;
        const alter_number = AlterRef.current?.value;
        const qualification = qualificationRef.current?.value;
        const admission_date = admissionDateRef.current?.value;
        const gender = genderRef.current?.value;
        const address = addressRef.current?.value;
        const city = cityRef.current?.value;
        const state = stateRef.current?.value;
        const pincode = pincodeRef.current?.value;
        const admissionFees = admissionFeesRef.current?.value
        const admittedBy = GetProfileUUID()

        const data ={
            course_id,
            batch_id,
            student_name,
            email,
            phone_number,
            alter_number,
            qualification,
            admission_date,
            gender,
            address,
            city,
            state,
            pincode,
            admittedBy,
            admissionFees
        }

        const res = await createStudent(data)

        setStudent(res?.data?.data)

        NextStep?.()
    }

    return (
        <div className='flex flex-col gap-5 w-full mt-5'>
            <div className="flex flex-col gap-5 border-2 p-4 border-[#A99595] rounded-2xl">
                <p className='font-semibold text-2xl'>Personal information</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student Name</label>
                        <input
                            type="text"
                            ref={studentNameRef}
                            name="studentName"
                            placeholder="Enter Full Name"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                        <select
                            name="gender"
                            ref={genderRef}
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>select gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admission Date</label>
                        <input
                            type="date"
                            ref={admissionDateRef}
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
                            ref={phoneRef}
                            name="primaryPhone"
                            placeholder="Enter number"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Alternate Phone</label>
                        <input
                            type="text"
                            ref={AlterRef}
                            name="alternatePhone"
                            placeholder="optional"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            ref={emailRef}
                            name="email"
                            placeholder="enter email"
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
                            ref={addressRef}
                            name="address"
                            placeholder="Enter address"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                        <input
                            type="text"
                            ref={cityRef}
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
                            ref={stateRef}
                            placeholder="state"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Pincode</label>
                        <input
                            type="number"
                            name="pincode"
                            ref={pincodeRef}
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
                            ref={qualificationRef}
                            placeholder="qualification"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                   <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Course Name</label>
                        <select
                            name="gender"
                            onChange={(e)=>setcourseId(e.target.value)}
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>Select Course</option>
                            {
                                courseData?.map((course:any)=>(
                                    <option key={course.uuid} value={course?.uuid}>{course?.course_name}</option>
                                ))
                            }
                        </select>
                    </div>
                   <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Select Batch</label>
                        <select
                            name="gender"
                            ref={batchRef}
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        >
                            <option>Select Batch</option>
                            {
                                BatchData?.map((batch:any)=>(
                                    <option key={batch?.uuid} value={batch?.uuid}>{batch?.batch_name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className='col-span-2'>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Admission Fee</label>
                        <input
                            type="number"
                            name="pincode"
                            ref={admissionFeesRef}
                            placeholder="admission fees"
                            className="w-full border bg-[#F5F5F5] border-[#79747E] rounded-md p-2 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <AdmissionsBtn handelSubmit={handelsubmit} currentStep={currentStep} BackStep={BackStep} NextStep={NextStep} />
        </div>
    )
}

export default PersonalDetails