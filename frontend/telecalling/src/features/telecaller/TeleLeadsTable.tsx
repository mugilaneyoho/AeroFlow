import React from 'react'

const title = [
    'Phone Number',
    'Name',
    'Status',
    'Last Calls Date',
    'Notes'
]

const data = {
    number:'9876543213',
    name:'abinaya',
    status:'pending',
    lastCalls:'34/3/3004',
    notes:'follow up'
}

const TeleLeadsTable:React.FC = () => {
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
                  Array(12).fill(data).map((item,index)=>(
                     <div className='grid grid-cols-5 bg-[#F5F5F5] text-center font-medium rounded-lg hover:bg-[#E1EDFF]' key={index}>
                      <p className='py-4 '>{item.number}</p>
                      <p className='py-4 '>{item.name}</p>
                      <p className='py-4 '>{item.status}</p>
                      <p className='py-4 '>{item.lastCalls}</p>
                      <p className='py-4 '>{item.notes}</p>
                    </div>
                  ))
                }
              </div>
        </div>
    </div>
  )
}

export default TeleLeadsTable