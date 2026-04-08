import React from 'react'
import { useGetAllActivityQuery } from '../../services/api'
import clock from '../../assets/clock.png'

const RecentCall: React.FC = () => {

    const { data, isLoading } = useGetAllActivityQuery({})

    console.log(isLoading, "active log")

    return (
        <div className='w-full h-full shadow-[0px_0px_14px_0px_#00000040_inset] p-3 rounded-xl'>
            <p className='font-medium text-xl'>Recent Activities</p>
            <div className='p-4 h-96 overflow-x-hidden'>
                {
                    data && data.length > 0 ?
                        data?.map((item: any, index: number) => (
                            <div>
                                <div
                                    key={index}
                                    className="shadow-[0px_0px_10px_0px_#00000040] border border-[#DBDADA] p-2 mb-2 rounded-[10px]"
                                >
                                    <div className="flex gap-2 p-2 ">
                                        <img src={clock} alt="icon" className='w-5 h-5 ' />

                                        <div className='w-full flex flex-row justify-between items-center'>
                                            <div>
                                            <p style={{ color: item.color }} className=''>{item.title}</p>
                                            <p className="text-sm text-gray-500">
                                                {item.description}
                                            </p>
                                            </div>
                                            <span
                                                className="inline-block text-sm px-2 py-1 rounded mt-1 bg-green-400"
                                            >
                                                {item.type}
                                            </span>
                                        </div>
                                    </div>
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