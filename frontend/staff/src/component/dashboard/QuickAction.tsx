// import React from 'react'
import { COLORS, FONTS } from '../../constant'
import markattendance from '../../assets/dashboardsimg/markAttendanceicon.png'
import upload from '../../assets/dashboardsimg/uploadicon.png'
const QuickAction = () => {
  return (
    <div className=''>
        <div className='w-full p-4 rounded-[10px]' style={{boxShadow:COLORS.shadow_violet}}>
                   <h1 style={{color:COLORS.primary_violet,...FONTS.header}}>Quick Actions</h1>
              <div className='flex flex-col sm:flex-row flex-wrap justify-around p-2 gap-4'>
                 
                 <div className='flex flex-col items-center rounded-[10px] border border-[#3B153A] p-2 '>
                     <img src={markattendance} alt='img' className='w-7 h-7'/>
                     <p>Mark Attendance</p>
                 </div>
                 <div className='flex flex-col items-center rounded-[10px] border border-[#3B153A] p-2 '>
                     <img src={upload} alt='img' className='w-7 h-7'/>
                     <p>Upload Material</p>
                 </div>

              </div>
        </div>
    </div>
  )
}

export default QuickAction