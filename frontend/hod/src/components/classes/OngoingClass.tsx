import  { useEffect, useState } from 'react'
import bookicon from '../../assets/classes/blue_bookicon.png'
import usericon from '../../assets/classes/blue_usericon.png'
import onlineicon from '../../assets/classes/onlineIcon.png'
import offlineicon from '../../assets/classes/offline_icon.png'
import calendaricon from '../../assets/classes/calendaricon_blue.png'
import clockicon from '../../assets/classes/blue_clockicon.png'
import attendancegreen from '../../assets/classes/attendance_green.png'
import attendancered from '../../assets/classes/attendance_red.png'
import editicon from '../../assets/course/edit.png'
import deleteicon from '../../assets/course/delete.png'
import { COLORS } from '../../constant'
import closeicon from "../../assets/course/closeedit.png"
import { useDispatch} from 'react-redux'
// import { GetAllClasses } from '../../features/classess/reduce/selector'
import { GetAllClassesThunk, UpdateClassThunk } from '../../features/classess/reduce/thunk'



// const stats = [
//     {
//         topic:"React Fundamentals",
//         batch:"FSWD-JAN-2026",
//         available:"Ongoing",
//         username:"Prof.Priya Sharma",
//         status:"online",
//         date:"2026-21-1",
//         time:"10.00 AM - 1.00 PM",
//         attenStatus:"Attendance Completed",
//         present:"25/30",
//         absent:"5 Absent"
//     },
//     {
//         topic:"SEO Optimization",
//         batch:"DM-JAN-2026",
//         available:"Upcoming",
//         username:"Ms. Neha Gupta",
//         status:"Offline",
//         date:"2026-21-1",
//         time:"11.00 AM - 03.00 PM",
//         attenStatus:"Attendance Pending",
//         present:"0/30",
//         absent:"0 Absent"
//     },
//     {
//         topic:"Node.js Backend",
//         batch:"FSWD-JAN-2026",
//         available:"Upcoming",
//         username:"Dr. Vikram Singh",
//         status:"online",
//         date:"2026-21-1",
//         time:"11.00 AM - 03.00 PM",
//         attenStatus:"Attendance Pending",
//         present:"0/30",
//         absent:"0 Absent"
//     },

// ]

interface OngoingClassProps {
  classes: any[]; 
  handleDelete: (cls: any) => void;
}
const OngoingClass: React.FC<OngoingClassProps> = ({ classes, handleDelete }) => {
    
            const [openEdit,setOpenEdit] = useState(false)
            const [selectClass , setSelectClass] = useState<any>(null)
            const dispatch = useDispatch<any>();

useEffect(() => {
  dispatch(GetAllClassesThunk('ongoing'));
}, [dispatch]);

const handleUpdate = async () => {
  if (!selectClass) return;

  const formatDateTime = (date: string, time: string) => `${date} ${time}:00.000`;

  const payload = {
    batch_id: selectClass.batch_id,
    staff_id: selectClass.staff_id,
    subject: selectClass.subject,
    start_date: formatDateTime(selectClass.start.date, selectClass.start.time),
    start_time: formatDateTime(selectClass.start.date, selectClass.start.time),
    end_time: formatDateTime(selectClass.start.date, selectClass.end.time),
    class_mode: selectClass.class_mode.toUpperCase(),
  };

  try {
    await dispatch(
      UpdateClassThunk(selectClass.uuid, selectClass.class_mode.toUpperCase(), payload)
    );
 dispatch(GetAllClassesThunk('ongoing'));
    setOpenEdit(false);
  } catch (error) {
    console.error("Update failed:", error);
  }
};
console.log(classes,"classes")

  return (
    <div className=' '>
        <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[10px]'>
          <div className='flex justify-between'>
            <p className='text-sm'>Wednesday, January 21,2026</p>
            <p className='text-sm'>{classes.length} Classes</p>
          </div> 

          <div className='p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2  rounded-[10px]  bg-white text-sm'>
           {
            classes && classes.length > 0 ? (
               classes?.map((cls: any)=>{
            
return(
  <div key={cls.uuid} className='shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[10px] flex flex-col h-full'>
                    <div >
                     <div className='flex justify-between'>  
                         <div className='flex gap-2 items-center'>
                            <img src={bookicon} alt='bookicon' className='w-5 h-5'/>
                            <div>
                                <h1 className='font-semibold '>{cls.subject}</h1>
                                <p className='text-sm text-[#4D4C4C]'>{cls.batch_name}</p>
                            </div>
                        </div>
                         <div>
                            {/* <p  className="px-2 py-1 rounded-full text-xs text-white w-fit"
                     style={{
                   background:
                     available === "Ongoing"
                    ? COLORS.bg_light_green
                     : COLORS.bg_blue,
                }}>
                    {available}</p> */}
                         </div>
                        </div>
                      <div className='p-2 grid grid-cols-1 sm:grid-cols-2 gap-2'>
                           <div className='flex flex-col sm:flex-row gap-2 items-center '>
                            <img src={usericon} alt='usericon' className='w-4 h-4'/>
                            <p className='text-[#008BBF]'>staff</p>
                           </div>

                          <div className='flex flex-col sm:flex-row gap-2 items-center'>
                            
                            <img src={cls.class_mode?.toLowerCase() === "online" ? onlineicon : offlineicon} className='w-4 h-4'/>
                            <p
                            
                className="px-2 py-1 rounded text-xs "
               style={{
  
               color: cls.class_mode?.toLowerCase() === "online" ? COLORS.text_green : COLORS.bg_red,
               boxShadow: cls.class_mode?.toLowerCase() === "online"
               ? "0px 0px 14px 0px #20D4324D inset"
               : "0px 0px 14px 0px #D20F0F4D inset",
                }}
               >
               {cls.class_mode}
               </p>
                           </div>

                           <div className='flex flex-col sm:flex-row gap-2 items-center'>
                            <img src={calendaricon} alt='usericon' className='w-4 h-4' />
                            <p className='text-[#008BBF]'>{new Date(cls.start_date).toLocaleDateString()}</p>
                           </div>

                            <div className='flex flex-col sm:flex-row gap-2 items-center'>
                            <img src={clockicon} alt='usericon' className='w-4 h-4'/>
                            <p className="text-[#008BBF] flex flex-col sm:flex-row sm:items-center ">
                            <span>{new Date(cls.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            <span>-</span>
                            <span>{new Date(cls.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                            </p>
                           </div>

                       
                         <div className='flex flex-col sm:flex-row gap-2 items-center pt-2 pb-2 col-span-2'>
                           <img src={cls.class_mode?.toLowerCase() === "online" ? attendancegreen : attendancered} className='w-4 h-4'/>
                            <p  className="text-sm font-medium"
                          style={{
                              color:
                                cls.class_mode?.toLowerCase() === "online"
                               ? COLORS.text_green
                          : COLORS.bg_red,
                        }}>{cls.class_mode}</p>
                           </div>
                        </div>
                        
                       
                           
                         <div>
                           <div className='flex justify-between pb-1'>
                            <p>Total student Present</p>
                            <p>N/A</p>
                            </div> 
                         <div className="rounded w-full h-2 bg-[#D9D9D9]">
                      <div
                       className="h-2 rounded"
                       style={{
                        // width: data.present === "0/30" ? "0%" : "83%",
                        background: "linear-gradient(90deg, #5F6BBA 0%, #791B5A 100%)"
                         }}
                          />
                       </div>

                       </div> 
                    <div style={{color:COLORS.bg_red}}>{cls.absent}</div>
                           </div>
            <div className="flex gap-2 mt-auto pt-3">
                <button
                
                  onClick={() => {
                    console.log("start_date raw:", cls.start_date);
console.log("start_time raw:", cls.start_time);
console.log("end_time raw:", cls.end_time);
  setSelectClass({
  ...cls,
  start: { 
    date: new Date(cls.start_date).toISOString().split("T")[0],
    time: new Date(cls.start_time).toTimeString().slice(0,5),
  },
  end: { 
    time: new Date(cls.end_time).toTimeString().slice(0,5),
  },
});
  setOpenEdit(true);
}}
                    className="flex-1 flex items-center justify-center gap-1 text-white rounded text-sm p-1" style={{background:COLORS.bg_light_green}}
                 >
            <img src={editicon} alt='edit' />
          Edit
        </button>
        <button onClick={()=>handleDelete(cls)} className="flex-1 flex items-center justify-center gap-1 text-white rounded text-sm p-1" style={{background:COLORS.bg_red}}>
         <img src={deleteicon} alt='delete' /> Delete
        </button>
      </div>

          </div>
)
                

            }              
           
                
           ) 
            ):(
                <p className='text-center col-span-3'>No classes available</p>
            )
           }
           
          </div>


          {openEdit && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[60%] h-[90%] rounded-lg shadow-lg p-6 relative overflow-y-auto">

       
        <div className="flex justify-between items-center pb-3">
          <div>
            <h2 className="text-xl font-semibold">Edit Batch</h2>
            <p>Update batch details</p>
          </div>
          <button onClick={() => setOpenEdit(false)}>
            <img src={closeicon} alt="close" className="w-4 h-4" />
          </button>
        </div>

     
        <div className="p-2 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Select Batch*</label> 
              <input type='text' value={selectClass?.batch_name || ''} onChange={(e) => setSelectClass({ ...selectClass, batch_name: e.target.value })}
              className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="select course"  /> 
        </div>
        
        <div className="flex flex-col gap-1">
                 <label className="text-sm text-black">Subject*</label> 
                <input
  type="text"
  value={selectClass.subject}
  onChange={(e) =>
    setSelectClass({ ...selectClass, subject: e.target.value })
  }
  className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]"

/>
            </div>

            <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Select Staff*</label> 
                <input type='text' value={selectClass?.staff_id || ''} onChange={(e) => setSelectClass({ ...selectClass, staff_id: e.target.value })} 
                className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="eg.FSWD-JAN-2026"  />

             </div>
            
            
                        <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Start Date*</label>
                <div className="relative"> 
                   <input
  type="date"
  value={selectClass.start.date}
  onChange={(e) =>
    setSelectClass({ ...selectClass, start: { ...selectClass.start, date: e.target.value } })
  }
 className="w-full border border-[#B4B3B3] rounded-[5px] p-2"
/>
                </div>
                 </div>

             {/* <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">End Date*</label> 
                <div className="relative"> 
                    <input
  type="date" 
  value={selectClass.end.date}
  onChange={(e) =>
    setSelectClass({ ...selectClass, end: { ...selectClass.end, date: e.target.value } })
  }
/>
              </div> 
              </div>   */}
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Start Time*</label>
                 <div className="relative"> 
                   <input
  type="time"
  value={selectClass.start.time}
  onChange={(e) =>
    setSelectClass({ ...selectClass, start: { ...selectClass.start, time: e.target.value } })
  }
 className="w-full border border-[#B4B3B3] rounded-[5px] p-2"

/>
                </div> 
            </div>

             <div className="flex flex-col gap-1"> 
                        <label className="text-sm text-black">End Time*</label> 
                        <div className="relative"> 
                        <input
  type="time"
   value={selectClass.end.time}
  onChange={(e) =>
    setSelectClass({ ...selectClass, end: { ...selectClass.end, time: e.target.value } })
  }
 className="w-full border border-[#B4B3B3] rounded-[5px] p-2"

/>
                       </div>
             </div>

             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Mode*</label> 
                <select
  value={selectClass?.class_mode || ''}
  onChange={(e) =>
    setSelectClass({ ...selectClass, class_mode: e.target.value })
  }
  className="input border border-[#B4B3B3] rounded-[5px] p-1"
>
  <option value="offline">offline</option>
  <option value="online">online</option>
</select>
                     </div>

          </div>
        </div>

       
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={handleUpdate}
            className="px-4 py-2 text-white rounded"
            style={{ background: COLORS.bg_light_green }}
          >
            Reschedule
          </button>

          <button
            onClick={() => setOpenEdit(false)}
            className="px-4 py-2 text-white rounded"
            style={{ background: COLORS.bg_red }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
          )}
        </div>
    </div>
  )
}

export default OngoingClass