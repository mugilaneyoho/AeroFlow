import React, { useState } from 'react'
import { COLORS, FONTS } from '../../constant'
import Ongoing from '../../component/classes/ongoing&upcoming/Ongoing'
import Completed from '../../component/classes/completeclasses/Completed'

const Classes:React.FC = () => {
  const [activeTab , setActiveTab] = useState<'ongoing' | 'completed'>('ongoing')
  return (
    <div className='w-full'>
          <div>
            <h1 style={{ ...FONTS.tittle, color: COLORS.primary_violet }}>
               Conduct Class
            </h1>
            <p style={{ color: COLORS.primary_violet }}>
                Manage and conduct your scheduled classes
            </p>
          </div>
        <div className='shadow-[0px_0px_14px_0px_#2D216140]  mt-4  rounded'>
        <div className='p-2 flex gap-2'>
          <button className="py-1 rounded w-full"
        style={{
            backgroundColor: activeTab === 'ongoing' ? COLORS.primary_violet : COLORS.secondary_white,
            color: activeTab === 'ongoing' ? COLORS.secondary_white : COLORS.primary_violet,
           }}
            onClick={() => setActiveTab('ongoing')}
            >
            Ongoing & Upcoming Classes
           </button>
          <button className="py-1 rounded w-full"
         style={{
           backgroundColor: activeTab === 'completed' ? COLORS.primary_violet : COLORS.secondary_white,
           color: activeTab === 'completed' ? COLORS.secondary_white : COLORS.primary_violet,
           }}
          onClick={() => setActiveTab('completed')}
           >
          Completed Classes
         </button>
          </div>  
          
          </div>  

          <div className="mt-4">
        {activeTab === 'ongoing' && <Ongoing />}
        {activeTab === 'completed' && <Completed />}
      </div>

    </div>
  )
}

export default Classes