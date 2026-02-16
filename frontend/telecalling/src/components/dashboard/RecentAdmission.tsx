import React from 'react'
import logo from '../../assets/icons/profile.svg'

const RecentAdmission:React.FC = () => {
  return (
    <div className='shadow-[0px_0px_14px_0px_#00000040_inset] p-3 h-full rounded-xl'>
      <p className='font-medium text-xl'>Recent Admissions</p>
      <div className='p-4 h-96 flex flex-col gap-5 overflow-x-hidden'>
        {
          Array(6).fill(null).map((_,index)=>{
            return (
              <div key={index} className='bg-[#FFE6FC] shadow-[0px_4px_4px_0px_#FEA1F3] rounded-2xl flex flex-row justify-between p-4'>
                  <div className='flex flex-row gap-5 items-center'>
                    <img src={logo} alt="" />
                    <div className='flex flex-col'>
                      <p className='font-medium'>Meera Nair</p>
                      <p className='text-[#595555] font-normal'>Data Science</p>
                      <p className='text-[#595555] font-normal'>by TC001</p>
                    </div>
                  </div>
                  <div className='flex flex-col justify-between items-center'>
                    <div className='bg-[#0BA537] text-white px-4 py-1 rounded-2xl'>
                      Approved
                    </div>
                    <p className='text-[#595555]'>05-01-2026</p>
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