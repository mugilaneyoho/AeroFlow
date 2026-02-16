import React from 'react'
import { useGetEmployeeCompletedLeadsQuery } from '../../services/RTKQuery/CallerQueryApi'

const title = [
    'Phone Number',
    'Name',
    'Status',
    'Last Calls Date',
    'Notes'
]


const TeleLeadsTable:React.FC = () => {

  const {data} = useGetEmployeeCompletedLeadsQuery({uuid:'4026c9ac-40e8-4d72-ae38-14a9cf28eaac'})
    
  return (
     <div className='flex flex-col gap-5 shadow-[0px_4px_14px_0px_#00000040] rounded-lg p-4'>
        <div className='w-full h-[90vh] p-4'>
          <div className='w-full items-center rounded-xl bg-[#1F338C]'>
              <div className='grid grid-cols-5'>
                  {
                      title.map((value)=>(
                          <div className='col-span-1 flex flex-row py-4 justify-center text-white'>
                              <p>{value}</p>
                          </div>
                      ))
                  }
              </div>    
          </div>
             <div className='flex h-[78vh] flex-col gap-5 mt-5 overflow-y-scroll' style={{scrollbarWidth:'none'}}>
                {
                 data?.map((item:any)=>(
                     <div className='grid grid-cols-5 bg-[#F5F5F5] text-center font-medium rounded-lg hover:bg-[#E1EDFF]' key={item?.uuid}>
                      <p className='py-4 '>{item?.phone}</p>
                      <p className='py-4 '>{item?.name}</p>
                      <p className='py-4 '>{item?.status}</p>
                      <p className='py-4 '>{item?.updatedAt?.split('T')[0]}</p>
                      <p className='py-4 '>{item?.notes}</p>
                    </div>
                  ))
                }
              </div>
        </div>
    </div>
  )
}

export default TeleLeadsTable