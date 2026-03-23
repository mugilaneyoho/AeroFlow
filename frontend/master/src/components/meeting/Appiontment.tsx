import React from 'react'
import calendar from "../../assets/meeting/calendar.png"

import person from "../../assets/meeting/person.png"
import doubleperson from "../../assets/meeting/doubleperson.png"
import phone from "../../assets/meeting/phone.png"
import clock from "../../assets/meeting/clock.png"
import view from "../../assets/meeting/view.png"
import type { Meeting } from '../../types/meetingTypes'


interface AppointmentProps {
  meeting: Meeting[]
  onViewDetail: (meeting: Meeting) => void
}

const Appiontment:React.FC<AppointmentProps> = ({meeting, onViewDetail}) => {

    return (
        <div>
            <div className=' bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] p-2'>
                <div className='flex gap-3'>
                    <img src={calendar} className='w-6 h-6' />
                    <h1>Today's Appointments</h1>
                </div>
                <div>
                    <div className=' p-2 flex flex-cols gap-4'>
                        {meeting.map((m) => {
                            return (
                                <div key={m.id} className="shadow-[inset_0px_0px_14px_0px_#EDBF5C] rounded-xl p-4 bg-white ">
                                    <div className="grid grid-cols-2 gap-4 mb-3">
                                        <div className="flex items-center gap-2">
                                            <img src={person} className="w-4 h-4" />
                                            <h1 className="font-bold text-md">{m.visitor}</h1>
                                        </div>
                                        <span className={`${m.status === "Ongoing"? "bg-[#599E2E]": m.status === "Scheduled"? "bg-[#008BBF]" : "" } text-white px-3 py-1 rounded-full`}>{m.priority}</span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4 mb-3">
                                        <div>
                                            <p className="text-md">Mobile Number</p>
                                            <div className="flex items-center gap-2">
                                                <img src={phone} className="w-4 h-4" />
                                                <p className='text-sm'>{m.mobileNumber || "N/A"}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-md">Priority</p>
                                            <div className="flex items-center gap-2">
                                                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                                <p className='text-sm'>{m.priority}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div>
                                            <p className="text-md">Purpose</p>
                                            <div className="flex items-center gap-2">
                                                <img src={doubleperson} className="w-4 h-4" />
                                                <p className='text-sm'>{m.purposeOfMeeting}</p>
                                            </div>
                                        </div>
                                        <div>
                                            <p className="text-md">Time</p>
                                            <div className="flex items-center gap-2">
                                                <img src={clock} className="w-4 h-4" />
                                                <p className='text-sm'>{m.time}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='rounded-full p-1 border cursor-pointer'>
                                        <div onClick={() =>onViewDetail(m)} className='flex items-center justify-center text-center cursor-pointer gap-2'>
                                           <img src={view} className='w-5 h-5'/>
                                           <p>View Detail</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className='rounded-xl p-2 mt-5 bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)]'>
                <div className='bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md px-4 py-2 text-md font-bold grid grid-cols-7 gap-4'>
                    <h1>MEETING ID</h1>
                    <h1>VISITOR NAME</h1>
                    <h1>PURPOSE</h1>
                    <h1>TIME</h1>
                    <h1>PRIORITY</h1>
                    <h1>STATUS</h1>
                    <h1>ACTIONS</h1>
                </div>

                <div className='rounded-md mt-4 px-4 py-2 flex flex-col'>
                    {meeting.map((m, index) => {
                        return (
                            <div key={index} className='grid grid-cols-7 gap-4 border-b pb-4 mb-4 items-center'>
                                <p className='text-md'>{m.id}</p>
                                <p className='text-md'>{m.visitor}</p>
                                <p className='text-md'>{m.purposeOfMeeting}</p>
                                <p className='text-md'>{m.time}</p>
                                <p className={`border px-2 rounded-full w-16 ${m.priority === "High"? "bg-[#FB2C361A] border-[#FB2C36]" : "bg-[#5956561A] border-[#595656]"}`}>{m.priority}</p>
                                <p className={`text-sm border px-2 rounded-full w-16 ${m.status === "Ongoing"? "bg-[#1F67BB1A] border-[#1F67BB]" : m.status === "Pending"? "bg-[#D16E0B1A] border-[#D16E0B]" : "bg-[#00A63E1A] border-[#00A63E]"}`}>{m.status}</p>
                                <div className='flex gap-2 cursor-pointer'>
                                    <div className='rounded-md p-1 border border-[#595656] bg-[#5956561A] cursor-pointer'>
                                        <button onClick={() =>onViewDetail(m)} className='cursor-pointer'>View Details</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Appiontment
