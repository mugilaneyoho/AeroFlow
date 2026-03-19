import { COLORS } from '../../../constant'
import calendarwhite from '../../../assets/classesimg/calendarWhite.png'
import { useLocation } from 'react-router-dom'

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
const students: Student[] = classData?.students || []

const totalStudents = students.length
const presentStudents = students.filter((s) => s.present).length
const absentStudents = totalStudents - presentStudents

const presentPercent =
  totalStudents > 0 ? Math.round((presentStudents / totalStudents) * 100) : 0

const absentPercent =
  totalStudents > 0 ? Math.round((absentStudents / totalStudents) * 100) : 0
  return (
    <div className="p-2 space-y-6">

    <div style={{boxShadow:COLORS.shadow_white}} className='rounded-lg p-4'>
      <div className='flex justify-between'>
         <div>
        <h1 className="text-xl font-semibold">View Attendance</h1>
        <p className="text-sm text-gray-500">
          Record student attendance for your classes
        </p>
      </div>
      <div >
        <button className='flex gap-2 items-center text-white p-2 rounded' style={{background:COLORS.primary_violet}}>
             <img src={calendarwhite} />
             <p>{classData?.start_time ? new Date(classData.start_time).toDateString() : 'No Date'}</p> 
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
            value={classData?.batch_name || ''}
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
       

      
      <div className="rounded-lg p-4 space-y-4 " style={{boxShadow:COLORS.shadow_white}}>

     
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
      <span className="px-2 py-1 rounded" style={{background:COLORS.bg_light_green,color:COLORS.secondary_white}}>
        {presentPercent}% Present
      </span>
      <span className="px-2 py-1 rounded" style={{background:COLORS.bg_red,color:COLORS.secondary_white}}>
        {absentPercent}% Absent
      </span>
      <span className="px-2 py-1 rounded" style={{background:COLORS.primary_violet,color:COLORS.secondary_white}}>
        {totalStudents} Total
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
      

        <div className="">
          {students.map((student, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" defaultChecked className="w-5 h-5 border-2 border-gray-400 rounded-sm appearance-none relative cursor-pointer
                 checked:border-black checked:bg-transparent checked:before:block checked:before:absolute checked:before:-top-2 checked:before:left-2 checked:before:w-6 checked:before:h-6 checked:before:text-black checked:before:content-['✔']"/>

                <div>
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-gray-500">{student.id}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Overall: {student.overall}
                </p>
                <span className="text-xs px-2 py-0  rounded" style={{background:COLORS.bg_light_green,color:COLORS.secondary_white}}>
                  Present
                </span>
              </div>
            </div>
          ))}
        </div>

        
        <button className="w-full py-2 rounded-md text-sm mt-4" style={{background:COLORS.primary_violet,color:COLORS.secondary_white}}>
          Submit Attendance for Jan 22, 2026
        </button>

      </div>
    </div>
  )
}

export default ViewAttendance
