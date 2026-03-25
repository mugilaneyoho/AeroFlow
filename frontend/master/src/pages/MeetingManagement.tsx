import { useEffect, useState } from 'react'
import plus from "../assets/userfaculty/plus.png"
import search from "../assets/userfaculty/search.png"
import Appiontment from '../components/meeting/Appiontment'
import CreateSheduleMeeting from '../components/meeting/CreateSheduleMeeting'
import ViewDetail from '../components/meeting/ViewDetail'
import { useDispatch, useSelector } from 'react-redux'
import { selectMeetings } from '../features/meeting/reducer/selector'
import { getMeetingsThunk } from '../features/meeting/reducer/thunk'
import type { AppDispatch } from '../store/store'
import type { Meeting } from '../types/meetingTypes'


const MeetingManagement = () => {

            const [CreateMeetingModel, setCreateMeetingModel] = useState(false)
            const [searchTerm , setSearchTerm] = useState("")
            const [statusFilter, setStatusFilter] =useState("")
            const [viewDetailModal, setViewDetailModal] = useState(false)
            const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null)

            const dispatch = useDispatch<AppDispatch>();
                    const meeting = useSelector(selectMeetings);

                      useEffect(() => {
                        dispatch(getMeetingsThunk());
                    }, [dispatch]);

                    const handleViewDetail = (meeting: Meeting) => {
                        setSelectedMeeting(meeting)
                        setViewDetailModal(true)
                    }
                    console.log("meeting from redux:", meeting);
                
        const mappedMeeting: Meeting[] = (meeting || []).map((m: any) => ({
              id: m.id,
              visitor: m.visitor,
              purposeOfMeeting: m.purposeOfMeeting,
              requestedTime: m.requestedTime,    
              date: m.date,
              priority: m.priority,
              status: m.status,
              mobileNumber: m.mobileNumber,
              meetingId: null
          }));

const filteredMeetings = mappedMeeting.filter((m) => {
        const matchesSearch = 
           m.visitor.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.purposeOfMeeting.toLowerCase().includes(searchTerm.toLowerCase()) ||
           m.date.includes(searchTerm); 

  const matchesStatus = statusFilter ? m.status === statusFilter : true;

  return matchesSearch && matchesStatus;
});
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
                <input type="text" placeholder="Search by name, purpose or date" value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="outline-none w-full"/>
            </div>
            </div>
          </div>
          <div className='w-full md:w-[30%] xl:w-[20%] grid md:gap-3 gap-1'>
            <div>
              <h1 className='font-bold'>All Status</h1>
            </div>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}
                   className='border border-[#4A5565] p-1 rounded-xl '>
              <option value="">All Status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="completed">completed</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <Appiontment meeting={filteredMeetings} onViewDetail={handleViewDetail}/>
      </div>

      <div>
        {CreateMeetingModel &&
        <CreateSheduleMeeting setCreateMeetingModel={setCreateMeetingModel} />
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
