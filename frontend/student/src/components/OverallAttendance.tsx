import { Calendar } from "lucide-react";
import { CheckCircle } from "lucide-react";

const OverallAttendace = () => {

    const attendacePercentage = 85;

    return (
        <div className="shadow-[0px_0px_15px_0px_#00000040] w-full p-4 rounded-lg my-3">
            <div className="flex gap-3 my-1">
                <Calendar className="border rounded-full text-white p-1 h-6 w-6 bg-[#1A7B9D] mt-1"/>
                <h2 className="text-2xl font-medium">Overall Attendance</h2>
            </div>
            <div className="flex justify-between my-1">
                <h2 className="text-xl font-medium">Attendace Percentage</h2>
                <h2 className="text-[#1A7B9D] font-bold text-2xl">{attendacePercentage}%</h2>
            </div>
            <div className="relative flex-1 h-4 bg-[#D9D9D9] rounded-2xl my-3">
                <div className="absolute  w-248 h-4 bg-[#1A7B9D] rounded-2xl"></div>
            </div>
            <div className="bg-[#EAFFE5] flex gap-3 text-[#1A7B9D] p-2 rounded w-fit">
                <CheckCircle />
                <h2>You meet the minimum attendance requirement(85%)</h2>
            </div>
        </div>
    )
}

export default OverallAttendace;