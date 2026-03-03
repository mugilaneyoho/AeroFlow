import React, { useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import Navbar from '../sidebar/Navbar'

const MainLayout = () => {
  const [isOpen, setIsOpen] = useState(true)
  return (
    <div className='flex h-screen'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <main className="flex-1 bg-gray-50 p-4 overflow-y-auto">
        <Navbar/>
        <Outlet/>
      </main>
    </div>
  )
}

export default MainLayout
