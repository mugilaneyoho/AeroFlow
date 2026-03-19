import React from 'react'
import { COLORS } from '../../constant'
import uploadimg from '../../assets/dashboardsimg/uploadicon.png'

interface UploadOnlineProps{
    onClose:() => void
}

const UploadOnline:React.FC<UploadOnlineProps> = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-105 rounded-2xl h-[90%] overflow-y-auto shadow-xl p-6 space-y-6">

        <div>
          <h2 className="text-lg font-semibold">Upload Class Materials</h2>
          
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
           Select Class*
          </label>
          <select className='w-full border rounded-md px-3 py-2 text-sm outline-none'>
            <option value="">Select Class</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
          Topic Name*
          </label>
         <input type='text' placeholder='React Hook Introduction' className='w-full border rounded-md px-3 py-2 text-sm'/>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
          Material Type*
          </label>
         <select className='w-full border rounded-md px-3 py-2 text-sm outline-none'>
            <option value="">NotePDF</option>
            <option>Online</option>
            <option>Offline</option>
          </select>
        </div>

        <div className="space-y-2">
         
           <label className="text-sm font-medium">
           Upload File*
          </label>
          <div className="border border-dashed rounded-lg p-6 flex flex-col text-center items-center justify-center text-sm text-gray-600">
            <img src={uploadimg} alt='upload' className='w-5 h-5 mb-2'/>
            <p className="font-medium">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400">
              PDF, PPT, DOC, MP4(max.100MB)
            </p>
          </div>
        </div>

        
        

        
        <div className="flex justify-end gap-3 pt-2">
         

          <button
            className="px-4 py-2 rounded-md w-full justify-center items-center text-sm"
            style={{
              background: COLORS.primary_violet,
              color: COLORS.secondary_white,
            }}
          >
            Upload Material
          </button>
          
           <button 
           onClick={onClose}
            className="px-4 py-2 rounded-md w-full justify-center items-center text-sm border"
            style={{
              borderColor: COLORS.primary_violet,
              color: COLORS.primary_violet,
            }}
          >
            cancel
          </button>
        </div>

      </div>
    </div>
  )
}

export default UploadOnline
