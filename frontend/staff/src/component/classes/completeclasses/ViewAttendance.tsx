import { COLORS } from '../../../constant'
import calendarwhite from '../../../assets/classesimg/calendarWhite.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from '../../../store/store'
import { getAttendanceViewThunks } from '../../../features/attendance/reducer/thunk'

// const students = [
//   { 
//     name: 'Alice Williams', 
//     id: 'STU001',
//     overall: '85%',
//     present: false 
// },
//   { 
//     name: 'Ragul', 
//     id: 'STU002', 
//     overall: '95%', 
//     present: false 
// },
//   { 
//     name: 'Sammuel', 
//     id: 'STU003', 
//     overall: '80%', 
//     present: false 
// },
//   { 
//     name: 'Geetha', 
//     id: 'STU004', 
//     overall: '82%', 
//     present: false 
// },
//   { 
//     name: 'Alex', 
//     id: 'STU005', 
//     overall: '83%', 
//     present: false 
// },
// ]

type Student = {
  name: string
  id: string
  overall: string
  present: boolean
}

const ViewAttendance = () => {


  const location = useLocation()
  const classData = location.state?.classData
  const dispatch = useDispatch<AppDispatch>()
  const attendance = useSelector((state: RootState) => state.attendance.view)
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAttendanceViewThunks(classData?.uuid))
  }, [classData?.uuid, dispatch]);

  const presentPercent =
    classData?.total_student > 0 ? Math.round((attendance?.present_student / classData?.total_student) * 100) : 0

  return (
    <div className="p-2 space-y-6">

      <div style={{ boxShadow: COLORS.shadow_white }} className='rounded-lg p-4'>
        <div className='flex justify-between'>
          <div>
            <h1 className="text-xl font-semibold">View Attendance</h1>
            <p className="text-sm text-gray-500">
              Record student attendance for your classes
            </p>
          </div>
          <div >
            <button className='flex gap-2 items-center text-white p-2 rounded' style={{ background: COLORS.primary_violet }}>
              <img src={calendarwhite} />
              <p>{classData?.start_time ? new Date(classData.start_time).toLocaleDateString('IND') : 'No Date'}</p>
            </button>
          </div>
        </div>



        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">
              Class name*
            </label>
            <input
              type="text"
              className="border rounded-md px-3 py-2 text-sm"
              placeholder="FSWD-JAN- Batch A1-2026"
              value={classData?.subject || ''}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Class mode</label>
            <input
              type="text"
              className="border rounded-md px-3 py-2 text-sm"
              value={classData?.class_mode || ''}
              readOnly
            />
          </div>
        </div>
      </div>



      <div className="rounded-lg p-4 space-y-4 " style={{ boxShadow: COLORS.shadow_white }}>


        <div className="flex justify-between items-start flex-wrap gap-3">
          <div>
            <p className="font-medium">{classData?.batch_name}</p>
            <p className="text-sm text-gray-500">{classData?.subject}</p>
          </div>

          <span className="px-3 py-1 text-xs rounded-full bg-green-500 text-white">
            {classData?.class_mode || ''}
          </span>

        </div>


        <div className='space-y-2'>
          <div className='flex justify-between'>
            <div>
              <h1>Attendance Summary</h1>
            </div>

            <div className="flex gap-2 text-xs">
              <span className="px-2 py-1 rounded" style={{ background: COLORS.bg_light_green, color: COLORS.secondary_white }}>
                {attendance?.present_count} Present
              </span>
              <span className="px-2 py-1 rounded" style={{ background: COLORS.bg_red, color: COLORS.secondary_white }}>
                {attendance?.absent_count} Absent
              </span>
              <span className="px-2 py-1 rounded" style={{ background: COLORS.primary_violet, color: COLORS.secondary_white }}>
                {classData?.total_student} Total
              </span>
            </div>

          </div>


          <div className="w-full h-2 rounded" style={{ background: COLORS.bg_gray }}>
            <div
              className="h-2 rounded"
              style={{
                width: `${presentPercent}%`,
                background: COLORS.gradient_color,
              }}
            />
          </div>
        </div>


        <div className="grid grid-cols-3 gap-4">
          {attendance?.records?.map((student: any, index: number) => (
            <div
              key={index}
              className="flex justify-between items-center py-3"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={student?.status === 'PRESENT' ? true : false} className="w-5 h-5 border-2 border-gray-400 rounded-sm appearance-none relative cursor-pointer
                 checked:border-black checked:bg-transparent checked:before:block checked:before:absolute checked:before:-top-2 checked:before:left-2 checked:before:w-6 checked:before:h-6 checked:before:text-black checked:before:content-['✔']"/>

                <div>
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-gray-500">{student.roleno}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Overall: {student.overall}
                </p>
                <span className="text-xs px-2 py-0  rounded" style={{ background: student?.status === 'PRESENT' ? COLORS.bg_light_green : COLORS.bg_dark_green, color: COLORS.secondary_white }}>
                  {student?.status === 'PRESENT' ? 'Present' : 'Absent'}
                </span>
              </div>
            </div>
          ))}
        </div>


        <button onClick={()=>navigate(-1)} className="w-full py-2 rounded-md text-sm mt-4 cursor-pointer" style={{ background: COLORS.primary_violet, color: COLORS.secondary_white }}>
          Back
        </button>

      </div>
    </div>
  )
}

export default ViewAttendance
