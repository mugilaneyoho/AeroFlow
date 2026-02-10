import React, { useState } from 'react'
import { TbPlayerTrackNext } from "react-icons/tb";
import { IoPlayBackOutline } from "react-icons/io5";
import { MdOutlineNotInterested } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { MdOutlineCallEnd } from "react-icons/md";

const CallerWindow:React.FC = () => {
    const [windows, setwindows] = useState(false);
  return (
    <div>
        <div className='p-4 flex flex-col gap-5 bg-[#3729F4] rounded-2xl'>
            <div className='text-white flex flex-row justify-between p-2'>
              <div>
                    <p className='font-bold text-2xl'>Current Call</p>
                    <p className='font-extrabold text-3xl'>98765432113</p>
              </div>
              <div className='flex flex-col gap-5'>
                    <p>00:00</p>
                    <div className='text-[#D20F0F] font-medium shadow-[0px_0px_14px_0px_#D20F0F_inset] border border-[#FFFFFF] bg-white rounded-lg px-8 py-1'>
                        <p>filter</p>
                    </div>
              </div>
            </div>
            {/* <div className='grid grid-cols-5 gap-5'>
                <div className='flex flex-row shadow-[0px_0px_14px_0px_#D9D9D9_inset] text-black border border-[#716F6F] bg-[#FFFFFF] py-2 px-4 text-center items-center hover:shadow-[0px_0px_14px_0px_#D20F0F_inset]'>
                    skip
                </div>
                <div className='flex flex-row shadow-[0px_0px_14px_0px_#D9D9D9_inset] text-black border border-[#716F6F] bg-[#FFFFFF] py-2 px-4 text-center items-center hover:shadow-[0px_0px_14px_0px_#D20F0F_inset]'>
                    skip
                </div>
                <div className='flex flex-row shadow-[0px_0px_14px_0px_#D9D9D9_inset] text-black border border-[#716F6F] bg-[#FFFFFF] py-2 px-4 text-center items-center hover:shadow-[0px_0px_14px_0px_#D20F0F_inset]'>
                    skip
                </div>
                <div className='flex flex-row shadow-[0px_0px_14px_0px_#D9D9D9_inset] text-black border border-[#716F6F] bg-[#FFFFFF] py-2 px-4 text-center items-center hover:shadow-[0px_0px_14px_0px_#D20F0F_inset]'>
                    skip
                </div>
                <div className='flex flex-row shadow-[0px_0px_14px_0px_#D9D9D9_inset] text-black border border-[#716F6F] bg-[#FFFFFF] py-2 px-4 text-center items-center hover:shadow-[0px_0px_14px_0px_#D20F0F_inset]'>
                    skip
                </div>
              
            </div> */}
            <div className='bg-white rounded-xl w-full'>
               <div className='flex flex-col gap-2 p-4'>
                    <p className='text-black text-lg font-medium'>Lead Name</p>
                    <input type="text" className='text-white bg-[#2516F8] placeholder:text-white focus:outline-none p-2 rounded-xl' placeholder='Enter Lead Name..'/>
               </div>
               <div className='flex flex-col gap-2 p-4'>
                    <p className='text-black text-lg font-medium'>Notes</p>
                    <input type="text" className='text-white bg-[#2516F8] placeholder:text-white focus:outline-none p-2 rounded-xl' placeholder='Enter Lead Name..'/>
               </div>
            </div>
            <p className='text-white text-2xl font-extrabold'>Quick Updated</p>
            <div className='flex flex-row gap-5 ml-10 **:flex **:flex-col **:justify-center **:items-center *:p-5 *:cursor-pointer'>
               <div className='shadow-[0px_0px_14px_0px_#1AAA28_inset] border border-[#1AAA28] bg-[#D9FFDD] px-4 py-2 rounded-xl'>
                    <SiTicktick/>
                    <p className='font-semibold'>Interested</p>
               </div>
               <div className='shadow-[0px_0px_14px_0px_#E79C02_inset] border border-[#E79C02] bg-white px-4 py-2 rounded-xl'>
                    <LuAlarmClock/>
                    <p className='font-semibold'>Waiting</p>
               </div>
               <div className='shadow-[0px_0px_14px_0px_#D20F0F_inset] border border-[#D20F0F] bg-white px-4 py-2 rounded-xl'>
                    <MdOutlineNotInterested/>
                    <p className='font-semibold'>Not Interested</p>
               </div>
               <div className='shadow-[0px_0px_14px_0px_#1AAA28_inset] border border-[#1AAA28] bg-[#D9FFDD] px-4 py-2 rounded-xl'>
                    <MdOutlineCallEnd/>
                    <p className='font-semibold'>Close window</p>
               </div>
               <div className='shadow-[0px_0px_14px_0px_#1AAA28_inset] border border-[#1AAA28] bg-[#D9FFDD] px-4 py-2 rounded-xl'>
                    <TbPlayerTrackNext/>
                    <p className='font-semibold'>Next Number</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default CallerWindow