import { Plus } from 'lucide-react'
import StudentSearch from '../components/common/StudentSearch'
import StudentInfo from '../components/studentManagement/StudentInfo'

import { useEffect, useState } from 'react'
import StudentStats from '../components/studentManagement/StudentsStats';
import { useDispatch, useSelector } from 'react-redux';
import { selectStudents } from '../features/student/reducer/selector';
import type { StudentType } from '../types/studentTypes';
import type { AppDispatch } from '../store/store';
import { getStudentsThunk } from '../features/student/reducer/thunk';


const StudentManagement = () => {
  
  const [filteredStudents, setFilteredStudents] = useState<StudentType[]>([]); 

  const students = useSelector(selectStudents)as StudentType[];

  const dispatch =useDispatch<AppDispatch>()

 useEffect(() => {
         dispatch(getStudentsThunk())
    }, [dispatch]);

    
useEffect(() => {
  setFilteredStudents(students);
}, [students]);
  return (
    <div>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-bold text-black text-xl'>Student management</h1>
          <h4 className='font-normal text-[#605E5E]'>View and manage student records</h4>
        </div>
        <button className='flex items-center gap-3 bg-[#54191D] text-[#EDBF5C] rounded-2xl px-4 cursor-pointer'>
          <Plus className='w-6 h-6' />
          <h2 className='text-md'> Schedule class </h2>
        </button>
      </div>
      <StudentStats />
      <StudentSearch setFiltered={setFilteredStudents}/>
      <StudentInfo students={filteredStudents} />
    </div>
  )
}

export default StudentManagement
