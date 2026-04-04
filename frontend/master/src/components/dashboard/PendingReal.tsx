import React from 'react'
import { Pending, ActivityFeed } from '../../dummyData/dashboard'
import approved from "../../assets/dashboard/approved.png"
import rejected from "../../assets/dashboard/reject.png"
import clock from "../../assets/dashboard/clock.png"

import { selectDashboardActivity } from '../../features/dashboard/reducer/selector'
import { useSelector } from 'react-redux'
const PendingReal = () => {
    const activityData = useSelector (selectDashboardActivity)
  return (
    <div className='flex gap-5 mt-5'>
        <div className='xl:w-[40%] w-full shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-xl p-2 grid gap-4 bg-[#FFFFFF]'>
            <div className='flex gap-2'>
                <h1 className='font-bold'>
                    <img src={clock} className='w-5 h-5 mt-1'/>
                </h1>
                <h1 className='font-semibold'>Pending Approvals</h1>
            </div>
            <div className='grid grid-rows-3 gap-4'>
                {Pending.map((data,index)=>{
                    return(
                        <div key={index} className={`grid gap-2 rounded-md border-l-4 p-2 ${data.priority === "High"? "bg-[#E0ABAB]/20 border-l-[#D00000]" : data.priority === "MEDIUM"? "bg-[#D8C197]/20 border-l-[#D08700]" : data.priority === "NORMAL"? "bg-[#0053D0]/20 border-l-[#0053D0]" : ""}`}>
                            <div className='flex justify-between'>
                                <div className='font-bold'>{data.title}</div>
                                <div className={`px-2 rounded-xl ${data.priority === "High"? "bg-[#D00000] text-white" : data.priority === "MEDIUM"? "bg-[#D08700]" : data.priority === "NORMAL"? "bg-[#0053D0]" : ""}`}>{data.priority}</div>
                            </div>
                            <div>
                                <h1>{data.para}</h1>
                                <p>{data.subpara}</p>
                            </div>
                            <div className='flex gap-1 justify-end'>
                                <div className=' rounded-md flex gap-1 px-2 py-2 bg-[#599E2E]'>
                                    <div className='mt-1 px-2'>
                                        <img src={approved} className='w-4 h-4'/>
                                    </div>
                                    <div>Approve</div>
                                </div>
                                <div className=' rounded-md flex gap-1 px-2 py-2 bg-[#D20F0F]'>
                                    <div className='mt-1 px-2'>
                                        <img src={rejected} className='w-4 h-4'/>
                                    </div>
                                    <div>Reject</div>
                                </div>
                            </div>
                        </div> 
                    )
                })}
            </div>
        </div>
        <div className='xl:w-[50%] w-full rounded-xl p-2 grid gap-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] bg-[#FFFFFF]'>
            <div className='flex gap-2'>
                <h1 className='font-bold'>Real - Time Activity Feed</h1>
            </div>
            <div className='flex flex-col gap-4'>
               {activityData.map((data,index)=>{
                return(
                    <div key={index} className='flex justify-between gap-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-xl p-4 py-4'>
                        <div>
                            <h1 className='font-bold'>{data.performedBy}</h1>
                            <p>{data.description}</p>
                            <p>{data.createdAt && new Date(data.createdAt).toLocaleTimeString()}</p>
                        </div>
                        <div className={`px-2 rounded-xl h-8 ${data.status === "SUCCESS"? "bg-[#599E2E] text-white" : data.status === "FAILED"? "bg-[#D20F0F] text-white" : data.status === "PENDING"? "bg-[#D08700] text-white" : ""}`}>
                            {data.status}
                        </div>
                    </div>
                )
               })} 
            </div>
        </div>
    </div>
  )
}

export default PendingReal
