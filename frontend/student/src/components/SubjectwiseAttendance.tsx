import { Calendar } from "lucide-react";

const SubjectwiseAttendance = () => {

    const react = { courseName: "React & frontend", percentage: "90" };
    const node = { courseName: "Node.js & backend", percentage: "80" }

    return (
        <div className="shadow-[0px_0px_15px_0px_#00000040] w-full p-4 rounded-lg my-3">
            <div className="flex gap-3 my-1">
                <Calendar className="border rounded-full text-white p-1 h-6 w-6 bg-[#1A7B9D] mt-1" />
                <h2 className="text-2xl font-medium">Subject-wise  Attendance</h2>
            </div>
            <div className="flex justify-between my-1">
                <h2 className="text-xl font-medium">{react.courseName}</h2>
                <h2 className="font-bold text-xl">{react.percentage}%</h2>
            </div>
            <div className="relative flex-1 h-4 bg-[#D9D9D9] rounded-2xl my-3">
                <div className="absolute  w-265 h-4 bg-[#1A7B9D] rounded-2xl"></div>
            </div>
            <div className="flex justify-between my-1">
                <h2 className="text-xl font-medium">{node.courseName}</h2>
                <h2 className="font-bold text-xl">{node.percentage}%</h2>
            </div>
            <div className="relative flex-1 h-4 bg-[#D9D9D9] rounded-2xl my-3">
                <div className="absolute  w-230 h-4 bg-[#1A7B9D] rounded-2xl"></div>
            </div>
        </div>
    )
}

export default SubjectwiseAttendance