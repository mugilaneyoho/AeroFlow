import React from 'react'
import { useGetAllPaymentsQuery } from '../../services/api'

const title = [
    'Student Name',
    'Mobile',
    'Payment Mode',
    'Transaction Id',
    'Amount',
    'Date',
    'Status'
]


const PaymentTabel: React.FC = () => {

    const {data} = useGetAllPaymentsQuery('payment')

    console.log(data)

    return (
        <div>
            <div className='flex flex-col gap-5 shadow-[0px_4px_14px_0px_#00000040] rounded-lg p-4'>
                <div className='w-full h-[80vh] border-2 rounded-xl border-[#00000052] p-4 overflow-scroll' style={{scrollbarWidth:'none'}}>
                    <div className='w-full items-center rounded-xl bg-[#1F338C]'>
                        <div className='grid grid-cols-7'>
                            {
                                title.map((value) => (
                                    <div className='col-span-1 flex flex-row py-4 justify-center text-white'>
                                        <p>{value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex h-[68vh] flex-col gap-5 mt-5 overflow-y-scroll' style={{ scrollbarWidth: 'none' }}>
                        {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            data?.data?.map((item:any, index:number) => (
                                <div className='grid grid-cols-7 bg-[#F5F5F5] justify-center items-center text-center font-medium rounded-lg hover:bg-[#E1EDFF]' key={index}>
                                    <p className='py-4 '>{item?.studentName}</p>
                                    <p className='py-4 '>{item?.Phone}</p>
                                    {/* <p className='py-4 '>{item?.course}</p> */}
                                    <p className='py-4 '>{item?.paymentMode}UPI</p>
                                    <p className='py-4 '>{item?.transactionId}</p>
                                    <p className='py-4 '>{item?.amount}</p>
                                    <p className='py-4 '>{item?.paymentDate?.split('GMT')[0]}</p>
                                    <p className='py-4 '>{item.status}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentTabel