import React, { useState } from 'react'
import { COLORS } from '../../constant'
import uploadimg from '../../assets/dashboardsimg/uploadicon.png'
import { useDispatch } from 'react-redux'
import { createNoteThunk, updateNoteThunk } from '../../features/syllabus/reducers/thunk'

interface UploadOnlineProps {
  onClose:() => void
  editItem?: any
}

const UploadOnline:React.FC<UploadOnlineProps> = ({onClose, editItem }) => {
  const dispatch = useDispatch<any>()
  const [form, setForm] = useState({
    classType: editItem?.classType ?? 'online',
    topicName: editItem?.topicName ?? '',
    materialType: editItem?.materialType ?? 'NotePDF',
    batch: editItem?.batch ?? '',
    panel: editItem?.panel ?? 'staff',
    classDate: editItem?.classDate ?? '',
    status: editItem?.status ?? 'ongoing',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async () => {
    if (!form.topicName || !form.batch) return alert('Topic Name and Batch are required')
    if (editItem) {
      await dispatch(updateNoteThunk(editItem.id, form))
    } else {
      await dispatch(createNoteThunk(form))
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white w-105 rounded-2xl h-[90%] overflow-y-auto shadow-xl p-6 space-y-6">

        <h2 className="text-lg font-semibold">{editItem ? 'Edit Class Material' : 'Upload Class Materials'}</h2>

        <div className="space-y-2">
          <label className="text-sm font-medium">Select Class*</label>
          <select name="classType" value={form.classType} onChange={handleChange} className='w-full border rounded-md px-3 py-2 text-sm outline-none'>
            <option value="online">Online</option>
            <option value="offline">Offline</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Topic Name*</label>
          <input name="topicName" value={form.topicName} onChange={handleChange} type='text' placeholder='React Hook Introduction' className='w-full border rounded-md px-3 py-2 text-sm' />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Batch*</label>
          <input name="batch" value={form.batch} onChange={handleChange} type='text' placeholder='STU001' className='w-full border rounded-md px-3 py-2 text-sm' />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Material Type*</label>
          <select name="materialType" value={form.materialType} onChange={handleChange} className='w-full border rounded-md px-3 py-2 text-sm outline-none'>
            <option value="NotePDF">NotePDF</option>
            <option value="PPT">PPT</option>
            <option value="DOC">DOC</option>
            <option value="MP4">MP4</option>
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Class Date</label>
          <input name="classDate" value={form.classDate} onChange={handleChange} type='date' className='w-full border rounded-md px-3 py-2 text-sm' />
        </div>

        {!editItem && (
          <div className="space-y-2">
            <label className="text-sm font-medium">Upload File*</label>
            <div className="border border-dashed rounded-lg p-6 flex flex-col text-center items-center justify-center text-sm text-gray-600">
              <img src={uploadimg} alt='upload' className='w-5 h-5 mb-2' />
              <p className="font-medium">Click to upload or drag and drop</p>
              <p className="text-xs text-gray-400">PDF, PPT, DOC, MP4 (max. 100MB)</p>
            </div>
          </div>
        )}

        <div className="flex justify-end gap-3 pt-2">
          <button onClick={handleSubmit} className="px-4 py-2 rounded-md w-full justify-center items-center text-sm"
            style={{background: COLORS.primary_violet,color: COLORS.secondary_white}}>
            {editItem ? 'Update' : 'Upload Material'}
          </button>
          <button onClick={onClose} className="px-4 py-2 rounded-md w-full justify-center items-center text-sm border"
            style={{ borderColor: COLORS.primary_violet, color: COLORS.primary_violet }}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  )
}

export default UploadOnline
