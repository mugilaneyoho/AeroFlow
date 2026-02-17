/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef, useState } from 'react'
import { TbPlayerTrackNext } from "react-icons/tb";
// import { IoPlayBackOutline } from "react-icons/io5";
import { MdOutlineNotInterested } from "react-icons/md";
import { LuAlarmClock } from "react-icons/lu";
import { SiTicktick } from "react-icons/si";
import { MdOutlineCallEnd } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import type { TelecallerAppDispatch, TelecallerRootState } from '../../store/telecallerStore';
import { useUpdateEmployeeLeadsMutation } from '../../services/RTKQuery/CallerQueryApi';
import { NextNumber } from '../Callers/slice';
import close from '../../assets/closse.png'

type props = {
    setwindow:(data:boolean) => void;
    setLeadStatus:(data:string) => void;
}

const CallerWindow:React.FC<props> = ({setwindow, setLeadStatus}) => {
    const picknumber:any = useSelector((state:TelecallerRootState)=>state.CallerSlice.pickNumber)
    const [UpdateLeads,{data,isLoading,isSuccess}] = useUpdateEmployeeLeadsMutation()
    const name = useRef<HTMLInputElement | null>(null)
    const notes = useRef<HTMLInputElement | null>(null)
    const dispatch = useDispatch<TelecallerAppDispatch>()

    const [filter, setfilter] = useState(false);

    console.log(data,isLoading,isSuccess)
    
    const updateStatus = (status:string) =>{
        const names = name.current?.value
        const note = notes.current?.value
        const datas = {uuid:picknumber?.uuid, status,name:names,notes:note}

        if (names === null && note === null) {
            return console.log("enter the values")
        }

        UpdateLeads(datas)

        dispatch(NextNumber())

        name.current!.value = ''
        notes.current!.value = ''
    }

    const Changefilterd = (status:string)=>{
        setLeadStatus(status)
        setfilter(false)
    }

  return (
    <div>
        <div className='p-4 flex flex-col gap-5 bg-[#3729F4] rounded-2xl'>
            <div className='text-white flex flex-row justify-between p-2'>
              <div>
                    <div className='flex flex-row gap-5 items-center'>
                      <p className='font-bold text-2xl'>Current Call</p>
                      <div className=' px-4 py-1 rounded-2xl bg-[#d86565] shadow-[0px_0px_14px_0px_#D20F0F_inset]'>
                        <p>{picknumber?.status === "ASSIGNED" ? 'NEW' : picknumber?.status}</p>
                      </div>
                    </div>
                    <p className='font-extrabold text-3xl'>{picknumber?.phone}</p>
              </div>
              <div className='flex flex-col gap-5 relative'>
                {
                    filter && 
                    <div className='w-40 h-max shadow-[0px_0px_10px_0px_#2516F8_inset] rounded-xl p-4 text-black -ml-10 mt-10 bg-white absolute'>
                        <div className='w-full h-full relative flex flex-col gap-2'>
                        <img src={close} onClick={()=>setfilter(false)} alt="" className='w-5 h-5 absolute right-0'/>
                        <div onClick={()=>Changefilterd('ASSIGNED')} className=' cursor-pointer shadow-[0px_0px_14px_0px_#2516F8_inset] w-max px-4 py-1 rounded-lg hover:bg-[#2516F8] hover:text-white'>NEW</div>
                        <div onClick={()=>Changefilterd('WAITING')} className=' cursor-pointer shadow-[0px_0px_14px_0px_#2516F8_inset] w-max px-4 py-1 rounded-lg hover:bg-[#2516F8] hover:text-white'>WAITING</div>
                        <div onClick={()=>Changefilterd('INTERESTED')} className=' cursor-pointer shadow-[0px_0px_14px_0px_#2516F8_inset] w-max px-4 py-1 rounded-lg hover:bg-[#2516F8] hover:text-white'>INTERESTED</div>
                        </div>
                    </div>
                }
                    <p>00:00</p>
                    <div onClick={()=>setfilter(true)} className='text-[#D20F0F] font-medium shadow-[0px_0px_14px_0px_#D20F0F_inset] border border-[#FFFFFF] bg-white rounded-lg px-8 py-1 cursor-pointer'>
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
                    <input type="text" ref={name} value={picknumber?.name} className='text-white bg-[#2516F8] placeholder:text-white focus:outline-none p-2 rounded-xl' placeholder='Enter Lead Name..'/>
               </div>
               <div className='flex flex-col gap-2 p-4'>
                    <p className='text-black text-lg font-medium'>Notes</p>
                    <input type="text" ref={notes} value={picknumber?.notes} className='text-white bg-[#2516F8] placeholder:text-white focus:outline-none p-2 rounded-xl' placeholder='Enter Lead Name..'/>
               </div>
            </div>
            <p className='text-white text-2xl font-extrabold'>Quick Updated</p>
            <div className='flex flex-row gap-5 ml-10 **:flex **:flex-col **:justify-center **:items-center *:p-5 *:cursor-pointer'>
               <div onClick={()=>updateStatus('INTERESTED')} className='shadow-[0px_0px_14px_0px_#1AAA28_inset] border border-[#1AAA28] bg-[#D9FFDD] px-4 py-2 rounded-xl'>
                    <SiTicktick/>
                    <p className='font-semibold'>Interested</p>
               </div>
               <div onClick={()=>updateStatus('WAITING')} className='shadow-[0px_0px_14px_0px_#E79C02_inset] border border-[#E79C02] bg-white px-4 py-2 rounded-xl'>
                    <LuAlarmClock/>
                    <p className='font-semibold'>Waiting</p>
               </div>
               <div onClick={()=>updateStatus('REJECTED')} className='shadow-[0px_0px_14px_0px_#D20F0F_inset] border border-[#D20F0F] bg-white px-4 py-2 rounded-xl'>
                    <MdOutlineNotInterested/>
                    <p className='font-semibold'>Not Interested</p>
               </div>
               <div onClick={()=>setwindow(false)} className='shadow-[0px_0px_14px_0px_#1AAA28_inset] border border-[#1AAA28] bg-[#D9FFDD] px-4 py-2 rounded-xl'>
                    <MdOutlineCallEnd/>
                    <p className='font-semibold'>Close window</p>
               </div>
               <div onClick={()=>dispatch(NextNumber())} className='shadow-[0px_0px_14px_0px_#1AAA28_inset] border border-[#1AAA28] bg-[#D9FFDD] px-4 py-2 rounded-xl'>
                    <TbPlayerTrackNext/>
                    <p className='font-semibold'>Next Number</p>
               </div>
            </div>
        </div>
    </div>
  )
}

export default CallerWindow