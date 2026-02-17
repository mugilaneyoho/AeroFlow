/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import logo from '../../assets/icons/profile.svg'
import { useGetRecentAdmissionQuery } from '../../services/api'

const RecentAdmission:React.FC = () => {

  const {data} = useGetRecentAdmissionQuery('')

  console.log(data)

  return (
    <div className='shadow-[0px_0px_14px_0px_#00000040_inset] p-3 h-full rounded-xl'>
      <p className='font-medium text-xl'>Recent Admissions</p>
      <div className='p-4 h-96 flex flex-col gap-5 overflow-x-hidden'>
        { 
          data?.length === 0 ? 
           <div>No admission founded</div>
          :
          data?.map((lead:any)=>{
            return (
              <div key={lead?.uuid} className='bg-[#FFE6FC] shadow-[0px_4px_4px_0px_#FEA1F3] rounded-2xl flex flex-row justify-between p-4'>
                  <div className='flex flex-row gap-5 items-center'>
                    <img src={logo} alt="" />
                    <div className='flex flex-col'>
                      <p className='font-medium'>{lead?.name}</p>
                      <p className='text-[#595555] font-normal'>Data Science</p>
                      <p className='text-[#595555] font-normal'>{lead?.employee?.emp_id + ' ' + lead?.employee?.employee_name}</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-between items-center'>
                    <div className='bg-[#0BA537] text-white px-4 py-1 rounded-2xl'>
                      Approved
                    </div>
                    <p className='text-[#595555]'>{lead?.updatedAt?.split('T')[0]}</p>
                  </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default RecentAdmission