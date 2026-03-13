import React from 'react'
import Sidebar from '../shared/Sidebar'
import Navbar from '../shared/Navbar'
import { Outlet } from 'react-router-dom'

const MainLayout:React.FC = () => {
  return (
    <div className="flex w-screen h-screen overflow-auto ">
  <Sidebar />
    <div className="flex flex-col flex-1 min-h-screen">

    <Navbar />

    <div className="flex-1 p-6 overflow-auto">
      <Outlet />
    </div>
  </div>
</div>

  )
}

export default MainLayout