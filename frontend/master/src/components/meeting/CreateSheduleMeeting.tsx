import React, { useState } from 'react'
import close from "../../assets/meeting/close.png"

interface CreateMeetingProps{
  setCreateMeetingModel: React.Dispatch<React.SetStateAction<boolean>>
  addmeeting:(meeting:Meeting)=>void
}
interface Meeting {
  meetingId: number
  visitorName: string
  purpose: string
  time: string
  date: string
  priority: string
  status: string
}
const CreateSheduleMeeting: React.FC<CreateMeetingProps>= ({setCreateMeetingModel,addmeeting}) => {
    const [visitorname,setvisitorname] = useState("")
    const [purpose, setpurpose] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [priority, setpriority] = useState("")
    const [status, setstatus] = useState("")

    const handlechange = () => {
   const newMeeting: Meeting = {
    meetingId: Date.now(),       
    visitorName: visitorname,
    purpose: purpose,
    time: time,
    date: date,
    priority: priority || "Normal",
    status: status || "Pending",
  };

  addmeeting(newMeeting);
  setCreateMeetingModel(false);
};

  return (
    <div className='fixed inset-0 flex items-center justify-center mt-20'>
        <div className='w-130 h-140 bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-5'>
            <div className='flex justify-between'>
                <h1 className='font-bold'>Schedule Meeting</h1>
                <div onClick={()=>{setCreateMeetingModel(false)}} className='border rounded-full'> 
                <img src={close} className='w-5 h-5 cursor-pointer'/>
                </div>
            </div>
            <div className='grid gap-1'>
                <label htmlFor='name' className='font-semibold'>Visitor Name</label>
                <input id="name" placeholder='Enter Visitor Name' className='border rounded-md p-2' onChange={(e)=>setvisitorname(e.target.value)}/>
            </div>
            <div className='grid gap-1'>
                <label htmlFor='purpose' className='font-semibold'>Purpose</label>
                <input id="purpose" placeholder='Enter purpose' className='border rounded-md p-2' onChange={(e)=>setpurpose(e.target.value)}/>
            </div>
            <div className='flex  gap-2'>
                <div className='grid gap-1 w-[50%]'>
                    <label htmlFor='date' className='font-semibold'>Meeting Date</label>
                    <input placeholder='' className='border rounded-md p-2' onChange={(e)=>{setdate(e.target.value)}}/>
                </div>
                <div className='grid gap-1 w-[50%]'>
                    <label htmlFor='date' className='font-semibold'>Meeting Time</label>
                    <input placeholder='' className='border rounded-md p-2 w-full' onChange={(e)=>{settime(e.target.value)}}/>
                </div>
            </div>
            <div className='grid gap-1' >
                <label className='font-semibold'>Priority</label>
                <div className='flex gap-2'>
                    <input type='radio' value="Normal" onChange={(e)=>setpriority(e.target.value)} /> Normal
                    <input type='radio' value="High" onChange={(e)=>setpriority(e.target.value)} /> High
                </div>
            </div>
            <div className='grid gap-1 w-[50%] '>
                <label htmlFor='status' className='font-semibold'>Status</label>
                <select className=' bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md p-2' onChange={(e)=>{setstatus(e.target.value)}}>
                    <option>Ongoing</option>
                    <option>Pending</option>
                    <option>Approved</option>
                    <option>Completeed</option>
                </select>
            </div>
            <div className='flex justify-end gap-5 text-white'>
                <button className='border p-2 rounded-md bg-[#D20F0F] cursor-pointer' onClick={()=>{setCreateMeetingModel(false)}}>Cancel</button>
                <button className='border p-2 rounded-md bg-[#20D432] cursor-pointer' onClick={handlechange}>Booking Meeting</button>
            </div>
        </div>
    </div>
  )
}

export default CreateSheduleMeeting
