import OverallAttendace from "./OverallAttendance";
import SubjectwiseAttendance from "./SubjectwiseAttendance";

const Attendace = () => {

    return (
        <div className="p-6 w-full">
            <div>
                <h1 className="text-2xl font-medium">Attendance Tracking</h1>
                <p className="text-[#7C7979]">Monitor your class attendance</p>
            </div>
            <div>
                <OverallAttendace />
                <SubjectwiseAttendance />
            </div>
        </div>
    )
}

export default Attendace;