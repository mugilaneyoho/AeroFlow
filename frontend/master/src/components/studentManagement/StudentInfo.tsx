/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { getStudentByIdThunk, getStudentsThunk } from "../../features/student/reducer/thunk";
import { selectStudent, selectStudents } from "../../features/student/reducer/selector";
import { clearSelectedStudent } from "../../features/student/reducer/studentSlice";


interface Student {
  id: number;
  uuid: string;
  course_id: string;
  batch_id: string;
  admittedBy: string;
  student_name: string;
  student_id: string;
  email: string;
  phone_number: string;
  alter_number?: string;
  gender: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  qualification: string;
  admission_date: string;
  is_active: boolean;
  is_delete: boolean;
}


const StudentInfo = () => {

    const dispatch =useDispatch<AppDispatch>()
    const students = useSelector(selectStudents) as Student[];
    const selectedStudent = useSelector(selectStudent) as Student;

    const handleViewStudent = (student:Student) => {
    dispatch(getStudentByIdThunk(student.uuid));
    };

    return (
        <div className="flex gap-2 flex-wrap my-4">
            {students?.map((student:any) => (
                <div key={student.uuid} className="shadow-[0px_0px_15px_0px_#EDBF5C_inset] p-2 w-80 rounded-md">
                    <div className="w-full mx-auto shadow-[0px_0px_15px_0px_#0000001A] p-3 rounded-md">
                        <div className="flex gap-5 justify-between py-3">
                            <img src={student.student_name} alt={student.student_name} className="w-12 h-12" />
                            <div>
                                <h1 className="text-[#565656] text-xl">{student.student_name}</h1>
                                <h2 className="text-sm">{student.id}</h2>
                            </div>
                        </div>
                        <h1 className="text-[#54191D] font-medium py-1">Contact Information</h1>
                        <div className="grid grid-cols-2 mb-3 w-full">
                            <div>
                                <h2 className="text-[#565656] text-sm">Email</h2>
                                <h1 className="text-sm font-medium">{student.email}</h1>
                            </div>
                            <div className="text-right">
                                <h2 className="text-[#565656] text-sm">Phone Number</h2>
                                <h1 className="text-sm font-medium">{student.phone_number}</h1>
                            </div>
                        </div>
                        <div className="border border-black/50 mb-1"></div>
                        <h1 className="text-[#54191D] font-medium py-1">Academic Information</h1>
                        <div className="grid grid-cols-2 w-full">
                            <div>
                                <h2 className="text-[#565656] text-sm">Course Intrested</h2>
                                <h1 className="text-sm font-medium">{student.course_id}</h1>
                            </div>
                            <div className="text-right">
                                <h2 className="text-[#565656] text-sm">Mode</h2>
                                <h1 className="text-sm font-medium">{student.is_active}</h1>
                            </div>
                            <div>
                                <h2 className="text-[#565656] text-sm">Date of Admisssion</h2>
                                <h1 className="text-sm font-medium">{new Date(student.admission_date).toISOString().split("T")[0]}</h1>
                            </div>
                            <div className="text-right">
                                <h2 className="text-[#565656] text-sm">Batch</h2>
                                <h1 className="text-sm font-medium">{student.batch.batchCode}</h1>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#54191D] text-[#EDBF5C] rounded-lg my-2">
                            <button onClick={() => handleViewStudent(student)} className="w-full h-full py-1 cursor-pointer">
                                view
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {selectedStudent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
                    <div className="bg-white p-2 rounded-lg max-w-lg w-full h-[90%] overflow-y-auto no-scrollbar">
                        <div className="mx-4">
                            <h1 className="text-xl font-bold">View Student Details</h1>
                            <p className="text-[#8B8A8A]">View student of your institute training program</p>
                        </div>
                        <div className="shadow-[0px_0px_14px_0px_#00000040] rounded-lg mx-4 p-2 mt-1">
                            <h1 className="font-bold text-lg">Personal Details</h1>
                            <div className="flex gap-5">
                                <div className="flex flex-col items-center">
                                    <h1 className="font-medium">View Student Image</h1>
                                    <div className="my-2">
                                        <img src={selectedStudent.student_name} alt={selectedStudent.student_name} className="w-17 h-17" />
                                    </div>
                                </div>
                                <div className="flex gap-10  justify-center">
                                    <div>
                                        <div className="text-[#8B8A8A]">Student_Name </div>
                                        <div className="text-[#8B8A8A]">Student ID</div>
                                        <div className="text-[#8B8A8A]">Email</div>
                                        <div className="text-[#8B8A8A]">mobile no</div>
                                    </div>
                                    <div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.student_name}</div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.student_id}</div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.email}</div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.phone_number}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shadow-[0px_0px_14px_0px_#00000040] rounded-lg mx-4 my-2 p-2">
                            <h1 className="font-bold text-lg">Educational details</h1>
                            <div className="flex gap-4 flex-2">
                                <div className="flex-1">
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Course</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.id}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Education Qualification</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.qualification}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Attendance</h2>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="bg-[#D9D9D9] rounded-md h-2 w-20 my-2 relative">
                                            <div className="absolute bg-[#46278F] rounded-md h-2" style={{ width:"80%" }} >

                                            </div>
                                        </div>
                                        <div className="font-medium">
                                            {selectedStudent.student_id}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Batch</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.course_id}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Class mode</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.is_active}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Admission Date</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium"> {new Date(selectedStudent.admission_date).toISOString().split("T")[0]}</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="shadow-[0px_0px_14px_0px_#00000040] rounded-lg mx-4 p-2 mb-1">
                            <h1 className="font-bold text-lg">Fee Information</h1>
                            <div className="flex gap-4 flex-2">
                                <div className="flex-1">
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Total Fee</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">fees</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Pending Amount</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">amount</h2>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Paid Amount</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">paidAmount</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Payment status</h2>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="bg-[#D9D9D9] rounded-md h-2 w-20 my-2 relative">
                                            <div className="absolute bg-[#46278F] rounded-md h-2 " style={{ width: "80"}}>

                                            </div>
                                        </div>
                                        <div className="font-medium">
                                            "80"
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button onClick={() => dispatch(clearSelectedStudent())} className="mt-1 bg-[#D20F0F] text-white py-1 px-4 rounded-sm mx-4">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default StudentInfo;