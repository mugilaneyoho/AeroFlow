import { Search } from "lucide-react";
import { useSelector } from "react-redux";

import { useEffect, useState } from "react";

import { selectStudents } from "../../features/student/reducer/selector";
import type { StudentType } from "../../types/studentTypes";


const StudentSearch = ({ setFiltered }: { setFiltered: (data: StudentType[]) => void }) => {
      
    
    const students = useSelector(selectStudents) as StudentType[]
    const [searchText, setSearchText] = useState("")
    const [course,setCourse] = useState("All Courses")
    const [status, setStatus] = useState("All Status")
 

  useEffect(() => {
  let result = students;

  if (searchText.trim() !== "") {
    result = result.filter((s) =>
      s.student_name.toLowerCase().includes(searchText.toLowerCase()) ||
      s.email.toLowerCase().includes(searchText.toLowerCase()) ||
      s.phone_number.includes(searchText) ||
      s.student_id.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  if (course !== "All Courses") {
    result = result.filter((s) => s.course_id === course);
  }

 
  if (status !== "All Status") {
    result = result.filter((s) =>
      status === "Active" ? s.is_active : !s.is_active
    );
  }

  setFiltered(result);
}, [searchText, course, status, students]);


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
                    onChange={(e)=>setSearchText(e.target.value)}
                    className="pl-10 border border-black rounded-lg py-2 px-4 focus:outline-none w-120 my-2" />
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-black">Course</h1>
                <select value={course}
                onChange={(e)=> setCourse(e.target.value)}
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