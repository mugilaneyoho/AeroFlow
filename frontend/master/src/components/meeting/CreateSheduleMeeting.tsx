import React, { useState } from 'react'
import close from "../../assets/meeting/close.png"
import type { Meeting } from '../../types/meetingTypes'
import { useDispatch } from 'react-redux'
import { createMeetingThunk, getMeetingsThunk } from '../../features/meeting/reducer/thunk'
import type { AppDispatch } from '../../store/store'

interface CreateMeetingProps{
  setCreateMeetingModel: React.Dispatch<React.SetStateAction<boolean>>
 
}

const CreateSheduleMeeting: React.FC<CreateMeetingProps>= ({setCreateMeetingModel}) => {
    const [visitorname,setvisitorname] = useState("")
    const [purpose, setpurpose] = useState("")
    const [date, setdate] = useState("")
    const [time, settime] = useState("")
    const [priority, setpriority] = useState("")
    const [status, setstatus] = useState("")
    const [mobileNumber, setMobileNumber] = useState("")
    const dispatch = useDispatch<AppDispatch>()
    
    const handlechange = async() => {
        
   const newMeeting: Meeting = {     
                
    visitor: visitorname,
    purposeOfMeeting: purpose,
    requestedTime: time,             
    date:new Date(date).toISOString().split('T')[0],                             
    priority: priority || "Normal",
    status: status || "Pending",
    mobileNumber: mobileNumber || null,
    meetingId: null  
  };
console.log("Creating meeting with payload:", newMeeting);

  try {
        await dispatch(createMeetingThunk(newMeeting));
        await dispatch(getMeetingsThunk());
        setCreateMeetingModel(false);
    } catch (error) {
        console.error("Failed to create meeting:", error);
    }

};

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center mt-10 p-2'>
        <div className='w-130 h-140 bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-5 overflow-y-auto no-scrollbar'>
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
            <div className='grid gap-1'>
                <label htmlFor='mobile number' className='font-semibold'>Moblie Number</label>
                <input id="mobile number" placeholder='Enter Mobile Number' className='border rounded-md p-2' onChange={(e)=>setMobileNumber(e.target.value)}/>
            </div>
            <div className='flex gap-2'>
        <div className='grid gap-1 w-[50%]'>
             <label htmlFor='date' className='font-semibold'>Meeting Date</label>
             <input
              id="date"
             type="date"
             className='border rounded-md p-2'
             value={date}
              onChange={(e) => setdate(e.target.value)}
              />
          </div>
         <div className='grid gap-1 w-[50%]'>
                  <label htmlFor='time' className='font-semibold'>Meeting Time</label>
                     <input
                      id="time"
                      type="time"
                      className='border rounded-md p-2 w-full'
                      value={time}
                      onChange={(e) => settime(e.target.value)}
                     />
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
