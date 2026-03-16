import { COLORS } from '../../constant'
import markselect from '../../assets/classesimg/markcorrecticon.png'
import markwrong from '../../assets/classesimg/markwrongicon.png'
import { useDispatch, useSelector } from 'react-redux'
import { createAttendanceThunk, getAttendanceByClassIdThunk } from '../../features/attendance/reducer/thunk'
import type { AppDispatch } from '../../store/store'
import { useEffect, useState } from 'react'
import { selectAttendanceData } from '../../features/attendance/reducer/selector'
import calendar from '../../assets/classesimg/calendarWhite.png'




const Attendance = () => {
   const dispatch = useDispatch<AppDispatch>();
  const [studentList, setStudentList] = useState<any[]>([]);
 const attendanceData = useSelector(selectAttendanceData);
 const classId = "127e4145-b1c5-4758-9aed-b930243cde5a";
   
 
 useEffect(() => {
    dispatch(getAttendanceByClassIdThunk(classId));
  }, [classId, dispatch]);

   useEffect(() => {
  if (attendanceData?.data) {
    const mappedStudents = attendanceData.data.map((r: any) => ({
       id: r.id,          
  uuid: r.uuid,      
  name: `Student ${r.id}`,
  overall: "0%",
  present: r.present_count > 0
    }));

    setStudentList(mappedStudents);
  }
}, [attendanceData]);

   const handleSubmit = () => {
    const payload = {
      classId: "127e4145-b1c5-4758-9aed-b930243cde5a",
      staffId: "a6b0bdf4-8b73-40cb-a608-0ad05461ca67",
      date: "2026-02-26 10:30:00",
      records: studentList.map(s => ({
        studentId: s.uuid,
        status: s.present ? "PRESENT" : "ABSENT"
      }))
    };

    dispatch(createAttendanceThunk(payload));
  };

  const handleCheckboxChange = (id: number) => {
  setStudentList(prev =>
    prev.map(student =>
      student.id === id ? { ...student, present: !student.present } : student
    )
  );
};

const presentCount = studentList.filter(s => s.present).length;
const totalCount = studentList.length;
const absentCount = totalCount - presentCount;

  return (
    <div className="space-y-4">

    <div className='flex justify-between flex-col sm:flex-row items-start sm:items-center gap-4'>
         <div>
        <h1 className="text-xl sm:text-lg font-semibold ">Mark Attendance</h1>
        <p className="text-sm text-gray-500">
          Record student attendance for your classes
        </p>
        </div>
        <div className='rounded py-2 px-1' style={{background:COLORS.primary_violet}}>
         <button className='flex items-center justify-center gap-2 py-1 rounded text-white'> 
          <img src={calendar} alt="calendar" className='w-6 h-6 ' />
           <span>January 22nd, 2026</span>
          </button>
        </div>
      </div>

      <div >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">
            Class name*
          </label>
          <input
            type="text"
            className="border rounded-md px-3 py-2 text-sm"
            placeholder="FSWD-JAN- Batch A1-2026"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Class mode</label>
          <input
            type="text"
            className="border rounded-md px-3 py-2 text-sm"
            value="online"
            readOnly
          />
        </div>
      </div>
        </div>  
       

      
      <div className="rounded-lg p-4 space-y-4 " style={{boxShadow:COLORS.shadow_white}}>

     
        <div className="flex justify-between items-start flex-wrap gap-3">
          <div>
            <p className="font-medium">FSWD-JAN- Batch A1-2026</p>
            <p className="text-sm text-gray-500">React & Frontend</p>
          </div>

          <span className="px-3 py-1 text-xs rounded-full bg-green-500 text-white">
            Online
          </span>

          <div className="flex flex-wrap gap-2">
           <button className="px-3  py-1 text-sm border rounded-md flex items-center gap-1" style={{color:COLORS.primary_violet}}>
            <img src={markselect} /> Mark All Present
          </button>
          <button className="px-3 py-1 text-sm border rounded-md flex items-center gap-1" style={{color:COLORS.primary_violet}}>
            <img src={markwrong} /> Mark All Absent
          </button>
        </div>

        </div>

       
       <div className='space-y-2'>
  <div className='flex justify-between flex-col sm:flex-row items-start sm:items-center gap-4'>
    <div>
      <h1>Attendance Summary</h1>
    </div>

    <div className="flex flex-col sm:flex-row gap-2 text-xs">
      <span className="px-2 py-1 rounded" style={{background:COLORS.bg_light_green,color:COLORS.secondary_white}}>
        {presentCount} Present
      </span>
      <span className="px-2 py-1 rounded" style={{background:COLORS.bg_red,color:COLORS.secondary_white}}>
       {absentCount} Absent
      </span>
      <span className="px-2 py-1 rounded" style={{background:COLORS.primary_violet,color:COLORS.secondary_white}}>
        {totalCount} Total
      </span>
    </div>
    
  </div>

  
  <div className="w-full h-2 rounded" style={{ background: COLORS.bg_gray }}>
    <div
      className="h-2 rounded"
      style={{
       width: `${totalCount ? (presentCount / totalCount) * 100 : 0}%`,
        background: COLORS.gradient_color,
      }}
    />
  
</div>

        </div> 
      

        <div className="">
          {studentList.map((student) => (
            <div
              key={student.id}
              className="flex justify-between items-center py-3"
            >
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={student.present}
                  onChange={() => handleCheckboxChange(student.id)}
                />
                <div>
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-gray-500">{student.id}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Overall: {student.overall}
                </p>
               <span className="text-xs px-2 py-0 rounded"
               style={{
                      background: student.present ? COLORS.bg_light_green : COLORS.bg_red,
                      color: COLORS.secondary_white
                }}>
                    {student.present ? "Present" : "Absent"}
                 </span>
              </div>
            </div>
          ))}
        </div>

        
        <button onClick={handleSubmit}
        className="w-full py-2 rounded-md text-sm mt-4" style={{background:COLORS.primary_violet,color:COLORS.secondary_white}}>
          Submit Attendance for Jan 22, 2026
        </button>

      </div>
    </div>
  )
}

export default Attendance
