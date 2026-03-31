import { COLORS } from '../../../constant'
import markselect from '../../../assets/classesimg/markcorrecticon.png'
import markwrong from '../../../assets/classesimg/markwrongicon.png'
import { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { GetSelectedClass } from '../../../features/classes/reducer/selector';
import { useLocation} from 'react-router-dom';

// const students = [
//  { 
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

interface Student {
  name: string;
  id: string;
  overall: string;
  present: boolean;
}

const MarkAttendance = () => {

    const selectedClass = useSelector(GetSelectedClass);
    const [studentList, setStudentList] = useState<Student[]>([]);

    const location = useLocation()
    const { classData } = location.state || {};
  
 useEffect(() => {
  if (classData && Array.isArray(classData.students)) {
    setStudentList(
      classData.students.map((s: any) => ({ ...s, present: s.present ?? false }))
    );
  } else {
    setStudentList([]); 
  }
}, [classData]);

useEffect(() => {
  if (Array.isArray(selectedClass?.students)) {
    const studentsWithPresent = selectedClass.students.map((s: any) => ({
      ...s,
      present: s.present ?? false,
    }));
    setStudentList(studentsWithPresent);
  } else {
    setStudentList([]);
  }
}, [selectedClass]);

  const toggleAttendance = (index: number) => {
    const updated = [...studentList];
    updated[index].present = !updated[index].present;
    setStudentList(updated);
  };

  const markAll = (present: boolean) => {
    setStudentList(studentList.map(s => ({ ...s, present })));
  };

  const total = studentList.length;
  const presentCount = studentList.filter(s => s.present).length;
  const absentCount = total - presentCount;



  return (
    <div className="p-2 space-y-6">

    <div style={{boxShadow:COLORS.shadow_white}} className='rounded-lg p-4'>
         <div>
        <h1 className="text-xl font-semibold">Mark Attendance</h1>
        <p className="text-sm text-gray-500">
          Record student attendance for your classes
        </p>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">
            Class name*
          </label>
          <input
            type="text"
            className="border rounded-md px-3 py-2 text-sm"
            placeholder="FSWD-JAN- Batch A1-2026"
             value={classData?.subject || "batch"}
             onChange={(e) => console.log(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Class mode</label>
          <input
            type="text"
            className="border rounded-md px-3 py-2 text-sm"
            value={classData?.mode || "online"}
            readOnly

          />
        </div>
      </div>
        </div>  
       

      
      <div className="rounded-lg p-4 space-y-4 " style={{boxShadow:COLORS.shadow_white}}>

     
        <div className="flex justify-between items-start flex-wrap gap-3">
          <div>
            <p className="font-medium">{classData?.subject || 'Batch Name'}</p>
            <p className="text-sm text-gray-500">{classData?.subject || 'Subject'}</p>
          </div>

          <span className="px-3 py-1 text-xs rounded-full bg-green-500 text-white">
            {classData?.mode || ""}
          </span>

          <div className="flex flex-wrap gap-2">
           <button onClick={()=> markAll(true)}
            className="px-3  py-1 text-sm border rounded-md flex items-center gap-1" style={{color:COLORS.primary_violet}}>
            <img src={markselect} /> Mark All Present
          </button>
          <button onClick={()=> markAll(false)}
          className="px-3 py-1 text-sm border rounded-md flex items-center gap-1" style={{color:COLORS.primary_violet}}>
            <img src={markwrong} /> Mark All Absent
          </button>
        </div>

        </div>

       
       <div className='space-y-2'>
  <div className='flex justify-between'>
    <div>
      <h1>Attendance Summary</h1>
    </div>

    <div className="flex gap-2 text-xs">
      <span className="px-2 py-1 rounded" style={{background:COLORS.bg_light_green,color:COLORS.secondary_white}}>
       {presentCount} Present
      </span>
      <span className="px-2 py-1 rounded" style={{background:COLORS.bg_red,color:COLORS.secondary_white}}>
        {absentCount} Absent
      </span>
      <span className="px-2 py-1 rounded" style={{background:COLORS.primary_violet,color:COLORS.secondary_white}}>
        {total} Total
      </span>
    </div>
    
  </div>

  
  <div className="w-full h-2 rounded" style={{ background: COLORS.bg_gray }}>
    <div
      className="h-2 rounded"
      style={{ width: `${total ? (presentCount / total) * 100 : 0}%`, background: COLORS.gradient_color }}
    />
  
</div>

        </div> 
      

        <div className="">
          {studentList.map((student, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-3"
            >
              <div className="flex items-center gap-3">
                <input type="checkbox" checked={student.present} onChange={() => toggleAttendance(index)} />
                <div>
                  <p className="text-sm font-medium">{student.name}</p>
                  <p className="text-xs text-gray-500">{student.id}</p>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xs text-gray-500">
                  Overall: {student.overall}
                </p>
                <span className="text-xs px-2 py-0  rounded" style={{ background: student.present ? COLORS.bg_light_green : COLORS.bg_red, color: COLORS.secondary_white }}>
                {student.present ? 'Present' : 'Absent'}
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

export default MarkAttendance
