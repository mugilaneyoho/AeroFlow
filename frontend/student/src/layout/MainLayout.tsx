import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

const MainLayout:React.FC = () => {
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-[#FFFFFF]" >
        <div className="flex flex-col flex-1 p-2">
         <Navbar/>
        </div>
        <div className="flex h-screen overflow-hidden">
          <div
            className="transition-all duration-300 p-2"
          >
            <Sidebar/>
          </div>
          <div className="flex-1 overflow-y-auto p-6">
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default MainLayout