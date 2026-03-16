import React, { useState } from 'react'
import { COLORS, FONTS } from '../../constant'
import Online from '../../component/syllabus/Online'
import Offline from '../../component/syllabus/Offline'

const Syllabus:React.FC = () => {
  const [activeTab , setActiveTab] = useState<'online' | 'offline'>('online')
  return (
    <div className=''>
        <div className='flex justify-between flex-col sm:flex-row items-start sm:items-center gap-4'>
             <div>
            <h1 style={{ ...FONTS.tittle, color: COLORS.primary_violet }}>
               Study Materials
            </h1>
            <p style={{ color: COLORS.primary_violet }}>
                Upload notes, presentations, and videos for students
            </p>
          </div>
           <div>
               <button style={{borderColor:COLORS.primary_violet,color:COLORS.primary_violet}} className='p-2 border rounded font-medium'>Uploaded Materials</button>
           </div>
            </div>  
           
        <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 mt-4 flex gap-2 rounded'>
          <button className="p-2 rounded w-full"
        style={{
            backgroundColor: activeTab === 'online' ? COLORS.primary_violet : COLORS.secondary_white,
            color: activeTab === 'online' ? COLORS.secondary_white : COLORS.primary_violet,
           }}
            onClick={() => setActiveTab('online')}
            >
            Online
           </button>
          <button className="p-2 rounded w-full"
         style={{
           backgroundColor: activeTab === 'offline' ? COLORS.primary_violet : COLORS.secondary_white,
           color: activeTab === 'offline' ? COLORS.secondary_white : COLORS.primary_violet,
           }}
          onClick={() => setActiveTab('offline')}
           >
          Offline
         </button>
          </div>  

          <div className="mt-4">
        {activeTab === 'online' && <Online />}
        {activeTab === 'offline' && <Offline />}
      </div>

    </div>
  )
}

export default Syllabus