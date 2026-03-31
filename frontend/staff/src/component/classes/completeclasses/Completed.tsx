import { useEffect, useState } from 'react'
import { COLORS } from '../../../constant'
import uploadviolet from '../../../assets/classesimg/uploadviolet.png'
import uploadwhite from '../../../assets/classesimg/uploadiconwhite.png'
import markviolet from '../../../assets/classesimg/markiconviolet.png'
import markwhite from '../../../assets/classesimg/markiconWhite.png'
import noteicon from '../../../assets/classesimg/noteblackicon.png'
import { Link } from 'react-router-dom'
// import { CompletedData } from '../../../data/CompletedData'
import UploadCompleted from './UploadCompleted'
import calendaricon from '../../../assets/classesimg/calendaricon.png'
import { GetAllClassesThunk } from '../../../features/classes/reducer/thunk'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../../store/store'
import { GetAllClasses } from '../../../features/classes/reducer/selector'


const Completed = () => {
  const [openUpload, setOpenUpload] = useState(false)
  const [activeIcon, setActiveIcon] = useState<{ [key: number]: string }>({})
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [selectedDate, setSelectedDate] = useState<{ [key: number]: string }>({})

  const dispatch = useDispatch<AppDispatch>()
  const classes = useSelector(GetAllClasses)

  useEffect(() => {
    dispatch(GetAllClassesThunk('completed'))
  }, [dispatch])

  const formatDate = (iso: string) => {
    const d = new Date(iso)
    const year = d.getFullYear()
    const month = (d.getMonth() + 1).toString().padStart(2, '0')
    const day = d.getDate().toString().padStart(2, '0')
    return `${year}-${month}-${day}`
  }



  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 p-1 rounded-[10px] w-full pt-4"
      style={{ boxShadow: COLORS.shadow_white }}
    >
      {classes?.map((item: any, index: number) => {

        return (
          <div key={index}
            style={{ boxShadow: COLORS.shadow_white, background: COLORS.secondary_white }} className='p-3 rounded-[10px]'>

            <div className="flex justify-between border-b border-[#E4D1B1]">
              <div className="flex justify-center gap-2 pb-4">
                <div>
                  <p>{item.subject}</p>
                  <p style={{ color: COLORS.bg_dark_gray }} className='text-sm'>{item.batch_name}</p>

                </div>

                <div className="flex items-center ">
                  <span
                    className="px-3 py-1 rounded-full text-sm"
                    style={{
                      backgroundColor: COLORS.bg_upcoming_blue,
                      color: COLORS.secondary_white,
                    }}
                  >
                    Completed
                  </span>
                </div>
              </div>



              <div className="flex gap-2 items-center justify-center px-3 py-2 rounded-md cursor-pointer"
                style={{
                  backgroundColor: selectedDate[index]
                    ? COLORS.secondary_white
                    : 'transparent',
                  color: selectedDate[index]
                    ? COLORS.bg_black
                    : 'black'
                }}
              >
                <label className='relative flex gap-2 items-center cursor-pointer'>
                  <img src={calendaricon} alt='img' className='w-5 h-5' />
                  <input type='date'
                    className='absolute inset-0 opacity-0 cursor-pointer'
                    onChange={(e) => setSelectedDate({ ...selectedDate, [index]: e.target.value })}
                  />
                  <p>{selectedDate[index] || formatDate(item.start_time)}</p>
                </label>
              </div>
            </div>

            <div>
              <div>
                <p>Materials:</p>
              </div>
              {
                item?.notes?.length > 0 ?
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-3  gap-3">
                    <div className="flex items-center border p-1 rounded-[5px]">
                      <img src={noteicon} alt='noteicon' />
                      <p style={{ color: COLORS.primary_violet, borderColor: COLORS.border_color }} className='text-sm '>{item.note2}</p>
                    </div>
                  </div>
                  :
                  <div className='text-center text-md font-light'>Materials unavailable</div>
              }
            </div>

            <div className="pt-3">
              <div className="flex flex-wrap gap-2 items-center justify-center sm:justify-start">
                {
                  item?.attendance ?
                    <Link
                      to='/ViewAttendance'
                      state={{ classData: item }}
                      className="flex gap-2 text-sm items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                      onClick={() => setActiveIcon({ ...activeIcon, [index]: 'mark' })}
                      style={{
                        backgroundColor: activeIcon[index] === 'mark' ? COLORS.primary_violet : 'white',
                        color: activeIcon[index] === 'mark' ? COLORS.secondary_white : COLORS.primary_violet,
                      }}
                    >
                      <img src={activeIcon[index] === 'mark' ? markwhite : markviolet} />
                      <span>View attendance</span>
                    </Link>
                    :
                    <Link
                      to='/markattendance'
                      state={{ classData: item }}
                      className="flex gap-2 text-sm items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                      onClick={() => setActiveIcon({ ...activeIcon, [index]: 'mark' })}
                      style={{
                        backgroundColor: activeIcon[index] === 'mark' ? COLORS.primary_violet : 'white',
                        color: activeIcon[index] === 'mark' ? COLORS.secondary_white : COLORS.primary_violet,
                      }}
                    >
                      <img src={activeIcon[index] === 'mark' ? markwhite : markviolet} />
                      <span>Mark attendance</span>
                    </Link>
                }

                <button
                  className="flex gap-2 text-sm items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                  onClick={() => {
                    setOpenUpload(true)
                    setActiveIcon({ ...activeIcon, [index]: 'upload' })
                    setActiveIndex(index)
                  }}
                  style={{
                    backgroundColor: activeIcon[index] === 'upload' ? COLORS.primary_violet : 'white',
                    color: activeIcon[index] === 'upload' ? COLORS.secondary_white : COLORS.primary_violet,
                  }}
                >
                  <img src={activeIcon[index] === 'upload' ? uploadwhite : uploadviolet} />
                  <span>Upload material</span>
                </button>

                <button

                  className="flex gap-2 text-sm items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                  onClick={() => setActiveIcon({ ...activeIcon, [index]: 'completed' })}
                  style={{
                    backgroundColor: activeIcon[index] === 'completed' ? COLORS.primary_violet : 'white',
                    color: activeIcon[index] === 'completed' ? COLORS.secondary_white : COLORS.primary_violet,
                  }}
                >
                  <img src={activeIcon[index] === 'completed' ? markwhite : markviolet} />
                  <span>Completed</span>
                </button>

              </div>
            </div>
          </div>
        )
      })}

      {openUpload && activeIndex !== null && classes &&
        (<UploadCompleted onClose={() => setOpenUpload(false)}
          uuid={classes?.[activeIndex]?.uuid}
        />)
      }
    </div>
  )
}

export default Completed

