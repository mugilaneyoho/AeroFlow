import React from 'react'
import { DashboardIcons } from '../../assets/icons/DashboardIcons';

type props = {
    label:string;
    value:number | string;
    icon?:string;
}

const CountCard:React.FC<props> = ({label,value,icon}) => {
  return (
    <div className='flex flex-row gap-5 justify-between items-center rounded-lg shadow-[0px_4px_14px_0px_#1F338C] bg-[#FFFFFF] p-5'>
        <div className='flex flex-col gap-5'>
            <p className=' font-medium text-lg'>{label}</p>
            <p className='font-medium text-2xl'>{value}</p>
        </div>
        <img src={DashboardIcons[icon] } alt="" />
    </div>
  )
}

export default CountCard