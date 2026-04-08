import { useEffect, useState } from 'react'
import { COLORS } from '../../constant'
import uploadwhite from '../../assets/classesimg/uploadiconwhite.png'
import markwhite from '../../assets/classesimg/markiconWhite.png'
import noteicon from '../../assets/classesimg/noteblackicon.png'
import calendaricon from '../../assets/classesimg/calendaricon.png'
import UploadOnline from './UploadOnline'
import { useDispatch, useSelector } from 'react-redux'
import { getNoteThunk, updateNoteThunk } from '../../features/syllabus/reducers/thunk'
import { selectNote } from '../../features/syllabus/reducers/selector'

const Online = () => {
  const [openUpload,setOpenUpload] = useState(false)
  const[editItem, setEditItem] = useState<any>(null)
  const[selectedDate, setSelectedDate] =useState<{[key:number]:string}>({})
  const dispatch = useDispatch<any>()
  const notes = useSelector(selectNote)

  useEffect(() => {
    dispatch(getNoteThunk())
  }, [dispatch])

  const handleCompleted = (item: any) => {
    dispatch(updateNoteThunk(item.id, { status: 'completed' }))
  }

  return (
    <div 
    className="grid grid-cols-1 gap-3 p-3 rounded-[10px] w-full pt-4" style={{ boxShadow: COLORS.shadow_white }}>
      {(notes as any[]).filter((item: any) => item.classType === 'online').map((item: any, index: number) => (
        <div key={item.id} style={{ boxShadow: COLORS.shadow_white, background: COLORS.secondary_white }} className='p-3 rounded-[10px]'>

          <div className="flex justify-between items-center border-b border-[#E4D1B1] flex-wrap gap-2">
            <div className="flex justify-center flex-col sm:flex-row gap-2 pb-4">
              <div>
                <p>{item.topicName}</p>
                <p style={{color:COLORS.bg_dark_gray}} className='text-sm'>{item.batch}</p>
              </div>
              <div className="flex items-center">
                <span 
                className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor:item.status === 'completed'? COLORS.bg_ongoing_green: COLORS.ongoing_gray,
                    color: item.status ==='completed'? COLORS.secondary_white:"#164853",
                  }}>
                  {item.status}
                </span>
              </div>
            </div>

            <div className="flex gap-2 items-center justify-center px-3 py-2 rounded-md cursor-pointer">
              <label className='relative flex gap-2 items-center cursor-pointer'>
                <img src={calendaricon} alt='img' className='w-5 h-5' />
                <input type='date'className='absolute inset-0 opacity-0 cursor-pointer'
                  onChange={(e)=>setSelectedDate({...selectedDate,[index]:e.target.value})}/>
                <p>{selectedDate[index] || item.classDate}</p>
              </label>
            </div>
          </div>

          <div>
            <p>Materials Uploaded:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2  p-3  gap-3">
              <div className="flex items-center gap-2 border px-2 py-1 rounded-[5px] w-full min-w-0">
                <img src={noteicon} alt='noteicon' className='w-4 h-4 shrink-0'/>
                <p style={{color:COLORS.primary_violet }} className='text-sm break-all'>{item.materialType || 'No material'}</p>
              </div>
            </div>
          </div>

          <div className="pt-3">
            <div className="flex flex-col sm:flex-row gap-2 items-center">
              <button className="flex gap-2 w-full justify-center text-sm items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                onClick={() => { setEditItem(item); setOpenUpload(true) }}
                style={{backgroundColor:COLORS.primary_violet,color:COLORS.secondary_white}}>
                <img src={uploadwhite} />
                <span>Upload material</span>
              </button>

              {item.status === 'ongoing' && (
                <button className="flex gap-2 text-sm justify-center w-full items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                  onClick={() => handleCompleted(item)}
                  style={{backgroundColor:COLORS.primary_violet,color:COLORS.secondary_white}}>
                  <img src={markwhite} />
                  <span>Completed</span>
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {openUpload &&
        <UploadOnline editItem={editItem} onClose={() => { setEditItem(null); setOpenUpload(false); dispatch(getNoteThunk()) }} />
      }
    </div>
  )
}

export default Online
