import { useEffect, useState } from 'react'
import { COLORS } from '../../../constant'
import startclassviolet from '../../../assets/classesimg/starticonviolet.png'
import startclasswhite from '../../../assets/classesimg/startIconpink.png'
import uploadviolet from '../../../assets/classesimg/uploadviolet.png'
import uploadwhite from '../../../assets/classesimg/uploadiconwhite.png'
import markviolet from '../../../assets/classesimg/markiconviolet.png'
import endclasswhite from '../../../assets/classesimg/endclasswhite.png'
import markwhite from '../../../assets/classesimg/markiconWhite.png'

import { Link } from 'react-router-dom'
import UploadMaterial from './UploadMaterial'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch } from '../../../store/store'
import { GetAllClassesThunk } from '../../../features/classes/reducer/thunk'
import { GetAllClasses } from '../../../features/classes/reducer/selector'

const Ongoing = () => {
  const [liveIndex, setLiveIndex] = useState<number | null>(null)
  const [openUpload, setOpenUpload] = useState(false)
  const [activeIcon, setActiveIcon] = useState<{ [key: number]: string }>({})
  const [activeIndex, setActiveIndex] = useState<number | null>(null)


  const dispatch = useDispatch<AppDispatch>()
  const classes = useSelector(GetAllClasses)

  useEffect(() => {
    dispatch(GetAllClassesThunk('ongoing'))
  }, [dispatch])

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const day = d.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const formatTime = (isoString: string) => {
    const d = new Date(isoString);
    let hours = d.getHours();
    const minutes = d.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    return `${hours}:${minutes} ${ampm}`;
  };

  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3 p-1 rounded-[10px] w-full pt-4"
      style={{ boxShadow: COLORS.shadow_white }}
    >
      {classes?.map((item: any, index: number) => {
        const isLive = liveIndex === index

        return (
          <div key={index}
            style={{
              background: COLORS.secondary_white,
              boxShadow: COLORS.shadow_white,
              borderColor: isLive ? COLORS.bg_light_green : COLORS.bg_gray,
              borderWidth: '1px',
            }} className='p-3 rounded-[10px]'>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-3 gap-2  border-b border-[#E4D1B1]">
              <div className="flex flex-col justify-center">
                <p>{item.subject}</p>
                <p style={{ color: COLORS.bg_dark_gray }} className='text-sm'>{item.batch_name}</p>
              </div>

              <div className="flex items-center justify-center">

                <span
                  className="px-3 py-1 rounded-full text-sm flex items-center gap-2"
                  style={{
                    backgroundColor: isLive
                      ? COLORS.bg_light_green
                      : (item.status || "").toLowerCase() === 'offline'
                        ? COLORS.bg_red
                        : COLORS.bg_dark_green,

                    color: COLORS.secondary_white,
                  }}
                >
                  {isLive && <span className="w-2 h-2 bg-white rounded-full" />}
                  {isLive ? 'Live' : item.status === 'Online' ? 'Online' : 'Offline'}
                </span>
              </div>

              <div className="flex items-center justify-center">
                <span
                  className="px-3 py-1 rounded-full text-sm"
                  style={{
                    backgroundColor:
                      item.update === 'Ongoing'
                        ? COLORS.bg_ongoing_green
                        : COLORS.bg_upcoming_blue,
                    color: COLORS.secondary_white,
                  }}
                >
                  {item.update}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-3  gap-3">
              <div className="flex flex-col justify-center">
                <p style={{ color: COLORS.bg_dark_gray }} className="text-sm">Date & Time</p>
                <p>
                  {formatDate(item.start_time)} <br />
                  {formatTime(item.start_time)} - {formatTime(item.end_time)}
                </p>
              </div>

              <div className="flex flex-col justify-center">
                <p style={{ color: COLORS.bg_dark_gray }} className='text-sm'>Students</p>
                <p>{item.total_students ?? 0}</p>
              </div>

              <div className="flex flex-col justify-center">
                <p style={{ color: COLORS.bg_dark_gray }} className='text-sm'>Class Link</p>
                <p className="break-all">{item.link}</p>
              </div>
            </div>



            {isLive && (
              <div
                className="p-3 rounded-[10px] mt-2"
                style={{
                  backgroundColor: COLORS.bg_light_green,
                  color: COLORS.secondary_white,
                }}
              >
                <p className="flex items-center gap-2 font-medium">
                  <img src={startclasswhite} alt="live" />
                  Class is in progress
                </p>
                <p className="text-sm mt-1">
                  Remember to upload class materials and notes after completing the session
                </p>
              </div>
            )}

            <div className="pt-3">
              <div className="flex gap-2 items-center">
                <button
                  className="flex gap-2 text-sm items-center justify-center px-2 py-2 rounded-[10px] whitespace-nowrap"
                  onClick={() => setLiveIndex(isLive ? null : index)}
                  style={{
                    backgroundColor: isLive ? COLORS.bg_red : COLORS.secondary_white,
                    color: isLive ? COLORS.secondary_white : COLORS.primary_violet,
                    borderColor: COLORS.primary_violet,
                    borderWidth: '1px',
                  }}>

                  <img src={isLive ? endclasswhite : startclassviolet} />
                  <span>{isLive ? 'End Class' : 'Start Class'}</span>
                </button>

                <button
                  className="flex gap-2 text-sm items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                  onClick={() => {
                    setOpenUpload(true)
                    setActiveIndex(index)
                    setActiveIcon({ ...activeIcon, [index]: 'upload' })
                  }}
                  style={{
                    backgroundColor: activeIcon[index] === 'upload' ? COLORS.primary_violet : 'white',
                    color: activeIcon[index] === 'upload' ? COLORS.secondary_white : COLORS.primary_violet,
                  }} >
                  <img src={activeIcon[index] === 'upload' ? uploadwhite : uploadviolet} />
                  <span>Upload material</span>
                </button>

                {
                  classes?.attendancd ?
                    <Link
                      to={classes?.attendance ? "#" : "/markattendance"}
                      state={{ classData: { ...item, students: item.students || [] } }}
                      className="flex gap-2 text-sm items-center px-2 py-2 rounded-[10px] border border-[#3B153A] whitespace-nowrap"
                      onClick={() => setActiveIcon({ ...activeIcon, [index]: 'mark' })}
                      style={{
                        backgroundColor: activeIcon[index] === 'mark' ? COLORS.primary_violet : 'white',
                        color: activeIcon[index] === 'mark' ? COLORS.secondary_white : COLORS.primary_violet,
                      }}
                    >
                      <img src={activeIcon[index] === 'mark' ? markwhite : markviolet} />
                      <span>Attendance Marked</span>
                    </Link>
                    :
                    <Link
                      to={classes?.attendance ? "#" : "/markattendance"}
                      state={{ classData: { ...item, students: item.students || [] } }}
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


              </div>
            </div>
          </div>
        )
      })}

      {openUpload && activeIndex !== null && (
        <UploadMaterial
          onClose={() => setOpenUpload(false)}
          uuid={classes[activeIndex].uuid}
          mode={classes[activeIndex].mode}
        />
      )}
    </div>
  )
}

export default Ongoing
