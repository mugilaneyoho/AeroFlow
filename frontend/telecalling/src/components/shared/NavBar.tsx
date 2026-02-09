import React from 'react'
import logo from '../../assets/logo1.png'
import logout from '../../assets/icons/logout.svg'
import profile from '../../assets/icons/profile.svg'

const NavBar:React.FC = () => {
  return (
    <div className='w-fullbg-[#FFFFFF] shadow-[0px_4px_4px_0px_#00000040] p-3 px-10'>
      <div className="flex flex-row justify-between">
        <div className='flex flex-row gap-10'>
          <div className=''>
            <img src={logo} alt="" width={60}/>
          </div>
          <div>
            <p className='font-semibold text-2xl text-[#000000]'>Tele-Caller Admin</p>
            <p className='font-light text-[#595555] text-lg'>Admin Dashboard</p>
          </div>
        </div>
        <div className='flex flex-row h-15 gap-10'>
          <img src={profile} alt="" width={50}/>
          <img src={logout} alt="" width={25}/>
        </div>
      </div>
    </div>
  )
}

export default NavBar