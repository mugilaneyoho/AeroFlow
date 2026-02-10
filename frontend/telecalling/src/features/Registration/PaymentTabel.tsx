import React from 'react'

const title = [
    'Tele-caller Id & Name',
    'Student Name',
    'Mobile',
    'Course',
    'Payment Mode',
    'Transaction Id',
    'Amount',
    'Date',
    'Status'
]

const data = {
    tele: 'TC001',
    telename: 'priya',
    studentname: 'sharma',
    mobile: '9876543215',
    course: 'full stack',
    payment: 'UPI',
    trans:'987654323457',
    amount: 9876543,
    date: Date(),
    status: 'pending'
}

const PaymentTabel: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col gap-5 shadow-[0px_4px_14px_0px_#00000040] rounded-lg p-4'>
                <div className='w-full h-[80vh] border-2 rounded-xl border-[#00000052] p-4'>
                    <div className='w-full items-center rounded-xl bg-[#1F338C]'>
                        <div className='grid grid-cols-9'>
                            {
                                title.map((value) => (
                                    <div className='col-span-1 flex flex-row py-4 justify-center text-white'>
                                        <p>{value}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className='flex h-[62vh] flex-col gap-5 mt-5 overflow-y-scroll' style={{ scrollbarWidth: 'none' }}>
                        {
                            Array(12).fill(data).map((item, index) => (
                                <div className='grid grid-cols-9 bg-[#F5F5F5] justify-center items-center text-center font-medium rounded-lg hover:bg-[#E1EDFF]' key={index}>
                                    <div className='flex flex-col gap-0 py-2'>
                                        <p className=''>{item.tele}</p>
                                        <p className=''>{item.telename}</p>
                                    </div>
                                    <p className='py-4 '>{item.studentname}</p>
                                    <p className='py-4 '>{item.mobile}</p>
                                    <p className='py-4 '>{item.course}</p>
                                    <p className='py-4 '>{item.payment}</p>
                                    <p className='py-4 '>{item.trans}</p>
                                    <p className='py-4 '>{item.amount}</p>
                                    <p className='py-4 '>{item.date}</p>
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