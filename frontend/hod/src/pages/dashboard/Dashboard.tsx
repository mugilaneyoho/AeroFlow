import React, { useEffect, useState} from 'react'
import quickicon from "../../assets/Dashboard/quickicon.png"
import { LuUser } from "react-icons/lu";
import { LuCalendar } from "react-icons/lu";
import { LuTicketCheck } from "react-icons/lu";
// import plus from "../../assets/Dashboard/plus.png"
import { FiPlus } from "react-icons/fi";
import { COLORS, FONTS } from '../../constant'

import classesicon from '../../assets/Dashboard/onlineClasses.png'
import capicon from '../../assets/Dashboard/capicon.png'
import clock from '../../assets/Dashboard/clockicon.png'
import nameicon from '../../assets/Dashboard/peopleicon.png'
import studenticon from '../../assets/Dashboard/usericon.png'

import StatCard from '../../components/dashboards/StatCard';
import ClassCard from '../../components/dashboards/ClassCard';
import AttentionFeed from '../../components/dashboards/AttentionFeed';

import staffIcon from "../../assets/Dashboard/totalcourse.png";
import onlineIcon from "../../assets/Dashboard/totalStaff.png";
import offlineIcon from "../../assets/Dashboard/ActiveBatches.png";
import students from "../../assets/Dashboard/totalstudents.png";
import trendup from "../../assets/Dashboard/ic-trending-up-24px.png"
import trendown from "../../assets/Dashboard/ic-trending-down.png"
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../store/store';
import { selectAdminDashboard, selectDashboardLoading } from '../../features/dashboards/reducers/selector';
import { GetAdminDashboardThunk } from '../../features/dashboards/reducers/thunk';
import type { Batch } from '../../types/dashboard';


const Dashboard: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const adminData = useSelector(selectAdminDashboard)
  const loading = useSelector(selectDashboardLoading)
  const [open, setOpen] = useState(false);

console.log("Redux adminData:", adminData);

  useEffect(() => {
    dispatch(GetAdminDashboardThunk())
  }, [dispatch]);

  if (loading || !adminData) return <div>Loading...</div>;

 const {
  staffcount,
  TotalCourse,
  ActiveBatch,
  TotalStudent,
  BatchList
} = adminData;

 const statCards = [
  {
    title: "Total Courses",
    value: TotalCourse,
    icon: staffIcon,
    trendline: trendup,
    desc: "+3 course added from last year",
    background: "#058588",
  },
  {
    title: "Total Staff",
    value: staffcount,
    icon: onlineIcon,
    trendline: trendup,
    desc: "+8 new this semester",
    background: "#F15853",
  },
  {
    title: "Active Batches",
    value: ActiveBatch,
    icon: offlineIcon,
    trendline: trendup,
    desc: "Currently running batches",
    background: "#FFB025",
  },
  {
    title: "Total Students",
    value: TotalStudent,
    icon: students,
    trendline: trendown,
    desc: "Total enrolled students",
    background: "#0E0588",
  },
];

const onlineBatches = BatchList?.filter((batch) => batch.batchMode === "ONLINE");
const offlineBatches = BatchList?.filter((batch) => batch.batchMode === "OFFLINE");

  return (
     
      <div className="flex flex-col min-h-screen  ">

 <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4'>
            <div>
               <h1 style={{...FONTS.tittle, color:COLORS.primary_blue}} className="text-lg sm:text-2xl">Dashboard</h1>
               <p style={{...FONTS.subTittle, color:COLORS.primary_blue}}  className="">Welcome back! Here's an overview of your college.</p>
            </div> 
            <div className=''>
                <button className='flex gap-2 p-2 rounded-[10px] mt-2' style={{backgroundColor:COLORS.primary_blue, color:COLORS.secondary_white}} 
                onClick={()=>setOpen(true)}>
                     <img src={quickicon} alt="quickicon" />
                     Quick Access
                </button>
            </div>

        </div>
<div className='w-full '>
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6 w-full">
   {statCards.map((card , index) => (
          <StatCard key={index} {...card} />
        ))}
</div>
</div>
       

<div className='flex flex-col p-2 gap-2 pt-6 sm:flex-row sm:overflow-x-auto mb-2'>    
  <div className='p-2 w-full rounded-[10px] shadow-[0px_0px_10px_0px_#00000040] min-w-[320px]' >
          <div className='flex justify-between items-center'>
               <div className='flex items-center justify-center'>
                <img src={classesicon} alt='classes' /> 
                <h1 style={{color:COLORS.primary_blue , ...FONTS.subTittle}}>Online Classes</h1>
                </div> 
               
                <div className='p-2 rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140] ' style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
                  {onlineBatches?.length} classes</div>
          </div>

         <div className='p-2 '>
           {onlineBatches?.length >0 ? (
            onlineBatches.map((c:any, i:number) => (
          <ClassCard
            key={i}
            topic={c.batchName}
            batch={c.batchCode}
            time={`${c.duration} ${c.durationType}`}
            name="Instructor Name"
            student="Ongoing"
            COLORS={COLORS}
            icons={{ cap: capicon, clock: clock, name: nameicon, student: studenticon }}
          />
        )) 
      ): (
          <p className='text-center text-sm mt-4' style={{color:COLORS.text_gray}}>No online classes available</p>
        )
         }
         </div>
    </div>
    
     <div className='p-2 w-full rounded-[10px] shadow-[0px_0px_10px_0px_#00000040] min-w-[320px]'>
          <div className='flex justify-between items-center '>
               <div className='flex items-center justify-center'>
                <img src={classesicon} alt='classes' /> 
                <h1 style={{color:COLORS.primary_blue , ...FONTS.subTittle}}>Offline Classes</h1>
                </div> 
               
                <div className='p-2 rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140]' style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
                  {offlineBatches?.length || 0} classes</div>
          </div>

         <div className='p-2'>
          {
              offlineBatches?.length >0 ? (             
            offlineBatches.map((data:any,index:number)=>(
               <ClassCard
            key={index}
             topic={data.batchName}
            batch={data.batchCode}
            time={`${data.duration} ${data.durationType}`}
            name="Instructor Name"
            student="Ongoing"  
            COLORS={COLORS}
            icons={{ cap: capicon, clock: clock, name: nameicon, student: studenticon }}
          />
            ))
              ): (
                <p className='text-center text-sm mt-4' style={{color:COLORS.text_gray}}>No offline classes available</p>
            )
          }
         </div>
    </div>
    
     <div className="p-2 w-full rounded-[10px] shadow-[0px_0px_10px_0px_#00000040] overflow-y-auto" style={{ maxHeight: "380px" }}>
          <AttentionFeed />
     </div>
</div>

   

<div className='rounded-[10px] shadow-[0px_0px_10px_0px_#00000040] mt-6 '>
    <div className='flex items-center '>
        <img src={classesicon} alt='over all batches' />
        <p>Over All Batches</p>
    </div>
    <div className='m-4 mb-4 rounded-[10px] shadow-[0px_0px_10px_0px_#00000040] '>
       <div className='p-2 '>
      <div className='overflow-x-auto max-w-full touch-auto'>
         <table className='min-w-[600px] w-full border-separate border-spacing-y-3 '>
          <thead style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}} className='text-left p-2 rounded-[10px]'>
            <tr className='text-left p-2 rounded-[10px]'>
              <th className='p-3 rounded-l-[10px]'>Batch Name</th>
              <th className='p-3'>Subject</th>
              <th className='p-3'>Class mode</th>
              <th className='p-3'>Duration</th>
              <th className='p-3 rounded-r-[10px]'>TotalStudents</th>
              </tr>  
          </thead>

      <tbody>
  {BatchList?.length > 0 ? (
    BatchList.map((batch: Batch) => (
      <tr
        key={batch.uuid}
        className="rounded-[10px] shadow"
        style={{ backgroundColor: COLORS.gray_bg }}
      >
        <td className="p-3 rounded-l-[10px]">
          {batch.batchName}
        </td>

        <td className="p-3">
          {batch.batchCode}
        </td>

        <td className="p-3">
          {batch.batchMode}
        </td>

        <td className="p-3">
          {batch.duration} {batch.durationType}
        </td>

        <td className="p-3 rounded-r-[10px]">
          {batch.seatsFilled} Students
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={5} className="text-center p-4">
        No Batches Available
      </td>
    </tr>
  )}
</tbody>
        </table>

      </div>
       
      </div>
    </div>
      {open && (
                <>
                <div className='fixed inset-0 bg-black/50' onClick={()=>setOpen(false)} />
                <div className='flex flex-col gap-4 fixed top-40 right-3 sm:right-6 '>
                  <div className='group relative'>
                    <div className='absolute right-14 top-3 hidden  group-hover:block text-xs px-2 py-1 rounded transition whitespace-nowrap' style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
                        Add Course
                    </div>
                    <button className='w-12 h-12 bg-white text-[#2D2161] rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-[#2D2161] group-hover:text-white'
                   
                    >
                        <FiPlus className='text-xl transitiion-colors duration-200 '/>
                    </button>
                  </div>

                   <div className='group relative'>
                    <div className='absolute right-14 top-3 hidden  group-hover:block text-xs px-2 py-1 rounded transition whitespace-nowrap' style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
                        Student
                    </div>
                    <button className='w-12 h-12 bg-white text-[#2D2161] rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-[#2D2161] group-hover:text-white'
                   
                    >
                        <LuUser className='text-xl transitiion-colors duration-200 '/>
                    </button>
                  </div>

                   <div className='group relative'>
                    <div className='absolute right-14 top-3 hidden  group-hover:block text-xs px-2 py-1 rounded transition whitespace-nowrap' style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
                        Classes
                    </div>
                    <button className='w-12 h-12 bg-white text-[#2D2161] rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-[#2D2161] group-hover:text-white'
                   
                    >
                        <LuCalendar className='text-xl transitiion-colors duration-200 '/>
                    </button>
                  </div>


                    <div className='group relative'>
                    <div className='absolute right-14 top-3 hidden  group-hover:block text-xs px-2 py-1 rounded transition whitespace-nowrap' style={{backgroundColor:COLORS.primary_blue,color:COLORS.secondary_white}}>
                        Ticket
                    </div>
                    <button className='w-12 h-12 bg-white text-[#2D2161] rounded-full flex items-center justify-center transition-colors duration-200 group-hover:bg-[#2D2161] group-hover:text-white'
                   
                    >
                        <LuTicketCheck className='text-xl transitiion-colors duration-200 '/>
                    </button>
                  </div>


                </div>
                </>
                
            )}
   
</div>


    </div>
    

  )
}

export default Dashboard