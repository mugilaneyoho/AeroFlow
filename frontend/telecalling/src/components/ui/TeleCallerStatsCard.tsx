import React from 'react'
import ToggleSwitch from './ToggelButton'
import clock from '../../assets/clock.png'
import call from '../../assets/call.png'
import tick from '../../assets/tick.png'

const TeleCallerStatsCard:React.FC<{data:any;}> = ({data}) => {
  return (
    <div className='flex flex-col gap-5 p-6 border-2 border-solid border-[#79747E] rounded-xl '>
        <div className='flex flex-row justify-between'>
            <div className='flex flex-col gap-2'>
                <p className='font-semibold text-xl'>{data?.employee_name}</p>
                <p className='font-medium test-md text-[#646369]'>{data?.emp_id}</p>
            </div>
            <ToggleSwitch checked={data?.is_active}/>
        </div>

        <div className='flex flex-row justify-between'>
            <div className='flex flex-row gap-2 items-center'>
                <img src={clock} alt="" />
                <div>
                    <p className='text-[#3C3A3A]'>Clock-in</p>
                    <p>09:00 AM</p>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <img src={clock} alt="" />
                <div>
                    <p className='text-[#3C3A3A]'>Duration</p>
                    <p>3h 45m</p>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <img src={call} alt="" />
                <div>
                    <p className='text-[#3C3A3A]'>Assigned</p>
                    <p>50</p>
                </div>
            </div>
            <div className='flex flex-row gap-2 items-center'>
                <img src={tick} alt="" />
                <div>
                    <p className='text-[#3C3A3A]'>Completed</p>
                    <p>30</p>
                </div>
            </div>
        </div>

        <div className='flex flex-col gap-3 border-t border-solid border-[#7B797F]'>
            <p className='font-medium text-xl pt-4'>Call Status Breakdown</p>
            <div className='flex flex-row justify-between'>
                <div className='w-32 h-20 shadow-[0px_4px_4px_0px_#2416DB40] bg-[#D8E2FF] flex justify-center flex-col items-center rounded-xl'>
                    <p className='font-medium text-lg'>Pending</p>
                    <p className='text-[#2416DB] font-bold text-lg'>{data?.leadcounts?.ASSIGNED || 0}</p>
                </div>
                <div className='w-32 h-20 shadow-[0px_4px_4px_0px_#DE990F40] bg-[#FFF7D8] flex flex-col items-center justify-center rounded-xl'>
                    <p className='font-medium text-lg'>Waiting</p>
                    <p className='text-[#DE990F] font-bold text-lg'>{data?.leadcounts?.WAITING || 0}</p>
                </div>
                <div className='w-32 h-20 shadow-[0px_4px_4px_0px_#1AAA2840] bg-[#D8FFD8] flex flex-col items-center justify-center rounded-xl'>
                    <p className='font-medium text-lg'>interested</p>
                    <p className='text-[#1AAA28] font-bold text-lg'>{data?.leadcounts?.INTERESTED || 0}</p>
                </div>
                <div className='w-32 h-20 shadow-[0px_4px_4px_0px_#CB0A0A40] bg-[#F9D0CA] flex flex-col items-center justify-center rounded-xl'>
                    <p className='font-medium text-lg'>Not Interested</p>
                    <p className='text-[#CB0A0A] font-bold text-lg'>{data?.leadcounts?.REJECTED || 0}</p>
                </div>
                <div className='w-32 h-20 shadow-[0px_4px_4px_0px_#3A0ACB40] bg-[#8DA6FD] flex flex-col items-center justify-center rounded-xl'>
                    <p className='font-medium text-lg'>Admitted</p>
                    <p className='text-[#3A0ACB] font-bold text-lg'>{data?.leadcounts?.ADMITTED || 0}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default TeleCallerStatsCard