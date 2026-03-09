import { useEffect, useState } from 'react'
import bookicon from '../../assets/classes/blue_bookicon.png'
import usericon from '../../assets/classes/blue_usericon.png'
import onlineicon from '../../assets/classes/onlineIcon.png'
import offlineicon from '../../assets/classes/offline_icon.png'
import calendaricon from '../../assets/classes/calendaricon_blue.png'
import clockicon from '../../assets/classes/blue_clockicon.png'
import attendancegreen from '../../assets/classes/attendance_green.png'
import attendancered from '../../assets/classes/attendance_red.png'
import { COLORS } from '../../constant'
import closeicon from "../../assets/course/closeedit.png"
import { useDispatch } from 'react-redux'
// import { GetAllClasses } from '../../features/classess/reduce/selector'
import { GetAllClassesThunk } from '../../features/classess/reduce/thunk'



// const stats = [
//     {
//         topic:"React Fundamentals",
//         batch:"FSWD-JAN-2026",
//         available:"Completed",
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
//         available:"Completed",
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
//         available:"Completed",
//         username:"Dr. Vikram Singh",
//         status:"online",
//         date:"2026-21-1",
//         time:"11.00 AM - 03.00 PM",
//         attenStatus:"Attendance Pending",
//         present:"0/30",
//         absent:"0 Absent"
//     },

// ]
interface CompletedClassProps {
  classes: any[];
}
const CompletedClass: React.FC<CompletedClassProps> = ({ classes }) => {

  const [openView, setOpenView] = useState(false)
  const [selectClass, setSelectClass] = useState<any>(null)


  const dispatch = useDispatch<any>();


  console.log("Classes Data:", classes);

  useEffect(() => {
    dispatch(GetAllClassesThunk("completed"));
  }, [dispatch]);

  return (
    <div className=' '>
      <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[10px]'>
        <div className='flex justify-between'>
          <p className='text-sm'>Wednesday, January 21,2026</p>
          <p className='text-sm'>2 Classes</p>
        </div>

        <div className='p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2  rounded-[10px]  bg-white text-sm'>
          {classes?.map((data: any) => {

            const [present, total] = data.present?.split("/") || [0, 0];
            const percentage =
              total > 0 ? (Number(present) / Number(total)) * 100 : 0;
            return (
              <div key={data.uuid} className='shadow-[0px_0px_14px_0px_#2D216140] p-2 rounded-[10px] flex flex-col h-full'>
                <div >
                  <div className='flex justify-between'>
                    <div className='flex gap-2 items-center'>
                      <img src={bookicon} alt='bookicon' className='w-5 h-5' />
                      <div>
                        <h1 className='font-semibold '>{data.subject}</h1>
                        <p className='text-sm text-[#4D4C4C]'>{data.batch_name}</p>
                      </div>
                    </div>
                    <div>
                      <p className="px-2 py-1 rounded-full text-xs text-white w-fit"
                        style={{
                          background:
                            data.available === "Completed"
                              ? COLORS.bg_ongoing_green
                              : COLORS.bg_gray,
                        }}>
                        {data.available}</p>
                    </div>
                  </div>
                  <div className='p-4 grid grid-cols-1 sm:grid-cols-2 gap-2'>
                    <div className='flex gap-2 items-center '>
                      <img src={usericon} alt='usericon' className='w-4 h-4' />
                      <p className='text-[#008BBF]'>{data.username}</p>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <img src={data.status === "online" ? onlineicon : offlineicon} className='w-4 h-4' />
                      <p
                        className="px-2 py-1 rounded text-xs "
                        style={{

                          color: data.status === "online" ? COLORS.text_green : COLORS.bg_red,
                          boxShadow: data.status === "online"
                            ? "0px 0px 14px 0px #20D4324D inset"
                            : "0px 0px 14px 0px #D20F0F4D inset",
                        }}
                      >
                        {data.status}
                      </p>
                    </div>

                    <div className='flex gap-2 items-center'>
                      <img src={calendaricon} alt='usericon' className='w-4 h-4' />
                      <p>{new Date(data.start_date).toLocaleDateString()}</p>
                    </div>


                    <div className='flex gap-2 items-center'>
                      <img src={clockicon} alt='usericon' className='w-4 h-4' />
                      <p>{`${new Date(data.start_time).toLocaleTimeString()} - ${new Date(data.end_time).toLocaleTimeString()}`}</p>
                    </div>


                    <div className='flex gap-2 items-center pt-2 pb-2 col-span-2'>
                      <img src={data.attenStatus === "Attendance Completed" ? attendancegreen : attendancered} className='w-4 h-4' />
                      <p className="text-sm font-medium"
                        style={{
                          color:
                            data.attenStatus === "Attendance Completed"
                              ? COLORS.text_green
                              : COLORS.bg_red,
                        }}>{data.attenStatus}</p>
                    </div>
                  </div>

                  <div>
                    <div className='flex justify-between pb-1'>
                      <p>Total student Present</p>
                      <p>{data.present}</p>
                    </div>
                    <div className="rounded w-full h-2 bg-[#D9D9D9]">
                      <div
                        className="h-2 rounded"
                        style={{
                          width: `${percentage}%`,
                          background: "linear-gradient(90deg, #5F6BBA 0%, #791B5A 100%)"
                        }}
                      />
                    </div>

                  </div>
                  <div style={{ color: COLORS.bg_red }}>{data.absent}</div>
                </div>
                <div className="flex justify-end  mt-auto pt-3">
                  <button
                    onClick={() => {
                      setSelectClass(data)
                      setOpenView(true)
                    }}
                    className=" flex items-center justify-center gap-1 text-white rounded text-sm px-4 py-2 bg-[#008BBF]"
                  >
                    View
                  </button>
                </div>
              </div>
            )
          })}

        </div>

        {openView && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4" onClick={() => setOpenView(false)}>
            <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-6 relative overflow-y-auto" onClick={(e) => e.stopPropagation()}>


              <div className="flex justify-between items-center pb-3">
                <h2 className="text-xl font-semibold">View Class</h2>
                <button onClick={() => setOpenView(false)}>
                  <img src={closeicon} alt="close" className="w-4 h-4" />
                </button>
              </div>

              <div className='shadow-[0px_0px_14px_0px_#2D216140] p-3 rounded-[10px]'>
                <div className="bg-[#008BBF] text-white rounded-t px-4 py-2 text-center">
                  <h3 className="text-lg font-semibold">{selectClass?.subject || ''}</h3>

                  <p className="text-sm">{selectClass?.batch_name || ''}</p>
                </div>


                <div className="grid grid-cols-2 gap-x-6 gap-y-2 mt-4 text-sm">


                  <div className="space-y-1">
                    <p><strong>Instructor</strong></p>
                    <p>{selectClass?.username}</p>
                  </div>


                  <div className="space-y-1">
                    <p><strong>Date</strong></p>
                    <p>{selectClass?.start_date ? new Date(selectClass.start_date).toLocaleDateString() : 'N/A'}</p>
                  </div>


                  <div className="space-y-1">
                    <p><strong>Time</strong></p>
                    <p>
                      {selectClass?.start_time && selectClass?.end_time
                        ? `${new Date(selectClass.start_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - ${new Date(selectClass.end_time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`
                        : 'N/A'}
                    </p>
                  </div>


                  <div className="space-y-1">
                    <p><strong>Mode</strong></p>
                    <p className="capitalize">{selectClass?.status || selectClass?.class_mode || 'N/A'}</p>
                  </div>


                  <div className="col-span-2 mt-4 mb-2">
                    <strong>Class Status</strong>
                  </div>

                  <div><p>Status:</p></div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{
                        color: selectClass?.available === "Attendance Completed"
                          ? COLORS.text_green
                          : COLORS.bg_red
                      }}

                    >
                      {selectClass?.available || 'N/A'}
                    </p>
                  </div>

                  <div><p>Materials:</p></div>
                  <div>
                    <p className="font-semibold" style={{ color: COLORS.text_green }}>Completed</p>
                  </div>

                  <div><p>Attendance:</p></div>
                  <div>
                    <p
                      className="font-semibold"
                      style={{
                        color: selectClass?.attenStatus === "Attendance Completed"
                          ? COLORS.text_green
                          : COLORS.bg_red
                      }}
                    >
                      {selectClass?.attenStatus || 'N/A'}
                    </p>
                  </div>

                  <div><p>Present:</p></div>
                  <div>
                    <p className=" font-semibold" style={{ color: COLORS.text_green }}>{selectClass?.present?.split('/')[0]}</p>
                  </div>

                  <div><p>Absent:</p></div>
                  <div>
                    <p className=" font-semibold" style={{ color: COLORS.bg_red }}>{selectClass?.absent?.split(' ')[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  )
}

export default CompletedClass