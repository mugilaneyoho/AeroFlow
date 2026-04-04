import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'

import dasshboard from "../assets/sidebar/dashboardicon.png"
import doubleuser from "../assets/sidebar/doubleuser.png"
import finance from "../assets/sidebar/finance.png"
// import notification from "../assets/sidebar/notification.png"
// import Placement from "../assets/sidebar/placement.png"
// import report from "../assets/sidebar/report.png"
import student from "../assets/sidebar/student.png"
import telecalling from "../assets/sidebar/telecalling.png"
import ticket from "../assets/sidebar/ticket.png"
import training from "../assets/sidebar/training.png"
import logo from "../assets/sidebar/logo.png"
import logoutimg from "../assets/sidebar/logout.png"
import { useAuth } from '../contexts/AuthUseContext'


const menuItems = [
  { name: 'Dashboard', path: "/", icon: dasshboard },
  { name: 'Admission', path: '/admission', icon: doubleuser },
  // { name: 'Department', path: '/department', icon: doubleuser },
  { name: 'Users & Faculty', path: '/usersandfaculty', icon: doubleuser },
  { name: 'Meeting Management', path: '/meetingmanagement', icon: doubleuser },
  { name: 'Tele-Calling', path: '/telecalling', icon: telecalling },
  { name: 'Training & Events', path: '/trainingmanagement', icon: training },
  { name: 'Student Management', path: '/studentmanagement', icon: student },
  { name: 'Finance & Fees', path: '/financeandfees', icon: finance },
  { name: 'Ticket Management', path: '/ticketmanagement', icon: ticket },
  // { name: 'Placement', path: '/placement', icon: Placement },
  // { name: 'Reports & Analytics', path: '/reportsandanalytics', icon: report },
  // { name: 'Notification', path: '/notification', icon: notification }
]

interface SidebarProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}
const Sidebar: React.FC<SidebarProps> = ({ isOpen }: SidebarProps) => {
  const [trainingDropDowm, settrainingDropDowm] = useState(false);
  const {logout} = useAuth()

  function chagneTrainingDropdown() {
    settrainingDropDowm(!trainingDropDowm)
  }

  return (
    <div className={`h-screen flex flex-col border transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} bg-[#54191D] text-white`}>
      <div className=" md:grid items-center text-center border m-4 rounded-xl border-gray-100 bg-[#EDBF5C]">
        <div className='flex items-center justify-center py-2'>
          <img src={logo} className={`w-12 h-12 mr-2 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} />
        </div>
        <h1>Training Institute</h1>
        <h2>Master Admin Panel</h2>
      </div>

      <div className="flex-1 p-3 space-y-2 overflow-y-auto no-scrollbar">
        {menuItems.map((item) => (
          item.path === '/trainingmanagement' ?
            <div>
              <div className='cursor-pointer' onClick={chagneTrainingDropdown}>
                <div className='flex flex-row gap-3 p-2 rounded-2xl transition-all duration-200 text-white hover:bg-[#EDBF5C] hover:text-[#54191D]'>
                  <div className=''>
                    <img src={item.icon} className="w-5 h-5 " />
                  </div>

                  {isOpen && (
                    <span className="text-md">
                      {item.name}
                    </span>
                  )}
                </div>
              </div>
              {
                trainingDropDowm &&
                <div className='flex flex-col gap-3 ml-10 *:p-3'>
                  <NavLink to='/course' className={({ isActive }) => `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${!isOpen ? "justify-center" : ""} ${isActive ? "bg-[#EDBF5C] text-[#54191D]" : "text-white hover:bg-[#EDBF5C] hover:text-[#54191D]"} `}>
                    <div className=''>
                      <img src={item.icon} className="w-5 h-5 " />
                    </div>

                    {isOpen && (
                      <span className="text-sm">
                        course
                      </span>
                    )}
                  </NavLink>
                  <NavLink to='/batch' className={({ isActive }) => `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${!isOpen ? "justify-center" : ""} ${isActive ? "bg-[#EDBF5C] text-[#54191D]" : "text-white hover:bg-[#EDBF5C] hover:text-[#54191D]"} `}>
                    <div className=''>
                      <img src={item.icon} className="w-5 h-5 " />
                    </div>

                    {isOpen && (
                      <span className="text-sm">
                        batch
                      </span>
                    )}
                  </NavLink>
                  <NavLink to='/class' className={({ isActive }) => `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${!isOpen ? "justify-center" : ""} ${isActive ? "bg-[#EDBF5C] text-[#54191D]" : "text-white hover:bg-[#EDBF5C] hover:text-[#54191D]"} `}>
                    <div className=''>
                      <img src={item.icon} className="w-5 h-5 " />
                    </div>

                    {isOpen && (
                      <span className="text-sm">
                        class
                      </span>
                    )}
                  </NavLink>
                </div>
              }
            </div>
            : <div key={item.name} className="relative group">
              <NavLink to={item.path} className={({ isActive }) => `flex items-center gap-3 p-2 rounded-xl transition-all duration-200 ${!isOpen ? "justify-center" : ""} ${isActive ? "bg-[#EDBF5C] text-[#54191D]" : "text-white hover:bg-[#EDBF5C] hover:text-[#54191D]"} `}>
                <div className=''>
                  <img src={item.icon} className="w-5 h-5 " />
                </div>

                {isOpen && (
                  <span className="text-sm">
                    {item.name}
                  </span>
                )}
              </NavLink>

              {!isOpen && (
                <span className={`absolute left-14 top-1/2 -translate-y-1/2 rounded-md bg-[#EDBF5C] text-[#54191D] text-sm px-3 py-1 opacity-0 transition-all duration-300 z-50 shadow-md`}>
                  {item.name}
                </span>
              )}
            </div>
        ))}
        <div className='border rounded-md px-2 py-2 mt-40 my-10'>
            <div className='flex gap-3 items-center justify-center cursor-pointer' onClick={()=>logout()}>
                <div>
                    <img src={logoutimg} className="w-5 h-5" />
                </div>
                <div>
                    <h1>Logout</h1>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default Sidebar
