import React from 'react'
import { COLORS } from '../../../constant'

interface UploadCompletedProps {
  onClose: () => void
  uuid: string
}


const UploadCompleted:React.FC<UploadCompletedProps> = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-105 rounded-2xl h-[90%] overflow-y-auto shadow-xl p-6 space-y-6">

        <div>
          <h2 className="text-lg font-semibold">Upload Class Materials</h2>
          <p className="text-sm text-gray-500">
            Upload notes, study materials, and recorded videos for React & Frontend
          </p>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Class Notes (PDF,DOCX)
          </label>
          <div className="border border-dashed rounded-lg p-6 text-center text-sm text-gray-600">
            <p className="font-medium">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400">PDF, DOCX up to 10MB</p>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Study Material (PDF,PPT,Documents)
          </label>
          <div className="border border-dashed rounded-lg p-6 text-center text-sm text-gray-600">
            <p className="font-medium">Click to upload or drag and drop</p>
            <p className="text-xs text-gray-400">
              PDF, PPT, DOCX up to 20MB
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">
            Recorded video
          </label>
          <div className="border border-dashed rounded-lg p-6 text-center text-sm text-gray-600">
            <p className="font-medium">Upload video file</p>
            <p className="text-xs text-gray-400">
              MP4, MOV up to 500MB
            </p>
          </div>
        </div>

        
        <div className="space-y-2">
          <label className="text-sm font-medium">
            Video URL
          </label>
          <input
            type="text"
            placeholder="Enter Url"
            className="w-full border border-dashed rounded-lg px-3 py-2 text-sm"
          />
        </div>

        
        <div className="flex justify-end gap-3 pt-2">
         

          <button
            className="px-4 py-2 rounded-md text-sm"
            style={{
              background: COLORS.primary_violet,
              color: COLORS.secondary_white,
            }}
          >
            Upload Material
          </button>
          
           <button 
           onClick={onClose}
            className="px-4 py-2 rounded-md text-sm border"
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

export default UploadCompleted
