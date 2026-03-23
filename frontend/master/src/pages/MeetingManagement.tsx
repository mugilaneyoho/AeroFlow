import { useEffect, useState } from 'react'
import plus from "../assets/userfaculty/plus.png"
import search from "../assets/userfaculty/search.png"
import Appiontment from '../components/meeting/Appiontment'
import CreateSheduleMeeting from '../components/meeting/CreateSheduleMeeting'
import ViewDetail from '../components/meeting/ViewDetail'
import { useDispatch, useSelector } from 'react-redux'
import { selectMeetings } from '../features/meeting/reducer/selector'
import { createMeetingThunk, getMeetingsThunk } from '../features/meeting/reducer/thunk'
import type { AppDispatch } from '../store/store'
import type { Meeting } from '../types/meetingTypes'


const MeetingManagement = () => {
  const [CreateMeetingModel, setCreateMeetingModel] = useState(false)

  const dispatch = useDispatch<AppDispatch>();
  const meeting = useSelector(selectMeetings);

   useEffect(() => {
     dispatch(getMeetingsThunk());
    }, [dispatch]);

const addmeeting = (data: any) => {
  dispatch(createMeetingThunk(data));
};
  const [viewDetailModal, setViewDetailModal] = useState(false)
  const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null)

const handleViewDetail = (meeting: Meeting) => {
  setSelectedMeeting(meeting)
  setViewDetailModal(true)
}

const mappedMeeting: Meeting[] = meeting.map((m: any) => ({
  id: m.id,
  visitor: m.visitor,
  purposeOfMeeting: m.purposeOfMeeting,
  time: m.requestedTime,    
  date: m.date,
  priority: m.priority,
  status: m.status,
  mobileNumber: m.mobileNumber ?? undefined
}));
  return (
    <div className='overflow-hidden min-h-full flex flex-col gap-5'>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-bold text-xl'>Meeting Management</h1>
          <p>Full control over visitor meetings and appointments</p>
        </div>
        <div className='border rounded-md px-2 flex gap-2 bg-[#54191D]'>
          <div className={`flex items-center justify-center text-center`}>
            <img src={plus} className='w-6 h-6'/>
          </div>
          <button onClick={()=>{setCreateMeetingModel(true)}} className='text-[#EDBF5C] cursor-pointer'>shedule Meeting</button>
        </div>
      </div>

      <div className=' p-2 rounded-xl bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='w-full md:w-[70%] xl:w-[90%] grid md:gap-5 gap-2'>
            <div>
              <h1 className='font-bold'>Search Meeting</h1>
            </div>
            <div className='border border-[#4A5565] rounded-xl flex gap-2 p-2'>
              <img src={search} className='w-4 h-4 mt-1'/>
              <div className=' rounded-md flex gap-1 w-full'>
                <input type="text" name="search" placeholder="Search by name, purpose or date" className="outline-none w-full" />
            </div>
            </div>
          </div>
          <div className='w-full md:w-[30%] xl:w-[20%] grid md:gap-3 gap-1'>
            <div>
              <h1 className='font-bold'>All Status</h1>
            </div>
            <select className='border border-[#4A5565] p-1 rounded-xl '>
              <option value="ALL ROLES">All Status</option>
              <option value="HOD">Ongoing</option>
              <option value="STAFF">Pending</option>
              <option value="TELECALLER">Approved</option>
              <option value="RECEPTIONIST">completed</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <Appiontment meeting={mappedMeeting} onViewDetail={handleViewDetail}/>
      </div>

      <div>
        {CreateMeetingModel &&
        <CreateSheduleMeeting setCreateMeetingModel={setCreateMeetingModel} addmeeting={addmeeting}/>
        }
      </div>

      <div>
        {viewDetailModal && selectedMeeting && (
          <ViewDetail meeting={selectedMeeting} closeModal={() => setViewDetailModal(false)}
          />
        )}
      </div>
    </div>
  )
}

export default MeetingManagement
