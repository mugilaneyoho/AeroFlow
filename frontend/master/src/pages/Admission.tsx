import { useEffect, useState } from 'react'

import userSetting from "../assets/admisson/userSetting.png"
import profileimg from "../assets/admisson/profileimg.png"
import phoneicon from "../assets/admisson/phoneimg.png"
import documenticon from "../assets/admisson/documentsicon.png"
import emailicon from "../assets/admisson/emailIcon.png"
import rupeesicon from "../assets/admisson/rupeesIcon.png"
import ViewStudent from '../components/admission/ViewStudent'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { selectAdmissions } from '../features/admission/reducer/selector'
import { getAdmissionByIdThunk, getAdmissionThunk } from '../features/admission/reducer/thunk'
import card1 from '../assets/admisson/admin1.png'
import card2 from '../assets/admisson/admin2.png'
import card3 from '../assets/admisson/admin3.png'
import card4 from '../assets/admisson/admin4.svg'


const Admission = () => {
  const dispatch = useDispatch<AppDispatch>();
    const admission = useSelector(selectAdmissions);

    console.log(admission,"checingob ")

    useEffect(() => {
        if (!admission?.length) {
            dispatch(getAdmissionThunk());
        }
    }, [dispatch, admission?.length]);

    const stats = [
        {
            id: 1,
            icon: card1,
            title: "Total Students",
            value: admission?.length.toString()
        },
        {
            id: 2,
            icon: card2,
            title: "Active Students",
            value: admission?.filter(s => s.is_active).length.toString()
        },
        {
            id: 3,
            icon: card3,
            title: "Completed",
            value: admission?.filter(s => !s.is_active).length.toString()
        },
        {
            id: 4,
            icon: card4,
            title: "Avg Attendance",
            value: admission?.length.toString()
        }
    ];

  const [open,setOpen] =  useState<any>(null)
   const handleViewAdmission = (student: any) => {
    console.log("viewbutton", student)
           setOpen(student)
           dispatch(getAdmissionByIdThunk(student.uuid));
           
         };
  return (
    <div className=''>
      <div className='mb-4'>
        <h1 className='text-2xl font-bold mb-2'>Admission</h1>
        <p className='text-gray-600'>Review and approve student admissions</p>
      </div>
      <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5 '>
            {stats?.map((data,index)=>{
                     return(
                       <div key={index} className=' bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 grid gap-2 rounded-xl'>
                         <div className='flex justify-between gap-3'>
                           <div className={`rounded-md p-2 ${data.title === "Total Applications"? "bg-[#FBE7BB]" : data.title === "fees paid"? "bg-[#FFEEDA]" : data.title === "Student allocated"? "bg-[#DBEAFE]" : data.title === "Pending for allocation"? "bg-[#DCFCE7]" : " bg-red-200"}`}>
                             <img src={data.icon} className='w-6 h-6'/>
                           </div>
                           <div className='font-bold text-xl'>{data.value}</div>
                         </div>
                         <div>
                           {data.title}
                         </div>
                       </div>
                     )
                   })}
        </div>
      
    <div className='mt-4 p-2 bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-xl'>
         <h2 className='flex gap-1 font-bold text-xl mb-2'>
          <img src={userSetting} />
          <p>All New Admission Reviews</p>
         </h2>
         <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5 p-2'>
            {admission?.map((data,index)=>{
              return(
                <div key={index} className='bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 rounded-xl border border-[#008BBF] flex flex-col justify-between'>
               <div className='flex flex-col justify-center items-center gap-1 mb-3'>
                  <img src={profileimg} />
                    <div className='font-bold text-lg'>{data.student_name}</div>
                  <div className='text-gray-600'>N/A</div>
                </div> 
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                      <div className='flex items-center gap-1 text-sm whitespace-nowrap '>
                       <img src={phoneicon} className='w-4 h-4 mr-1'/>  
                       <p>{data.phone_number}</p>  
                      </div>
                      <div className='flex items-center gap-1 text-sm whitespace-nowrap px-6'>
                        <img src={documenticon} className='w-4 h-4 mr-1'/>  
                        <p>N/A </p>  
                      </div>
                      <div className='flex items-center gap-1 text-sm '>
                        <img src={emailicon} className=' w-4 h-4 mr-1'/>  
                        <p className='break-all'>{data.email}</p>  
                      </div>
                      <div className='flex items-center gap-1 text-sm whitespace-nowrap px-6'>
                        <img src={rupeesicon} className=' w-4 h-4 mr-1'/>  
                        <p>N/A</p>  
                      </div>
                  </div>  
                 <div>
                   <button onClick={()=>handleViewAdmission(data)}
                   className='w-full mt-4 py-2 bg-[#008BBF] text-white rounded-full font-bold hover:bg-[#3dadd6] transition-colors duration-200'>
                    View</button>
                    </div>
                </div>
              )
            })}
         </div>
      </div>
      {open && <ViewStudent open={open} setOpen={setOpen}/>}

    </div>
  )
}

export default Admission
