import React from 'react'
import CountCard from '../../components/ui/CountCard'
import logo from '../../assets/icons/profile.svg'
import RecentCall from '../../components/dashboard/RecentCall'
import RecentAdmission from '../../components/dashboard/RecentAdmission'
import plus from '../../assets/Frame.png'
import upload from '../../assets/Frame (1).png'
import leads from '../../assets/Frame (2).png'
import { useGetActiveEmployeeQuery, useGetDashboardQuery } from '../../services/api'
import { useNavigate } from 'react-router-dom'

const DashBoard:React.FC = () => {

  const {data} = useGetDashboardQuery('common')
  const navigate = useNavigate()

  const {data:activeemp} = useGetActiveEmployeeQuery('')

  const datas = [
    {
      label:'Assigned Leads',
      icon:'call',
      value: data?.data?.leadcounts?.ASSIGNED || 0,
    },
    {
      label:'Waiting Leads',
      icon:'lead',
      value: data?.data?.leadcounts?.WAITING || 0,
    },
    {
      label:'Rejected Leads',
      icon:'cutcall',
      value:data?.data?.leadcounts?.REJECTED || 0
    },
    {
      label:'Calls Pending',
      icon:'pencall',
      value:data?.data?.leadcounts?.NEW || 0
    },
    {
      label:'Interested Students',
      icon:'interest',
      value:data?.data?.leadcounts?.INTERESTED || 0
    },
    {
      label:'Registration Fee Paid',
      icon:'fees',
      value:3
    },
    {
      label:'Admit Leads',
      icon:'admit',
      value:data?.data?.leadcounts?.ADMITTED || 0
    },
    {
      label:'Present Tele-Callers',
      icon:'present',
      value: data?.data?.employee || 0
    }
  ]

  return (
    <div className='flex flex-col gap-5 py-2'>
      <div>
         <p className='font-bold text-2xl'>Dashboard OverView</p>
         <p className='font-light text-md'>Welcome to the Tele-caller Admin Dashboard</p>
      </div>

      <div className='grid grid-cols-4 gap-5'>
        {
          datas.map((items,index)=>{
            return(
              <div key={index}>
                <CountCard label={items.label} icon={items.icon} value={items.value}/>
              </div>
            )
          })
        }
      </div>

      <div className='grid grid-cols-2 gap-5 h-min'>
        <div>
          <RecentCall/>
        </div>
        <div>
          <RecentAdmission/>
        </div>
      </div>

      <div className='flex flex-col gap-2'>
        <p className='font-bold text-xl'>Quick Actions</p>
        <div className='grid grid-cols-3 gap-14 w-full h-28'>
          <div onClick={()=>navigate('/telecallers')} className='flex flex-col gap-2 h-28 justify-center items-center shadow-[0px_4px_14px_0px_#00000040] p-2 rounded-lg cursor-pointer'>
            <img src={plus} alt="" className='w-10 h-10'/>
            <p className='font-medium text-md text-[#1F338C]'>Create Tele-Caller</p>
          </div>
          <div onClick={()=>navigate('/leads')} className='flex flex-col gap-2 h-28 justify-center items-center shadow-[0px_4px_14px_0px_#00000040] p-2 rounded-lg cursor-pointer'>
            <img src={upload} alt="" className='w-10 h-10'/>
            <p className='font-medium text-md text-[#1F338C]'>Upload Leads</p>
          </div>
          <div onClick={()=>navigate('/leads')} className='flex flex-col gap-2 h-28 justify-center items-center shadow-[0px_4px_14px_0px_#00000040] p-2 rounded-lg cursor-pointer'>
            <img src={leads} alt="" className='w-10 h-10'/>
            <p className='font-medium text-md text-[#1F338C]'>Allocate Leads</p>
          </div>
        </div>
      </div>

      <div className='w-full shadow-[0px_4px_14px_0px_#00000040] p-2 rounded-lg'>
        <div className='flex flex-row justify-between p-2'>
          <p className='font-semibold text-lg'>Active Tele-Callers</p>
          <p className='border border-solid border-[#881F8C] p-1 px-4 text-white bg-[#0AD544] rounded-xl'>{activeemp?.length} Online</p>
        </div>
          <div className='w-full flex flex-col gap-4 p-2'>
            {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              activeemp?.map((emp:any)=>{
                return (
                  <div key={emp.uuid} className='shadow-[0px_4px_4px_0px_#5CFF3C] rounded-xl bg-[#EAFFE6]'>
                      <div className='flex flex-row w-full justify-between px-4 py-2'>
                        <div className='flex flex-row gap-4 items-center'>
                          <img src={logo} alt="" />
                          <div>
                            <p className='font-medium text-lg'>{emp?.employee_name}</p>
                            <p className='font-medium text-[#595555]'>{emp?.emp_id}</p>
                            <p className='font-medium text-[#595555]'>clock-in 09:00 AM</p>
                          </div>
                        </div>
                        <div className='flex flex-col justify-around'>
                          <p className='font-semibold text-[#0A7E2D]'>Active</p>
                          <p className='font-medium text-[#595555]'>present</p>
                        </div>
                      </div>
                  </div>
                )
              })
            }
          </div>
      </div>
    </div>
  )
}

export default DashBoard