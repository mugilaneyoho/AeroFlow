/* eslint-disable @typescript-eslint/no-explicit-any */
import courseImage from "../assets/course-image.png"
import fswd from "../assets/fswd.png"
import clock from "../assets/clock.png"
import calendar from "../assets/calendar.png"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"

const Progress = () => {

    const dashboard:any = useSelector((state:RootState)=>state.dashboard.data)

    const progressPercentage = "65";

    return (
        <div className="border rounded-2xl shadow-[0px_0px_14px_0px_#1A7B9DB2,inset_0px_0px_15px_0px_#1A7B9D80] h-max flex-1 m-4 p-2">
            <div className="flex">
                <img src={courseImage} alt="courseImage" className="h-10 w-10 my-2 ml-2" />
                <h1 className="text-3xl font-bold m-2 text-[#1A7B9D]">{dashboard?.course?.course_name}</h1>
            </div>
            <h3 className="text-sm text-[#1A7B9D] ml-2">ID: {dashboard?.student_id}</h3>
            <div className="flex gap-20 m-2">
                <div className="flex shadow-[0px_0px_15px_0px_#498A3833,inset_0px_0px_14px_0px_#498A38] px-4 py-2 gap-3 rounded-sm">
                    <img src={fswd} alt="image" />
                    <h1 className="text-[#1A7B9D]">{dashboard?.batch?.batchName} - {dashboard?.batch?.batchCode}</h1>
                </div>
                <div className="flex shadow-[0px_0px_15px_0px_#498A3833,inset_0px_0px_14px_0px_#498A38] px-4 py-2 gap-3 rounded-sm">
                    <img src={clock} alt="image" />
                    <h1 className="text-[#1A7B9D]">{dashboard?.batch?.classStartTime?.split(' ')[1].split('.')[0]} - {dashboard?.batch?.classEndTime?.split(' ')[1].split('.')[0]}</h1>
                </div>
                <div className="flex shadow-[0px_0px_15px_0px_#498A3833,inset_0px_0px_14px_0px_#498A38] px-4 py-2 gap-3 rounded-sm">
                    <img src={calendar} alt="image" />
                    <h1 className="text-[#1A7B9D]">{dashboard?.batch?.duration} - {dashboard?.batch?.durationType}</h1>
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