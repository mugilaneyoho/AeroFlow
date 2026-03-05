import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Attendace from "../components/Attendance";

const attendance = () => {

    return (
        <div className="px-6 py-3 overflow-hidden">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                    <Attendace />
                </div>
            </div>
        </div>
    )
}

export default attendance;