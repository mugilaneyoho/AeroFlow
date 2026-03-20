import { Plus } from 'lucide-react'
import StudentSearch from '../components/common/StudentSearch'
import StudentInfo from '../components/studentManagement/StudentInfo'
import StudentStats from '../components/studentManagement/StudentsStats'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../store/store'
import { getStudentsThunk } from '../features/student/reducer/thunk'

const StudentManagement = () => {
   const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(getStudentsThunk());
    }, [dispatch]);
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
      <StudentSearch />
      <StudentInfo />
    </div>
  )
}

export default StudentManagement
