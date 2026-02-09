import React from 'react'
import CountCard from '../../components/ui/CountCard'

const arr = [
  {
    label: 'Total Collected',
    icon: 'fees',
    value: 3
  },
  {
    label: 'Payments',
    icon: 'admit',
    value: 4,
  },
  {
    label: 'Verifing',
    icon: 'present',
    value: 6
  },
  {
    label: 'This Month',
    icon: 'interest',
    value: 3
  },
]

const RegisterFees: React.FC = () => {
  return (
    <div className='flex flex-col gap-5'>
      <div className='flex flex-col'>
        <p className='font-bold text-2xl'>Registration Fee Tracking</p>
        <p className='text-[#595555] text-lg'>Monitot and verify registration fee payments</p>
      </div>

      <div className='flex flex-row justify-between'>
        {
            arr.map((arr,index)=><div key={index}>
              <CountCard label={arr.label} value={arr.value} icon={arr.icon}/>
            </div>)
        }
      </div>

      <div>
        <p>Payment Details</p>
        <div>

        </div>
      </div>
    </div>
  )
}

export default RegisterFees