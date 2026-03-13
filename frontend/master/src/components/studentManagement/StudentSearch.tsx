import { Search } from "lucide-react";

const StudentSearch = () => {

    return (
        <div className="flex flex-1 shadow-[0px_0px_15px_0px_#0000001A] rounded-md p-2">
            <div className="flex-5 relative">
                <h1 className="font-bold text-black">Search Student</h1>
                <div className="absolute inset-y-10 inset-x-2">
                    <Search className="text-gray-400" />
                </div>
                <input type="text"
                    placeholder="Search by name,email,phone, or student ID..."
                    className="pl-10 border border-black rounded-lg py-2 px-4 focus:outline-none w-120 my-2" />
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-black">Course</h1>
                <select className="border border-black rounded-lg py-2 px-4 focus:outline-none my-2 cursor-pointer">
                    <option>All Courses</option>
                    <option>Course 1</option>
                    <option>Course 2</option>
                </select>
            </div>
            <div className="flex-1">
                <h1 className="font-bold text-black">Status</h1>
                <select className="border border-black rounded-lg py-2 px-4 focus:outline-none my-2 cursor-pointer">
                    <option>All Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                </select>
            </div>
        </div>
    )
}

export default StudentSearch;