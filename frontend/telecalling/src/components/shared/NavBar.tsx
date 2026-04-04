import React from 'react'
import logo from '../../assets/logo1.png'
import logoutimg from '../../assets/icons/logout.svg'
import profile from '../../assets/icons/profile.svg'
import { useAuth } from '../../contexts/AuthUseContext'
import { useLocation, useNavigate } from 'react-router-dom'
import { IoCallOutline } from "react-icons/io5";
import { TbReportSearch } from "react-icons/tb";
import { LuTicket } from "react-icons/lu";
import { useTelecallerLoginMutation } from '../../services/api'

const NavBar:React.FC = () => {
  const {isAdmin,logout} = useAuth()
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  const [_,{reset}] = useTelecallerLoginMutation()
  
  return (
    <div className='w-full bg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000040] p-3 px-10'>
      <div className="flex flex-row justify-between">
        <div className='flex flex-row gap-10'>
          <div className=''>
            <img src={logo} alt="" width={60}/>
          </div>
          <div>
            <p className='font-semibold xl:text-2xl lg:text-md text-[#000000]'>Tele-Caller Admin</p>
            <p className='font-light text-[#595555] xl:text-lg lg:text-sm'>Admin Dashboard</p>
          </div>
        </div>
        {
            !isAdmin && <div className='flex flex-row items-center xl:gap-10 md:gap-2'> 
              <div onClick={()=>navigate('/')}  className={`flex flex-row gap-2 border border-solid border-[#2516F8] hover:bg-[#2516F8] hover:text-white cursor-pointer hover:shadow-[0px_4px_4px_0px_#1E2DFA80] px-4 py-2 rounded-2xl items-center font-medium lg:text-sm ${ path === '/' ? 'shadow-[0px_4px_4px_0px_#1E2DFA80] bg-[#2516F8] text-white' :'shadow-[0px_0px_14px_0px_#1E2DFA80_inset] bg-white' }`}>
                <IoCallOutline/>
                <p>Leads</p>
              </div>
              <div onClick={()=>navigate('/leadlist/INTERESTED')} className={`flex flex-row gap-2 border border-solid border-[#2516F8] hover:bg-[#2516F8] hover:text-white cursor-pointer hover:shadow-[0px_4px_4px_0px_#1E2DFA80] px-4 py-2 rounded-2xl lg:text-sm items-center font-medium ${ path === '' ? 'shadow-[0px_4px_4px_0px_#1E2DFA80] bg-[#2516F8] text-white' :'shadow-[0px_0px_14px_0px_#1E2DFA80_inset] bg-white' }`}>
                <TbReportSearch/>
                <p>Convert To Admit</p>
              </div>
              <div onClick={()=>navigate('/leadlist/ADMITTED')} className={`flex flex-row gap-2 border border-solid border-[#2516F8] hover:bg-[#2516F8] hover:text-white cursor-pointer hover:shadow-[0px_4px_4px_0px_#1E2DFA80] px-4 py-2 rounded-2xl lg:text-sm items-center font-medium ${ path === '' ? 'shadow-[0px_4px_4px_0px_#1E2DFA80] bg-[#2516F8] text-white' :'shadow-[0px_0px_14px_0px_#1E2DFA80_inset] bg-white' }`}>
                <TbReportSearch/>
                <p>Admitted Leads</p>
              </div>
              <div onClick={()=>navigate('/ticket')} className={`flex flex-row gap-2 border border-solid border-[#2516F8] lg:text-sm hover:bg-[#2516F8] hover:text-white cursor-pointer hover:shadow-[0px_4px_4px_0px_#1E2DFA80] px-4 py-2 rounded-2xl items-center font-medium ${ path === '' ? 'shadow-[0px_4px_4px_0px_#1E2DFA80] bg-[#2516F8] text-white' :'shadow-[0px_0px_14px_0px_#1E2DFA80_inset] bg-white' }`}>
                <LuTicket/>
                <p>Suppot tickets</p>
              </div>
            </div>
        }
        <div className='flex flex-row h-15 gap-10'>
          <img src={profile} alt="" width={50}/>
          <img onClick={()=>{logout(); reset()}} src={logoutimg} alt="" width={25} className='cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default NavBar