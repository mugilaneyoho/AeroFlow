import { studentInfo as studentinfo } from "../../dummyData/studentManagement";
import { useState, useEffect } from "react";
import axios from "axios";

const StudentInfo = () => {

    interface StudentInfo {
        id: number;
        image: string;
        name: string;
        courseId: string;
        email: string;
        phonenumber: string;
        course: string;
        mode: string;
        dateOfAdmission: string;
        batch: string;
        totalFee?: string;
        pendingAmount?: string;
        paidAmount?: string;
        qualification: string;
        attendance: string;
        paidStatus: string;
    }

    const [studentInfo, setStudentInfo] = useState<StudentInfo[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<StudentInfo | null>(null);

    useEffect(() => {
        const fetchStudentsInfo = async () => {
            try {
                const response = await axios.get<StudentInfo[]>("url");
                setStudentInfo(response.data);
            }
            catch (err) {
                console.error(err);
            }
        };
        fetchStudentsInfo();
    }, []);

    return (
        <div className="flex gap-2 flex-wrap my-4">
            {studentinfo?.map((student) => (
                <div key={student.id} className="shadow-[0px_0px_15px_0px_#EDBF5C_inset] p-2 rounded-md">
                    <div className="w-60 mx-auto shadow-[0px_0px_15px_0px_#0000001A] p-3 rounded-md">
                        <div className="flex gap-5 justify-center py-3">
                            <img src={student.image} alt={student.name} className="w-12 h-12" />
                            <div>
                                <h1 className="text-[#565656] text-xl">{student.name}</h1>
                                <h2 className="text-sm">{student.courseId}</h2>
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
                                <h1 className="text-sm font-medium">{student.phonenumber}</h1>
                            </div>
                        </div>
                        <div className="border border-black/50 mb-1"></div>
                        <h1 className="text-[#54191D] font-medium py-1">Academic Information</h1>
                        <div className="grid grid-cols-2 w-full">
                            <div>
                                <h2 className="text-[#565656] text-sm">Course Intrested</h2>
                                <h1 className="text-sm font-medium">{student.course}</h1>
                            </div>
                            <div className="text-right">
                                <h2 className="text-[#565656] text-sm">Mode</h2>
                                <h1 className="text-sm font-medium">{student.mode}</h1>
                            </div>
                            <div>
                                <h2 className="text-[#565656] text-sm">Date of Admisssion</h2>
                                <h1 className="text-sm font-medium">{student.dateOfAdmission}</h1>
                            </div>
                            <div className="text-right">
                                <h2 className="text-[#565656] text-sm">Batch</h2>
                                <h1 className="text-sm font-medium">{student.batch}</h1>
                            </div>
                        </div>
                        <div className="flex-1 bg-[#54191D] text-[#EDBF5C] rounded-lg my-2">
                            <button onClick={() => setSelectedStudent(student)} className="w-full h-full py-1 cursor-pointer">
                                view
                            </button>
                        </div>
                    </div>
                </div>
            ))}

            {selectedStudent && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white p-2 rounded-lg max-w-lg w-full max-h-[97vh]">
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
                                        <img src={selectedStudent.image} alt={selectedStudent.name} className="w-17 h-17" />
                                    </div>
                                </div>
                                <div className="flex gap-10">
                                    <div>
                                        <div className="text-[#8B8A8A]">Student name</div>
                                        <div className="text-[#8B8A8A]">Student ID</div>
                                        <div className="text-[#8B8A8A]">Email</div>
                                        <div className="text-[#8B8A8A]">mobile no</div>
                                    </div>
                                    <div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.name}</div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.courseId}</div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.email}</div>
                                        <div className="text-black font-bold ml-3">{selectedStudent.phonenumber}</div>
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
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.course}</h2>
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
                                            <div className="absolute bg-[#46278F] rounded-md h-2" style={{ width: selectedStudent.attendance }} >

                                            </div>
                                        </div>
                                        <div className="font-medium">
                                            {selectedStudent.attendance}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Batch</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.course}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Class mode</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.mode}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Admission Date</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.dateOfAdmission}</h2>
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
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.totalFee}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Pending Amount</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.pendingAmount}</h2>
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Paid Amount</h2>
                                        <h2 className="border-2 border-[#B4B3B3] px-1 rounded-md font-medium">{selectedStudent.paidAmount}</h2>
                                    </div>
                                    <div>
                                        <h2 className="text-[#8F8F8F]">Payment status</h2>
                                    </div>
                                    <div className="flex gap-3">
                                        <div className="bg-[#D9D9D9] rounded-md h-2 w-20 my-2 relative">
                                            <div className="absolute bg-[#46278F] rounded-md h-2 " style={{ width: selectedStudent.paidStatus }}>

                                            </div>
                                        </div>
                                        <div className="font-medium">
                                            {selectedStudent.paidStatus}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button onClick={() => setSelectedStudent(null)} className="mt-1 bg-[#D20F0F] text-white py-1 px-4 rounded-sm mx-4">
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