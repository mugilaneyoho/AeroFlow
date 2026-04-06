import React from 'react'
import { useGetAllActivityQuery } from '../../services/api'

const RecentCall:React.FC = () => {

    const {data,isLoading} = useGetAllActivityQuery({})

    console.log(isLoading,"active log")

  return (
    <div className='w-full h-full shadow-[0px_0px_14px_0px_#00000040_inset] p-3 rounded-xl'>
        <p className='font-medium text-xl'>Recent Activities</p>
        <div className='p-4 h-96 overflow-x-hidden'>
            {
                data && data.length > 0 ?
                    data?.map((item:any,index:number)=>(
                        <div key={index} className='flex justify-between gap-4 shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-xl p-4 py-4'>
                        <div>
                            <h1 className='font-bold'>{item.performedBy}</h1>
                            <p>{item.description}</p>
                            <p>{item.createdAt && new Date(item.createdAt).toLocaleTimeString()}</p>
                        </div>
                        <div className={`px-2 rounded-xl h-8 ${item.status === "SUCCESS"? "bg-[#599E2E] text-white" : item.status === "FAILED"? "bg-[#D20F0F] text-white" : item.status === "PENDING"? "bg-[#D08700] text-white" : ""}`}>
                            {item.status}
                        </div>
                    </div>
                    ))
                :
                <div className='text-center mt-5'>
                    No logs founded
                </div>
            }
        </div>
    </div>
  )
}

export default RecentCall