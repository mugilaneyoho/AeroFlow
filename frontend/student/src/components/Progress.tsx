import courseImage from "../assets/course-image.png"
import fswd from "../assets/fswd.png"
import clock from "../assets/clock.png"
import calendar from "../assets/calendar.png"

const Progress = () => {

    const courseName = "Full Stack Web Development";
    const courseId = "STU001";
    const progressPercentage = "65";

    return (
        <div className="border rounded-2xl shadow-[0px_0px_14px_0px_#1A7B9DB2,inset_0px_0px_15px_0px_#1A7B9D80] h-55 flex-1 m-4 p-2">
            <div className="flex">
                <img src={courseImage} alt="courseImage" className="h-10 w-10 my-2 ml-2" />
                <h1 className="text-3xl font-bold m-2 text-[#1A7B9D]">{courseName}</h1>
            </div>
            <h3 className="text-sm text-[#1A7B9D] ml-2">ID: {courseId}</h3>
            <div className="flex gap-20 m-2">
                <div className="flex shadow-[0px_0px_15px_0px_#498A3833,inset_0px_0px_14px_0px_#498A38] px-4 py-2 gap-3 rounded-sm">
                    <img src={fswd} alt="image" />
                    <h1 className="text-[#1A7B9D]">FSWD-JAN-2026</h1>
                </div>
                <div className="flex shadow-[0px_0px_15px_0px_#498A3833,inset_0px_0px_14px_0px_#498A38] px-4 py-2 gap-3 rounded-sm">
                    <img src={clock} alt="image" />
                    <h1 className="text-[#1A7B9D]">10 AM - 1:00 PM</h1>
                </div>
                <div className="flex shadow-[0px_0px_15px_0px_#498A3833,inset_0px_0px_14px_0px_#498A38] px-4 py-2 gap-3 rounded-sm">
                    <img src={calendar} alt="image" />
                    <h1 className="text-[#1A7B9D]">6 Months</h1>
                </div>
            </div>
            <div className="flex justify-between m-2">
                <h1 className="text-2xl text-[#1A7B9D] font-bold">Course progress</h1>
                <h1 className="text-[#1A7B9D] font-medium text-2xl">{progressPercentage}%</h1>
            </div>
            <div>
                <div className="relative flex-1 h-4 bg-[#D9D9D9] rounded-2xl mx-2 my-3">
                    <div className="absolute  w-200 h-4 bg-[#1A7B9D] rounded-2xl"></div>
                </div>
            </div>
        </div>
    )
}

export default Progress;