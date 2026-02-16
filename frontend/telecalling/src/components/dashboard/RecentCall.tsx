import React from 'react'

const RecentCall:React.FC = () => {
  return (
    <div className='w-full h-full shadow-[0px_0px_14px_0px_#00000040_inset] p-3 rounded-xl'>
        <p className='font-medium text-xl'>Recent Call Activities</p>
        <div className='p-4 h-96 overflow-x-hidden'>
            {
                Array(4).fill(null).map((_,index)=>{
                    return (
                        <div key={index} className='border-b border-[#E1DDE4]'>
                            <div className='flex flex-row gap-5 items-center py-4 px-2'>
                                <div className='w-4 h-4 rounded-[50%] bg-[#0DB52F]'></div>
                                <p className='font-medium text-lg'>Priya Sharma marked lead as Interested</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default RecentCall