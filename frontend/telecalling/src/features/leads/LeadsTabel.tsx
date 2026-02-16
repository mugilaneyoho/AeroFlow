import React from 'react'
import { useGetAllLeadsQuery } from '../../services/api'

const title = [
    "Tele-Caller ID",
    "student Name",
    "Mobile",
    "Course",
    "Status",
    "Date"
]

const datas = {
  empid:"TC001",
  name:"priya",
  student:'sharma',
  number:9876543212,
  course:'full stack development',
  status:'admited',
  date:"20/02/2026"

}

const LeadsTable:React.FC = () => {

  const {data,isLoading} = useGetAllLeadsQuery('')

  return (
    <div className='flex flex-col gap-5 shadow-[0px_4px_14px_0px_#00000040] rounded-lg p-4'>
        <p className='font-semibold text-2xl '>Leads</p>
        <div className='w-full h-[90vh] border-2 rounded-xl border-[#00000052] p-4'>
          <div className='w-full items-center rounded-xl bg-[#1F338C]'>
              <div className='grid grid-cols-6'>
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
                  data?.data?.map((item,index)=>(
                     <div className='grid grid-cols-6 bg-[#F5F5F5] text-center font-medium rounded-lg hover:bg-[#E1EDFF]' key={index}>
                      <div className='flex flex-col gap-0 py-2'>
                        <p className=''>{item?.employee?.emp_id}</p>
                        <p className=''>{item?.employee?.employee_name}</p>
                      </div>
                      <p className='py-4 '>{item?.name}</p>
                      <p className='py-4 '>{item?.phone}</p>
                      <p className='py-4 '>{item?.course_name}</p>
                      <p className='py-4 '>{item?.status}</p>
                      <p className='py-4 '>{item?.assignedAt?.split('T')[0]}</p>
                    </div>
                  ))
                }
              </div>
        </div>
    </div>
  )
}

export default LeadsTable