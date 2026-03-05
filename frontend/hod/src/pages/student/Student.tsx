import React, { useEffect, useState } from 'react'
import { COLORS, FONTS } from '../../constant'
import NewAdmission from '../../components/student/NewAdmission'
import ExistingStudent from '../../components/student/ExistingStudent'
import searchicon from '../../assets/icons/searchicon.png'
import { useDispatch, useSelector } from 'react-redux'
import { SelectAllStudent } from '../../features/studentpage/reducer/selector'
import { GetAllStudentThunk } from '../../features/studentpage/reducer/thunk'
import type { AppDispatch } from '../../store/store'


const Student:React.FC = () => {
  const [activeTab , setActiveTab] = useState<'new' | 'existing'>('new')
  const [searchText, setSearchText] = useState('')

  const dispatch=useDispatch<AppDispatch>()
  const students=useSelector(SelectAllStudent)
  useEffect(() => {
    dispatch(GetAllStudentThunk());
  }, [dispatch]);

  const filteredStudents = students.filter(
    (s: any) =>
      s.student_name.toLowerCase().includes(searchText.toLowerCase()) ||
      s.student_id.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <div>
        <div className='flex  justify-between item-center'>
         
          <div>
            <h1 style={{ ...FONTS.tittle, color: COLORS.primary_blue }}>
                Student Management
            </h1>
            <p style={{ color: COLORS.primary_blue }}>
                Manage teaching staff and their profiles
            </p>
            </div>
           <div>
              <button

  className="p-2 rounded w-full"
  style={{
    backgroundColor:COLORS.primary_blue,
    color: COLORS.secondary_white,
  }}
  onClick={() => setActiveTab('new')}
>
  New Admission
</button>
            
          
          </div>
           </div>  
        <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 mt-4 flex gap-2 rounded'>
          <button
  className="p-2 rounded w-full"
  style={{
    backgroundColor: activeTab === 'new' ? COLORS.primary_blue : COLORS.secondary_white,
    color: activeTab === 'new' ? COLORS.secondary_white : COLORS.primary_blue,
  }}
  onClick={() => setActiveTab('new')}
>
  New Admission
</button>
          <button
  className="p-2 rounded w-full"
  style={{
    backgroundColor: activeTab === 'existing' ? COLORS.primary_blue : COLORS.secondary_white,
    color: activeTab === 'existing' ? COLORS.secondary_white : COLORS.primary_blue,
  }}
  onClick={() => setActiveTab('existing')}
>
  Existing Student
</button>
          </div>  

           <div className=" mt-4 flex gap-1 items-center w-full sm:w-3xl border border-[#BEBDBD] rounded-[10px] px-3 py-2 bg-white shadow-sm">
         <img src={searchicon} alt="search" className="w-5 h-5 ml-2" />
          <input
            type="text"
            placeholder="Search Student by name or id"
            className="w-full outline-none text-sm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          
        </div>

          <div className="mt-4">
        {activeTab === 'new' && <NewAdmission students={filteredStudents}/>}
        {activeTab === 'existing' && <ExistingStudent  students={filteredStudents}/>}
      </div>



    </div>
  )
}

export default Student