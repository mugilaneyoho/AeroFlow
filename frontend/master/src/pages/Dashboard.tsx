import React, { useEffect } from 'react'
import {card } from '../dummyData/dashboard'
import PendingReal from '../components/dashboard/PendingReal'
import QuickAction from '../components/dashboard/QuickAction'
// import DepartmentPerformance from '../components/dashboard/DepartmentPerformance'

import { getActivityLogThunk } from '../features/dashboard/reducer/thunks'
import { useDispatch } from 'react-redux'

const Dashboard = () => {
  const dispatch = useDispatch<any>()

  useEffect(()=>{
    dispatch(getActivityLogThunk())
  }, [dispatch])
  return (
    <div className='min-h-full w-full overflow-hidden'>
      <div className='grid gap-2 mb-5'>
        <h1 className='font-bold'>Dashboard</h1>
        <p>Welcome back! Here's on overview of our institue</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 bg-[#FFFFFF]">
        {card.map((data,index)=>{
          return(
            <div key={index} className={`rounded-xl p-2 grid gap-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] `}>
              <div className='flex justify-between'>
                <div className={` rounded-md p-2 items-center justify-center text-center ${data.title === "Total Students"? "bg-[#F3E8FF]": data.title === "Activity Staff"? "bg-[#FFE2E2]" : data.title === "Today's classes"? "bg-[#DBEAFE]" : data.title === "Fee Collection Today"? "bg-[#DCFCE7]" : data.title === "Pending Approvals"? "bg-[#FDDFFF]" : data.title === "current Meetings"? "bg-[#FFEEDA]" : data.title === "Placement Interviews"? "bg-[#FFD9FE]": data.title === "Student Attendance"? "bg-[#91A810]/20" : "" }`}>
                  <img src={data.icon} className='w-6 h-6 items-center justify-center text-center'/>
                </div>
                <div className='font-bold'>{data.value}</div>
              </div>

              <div className='flex justify-between'>
                <div>{data.title}</div>
                <div className={`${data.subtitle === "Required Action"? "text-red-700": "text-green-600"}`}>{data.subtitle}</div>
              </div>
            </div>
          )
        })}
      </div>

      {/* <div>
        <DepartmentPerformance/>
      </div> */}

      <div>
        <PendingReal/>
      </div>

      <div>
        <QuickAction/>
      </div>
    </div>
  )
}

export default Dashboard
