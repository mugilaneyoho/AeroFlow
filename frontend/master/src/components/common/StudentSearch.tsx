import { Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import { getStudentsThunk } from "../../features/student/reducer/thunk";
import { selectStudents } from "../../features/student/reducer/selector";

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
const StudentSearch = () => {

    let students = useSelector(selectStudents) as Student[]
    const [searchText, setSearchText] = useState("")
    const [course, setCourse] = useState("All Courses")
    const [status, setStatus] = useState("All Status")
    const [filtered, setFiltered] = useState<Student[]>([]);


    useEffect(() => {
        if (searchText) {
            students = students?.filter(
                (s) =>
                    s.student_name.toLowerCase().includes(searchText.toLowerCase())
            );
        }
        setFiltered(students);
    }, [searchText]);


    return (
        <div className="flex flex-1 shadow-[0px_0px_15px_0px_#0000001A] rounded-md p-2">
            <div className="flex-5 relative">
                <h1 className="font-bold text-black">Search Student</h1>
                <div className="absolute inset-y-10 inset-x-2">
                    <Search className="text-gray-400" />
                </div>
                <input type="text"
                    placeholder="Search by name,email,phone, or student ID..."
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    className="pl-10 border border-black rounded-lg py-2 px-4 focus:outline-none w-120 my-2" />
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-black">Course</h1>
                <select value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className="border border-black rounded-lg py-2 px-4 focus:outline-none my-2 cursor-pointer">
                    <option>All Courses</option>
                    <option>Course 1</option>
                    <option>Course 2</option>
                </select>
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-black">Status</h1>
                <select value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-black rounded-lg py-2 px-4 focus:outline-none my-2 cursor-pointer">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>

        </div>
    )
}

export default StudentSearch;