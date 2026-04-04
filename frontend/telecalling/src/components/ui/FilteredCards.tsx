/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import pers from '../../assets/card/Group (1).png'
import calls from '../../assets/card/Vector (2).png'
import msg from '../../assets/card/Frame.png'
import { useNavigate, useParams } from 'react-router-dom'
import { useUpdateEmployeeLeadsMutation } from '../../services/RTKQuery/CallerQueryApi'

type props = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data:any
}

const FilteredCards:React.FC<props> = ({data}) => {

    const {status} = useParams()
    const navigate = useNavigate()
    const [UpdateLeads,{isLoading,isSuccess}] = useUpdateEmployeeLeadsMutation()

    const handelStatusUpdate = (data:any)=>{
        UpdateLeads({...data,status:'REJECTED'})
    }

  return (
    <div className={`shadow-[0px_4px_14px_0px_#2516F8] grid ${status === 'INTERESTED'? 'grid-cols-4' : 'grid-cols-3'}  gap-10 rounded-2xl py-4 pl-16 items-center`}>

        <div className="flex flex-col gap-5">
            <div className='flex flex-row gap-5 items-center'>
                <img src={pers} alt="" />
                <p className='font-medium text-2xl'>{data?.name || "not updated"}</p>
            </div>

            <div className='flex flex-row gap-5 items-center'>
                <img src={calls} alt="" />
                <p className='font-medium text-lg'>{data?.phone}</p>
            </div>

            <div className='flex flex-row gap-5 items-center'>
                <img src={msg} alt="" />
                <p className='font-medium text-lg'>{data?.notes || "not updated"}</p>
            </div>
        </div>

        <div className="flex flex-col gap-5">
            <div className='flex flex-col'>
                <p className='text-[#79747E] font-medium text-xl'>Course interested</p>
                <p className='font-medium text-lg'>{data?.course_name || 'not selected' }</p>
            </div>
            <div className='flex flex-col'>
                <p className='text-[#79747E] font-medium text-xl'>Last Called</p>
                <p className='font-medium text-lg'>{data?.updatedAt?.split('T')[0] || "not updated"}</p>
            </div>
        </div>

        <div className="flex flex-col gap-5">
            <div className='flex flex-col'>
                <p className='text-[#79747E] font-medium text-xl'>Status</p>
                <div className='bg-[#20D432] text-white px-6 py-1 rounded-2xl text-center w-max'>{status}</div>
            </div>

            <div>
                <p className='text-[#79747E] font-medium text-xl'>Tele Caller id / Name</p>
                <p className='font-medium text-lg'>{data?.employee?.emp_id + ' ' + data?.employee?.employee_name}</p>
            </div>
        </div>

        {
            status === 'INTERESTED' && 
        <div className='flex flex-col justify-between items-center gap-10'>
            <div onClick={()=>navigate(`/admit/${data?.uuid}`,{
                state:data
            })} className='shadow-[0px_0px_14px_0px_#2516F8_inset] px-6 py-2 font-semibold rounded-xl hover:bg-[#2516F8] hover:text-white cursor-pointer'>Go To Admited</div>
            <div 
            onClick={()=>handelStatusUpdate(data)}
            className='shadow-[0px_0px_14px_0px_#20D432_inset] px-6 py-2 font-semibold rounded-xl hover:bg-[#20D432] hover:text-white cursor-pointer'>Not Intrested</div>
        </div>
        }

    </div>
  )
}

export default FilteredCards