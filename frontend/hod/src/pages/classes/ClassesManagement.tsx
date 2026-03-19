/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { COLORS, FONTS } from '../../constant';
import searchicon from '../../assets/icons/searchicon.png';
import OngoingClass from '../../components/classes/OngoingClass';
import CompletedClass from '../../components/classes/CompletedClass';
import plusicon from '../../assets/Dashboard/plus.png';
import closeicon from "../../assets/course/closeedit.png";
import { useDispatch, useSelector } from 'react-redux';
import { GetAllClasses } from '../../features/classess/reduce/selector';
import { CreateClassThunk, DeleteClassThunk, GetAllClassesThunk } from '../../features/classess/reduce/thunk';
import { BatchDropdown, CourseDropdowm } from '../../features/batchpage/services';
import { StaffDropdown } from '../../features/staff/service';

interface ClassType {
    id: number;
    uuid: string;
    batch_id: string;
    staff_id: string;
    subject: string;
    batch_name?: string;
    start_date: string;
    start_time?: string;
    end_time?: string;
    class_mode?: string;
    status: "ONGOING" | "COMPLETED";
}

const ClassesManagement = () => {
    const dispatch = useDispatch<any>();
    const classes = useSelector(GetAllClasses ?? []);

    const [activeTab, setActiveTab] = useState<'ongoing' | 'completed'>('ongoing');
    const [openCreate, setOpenCreate] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [subject, setSubject] = useState('');
    const [startDate, setStartDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    // const [mode, setMode] = useState('OFFLINE');
    const [selectedStaff, setSelectedStaff] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 8;
    const [courses, setcourses] = useState([]);
    const [batch, setbatch] = useState([]);
    const [selectCourse, setselectCourse] = useState("");
    const [staff, setstaff] = useState([]);
    const [selectBatch, setselectBatch] = useState("");



    useEffect(() => {
        dispatch(GetAllClassesThunk("all"));
        (
            async () => {
                setcourses(await CourseDropdowm());
                setstaff(await StaffDropdown())
            }
        )()
    }, [dispatch]);

    useEffect(()=>{
        (
            async()=>selectCourse !== "" &&  setbatch(await BatchDropdown(selectCourse))
        )()
    },[selectCourse])

    useEffect(() => {
        setCurrentPage(1);
    }, [activeTab, searchTerm, classes]);


    const isOngoing = (cls: ClassType) => {
        if (!cls?.start_time || !cls?.end_time) return true;

        const now = Date.now();
        const start = new Date(cls.start_time).getTime();
        const end = new Date(cls.end_time).getTime();

        if (now < start) return true;
        if (now >= start && now <= end) return true;
        return false;
    };


    const ongoingClasses = classes.filter((cls: ClassType) => isOngoing(cls));
    const completedClasses = classes.filter((cls: ClassType) => !isOngoing(cls));

    const filteredOngoing = ongoingClasses.filter((cls: ClassType) =>
        cls?.subject?.toLowerCase().includes(searchTerm?.toLowerCase()) ||
        cls?.batch_name?.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    const filteredCompleted = completedClasses.filter((cls: ClassType) =>
        cls.subject?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cls.batch_name?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const displayedClasses = activeTab === 'ongoing' ? filteredOngoing : filteredCompleted;

    const totalPages = Math.ceil(
        (activeTab === 'ongoing' ? filteredOngoing.length : filteredCompleted.length) / cardsPerPage
    ) || 1;

    const handleDelete = async (cls: ClassType) => {
        const mode = (cls.class_mode || "OFFLINE").toUpperCase();
        try {
            const response = await dispatch(DeleteClassThunk(cls.uuid, mode));
            if (response.success) {
                await dispatch(GetAllClassesThunk(activeTab));
            }
        } catch (error) {
            console.error("Failed to delete class:", error);
        }
    };

    const handleChange = (e: any) => {
        setselectCourse(e.target.value);
    };

    const handleCreateClass = async () => {

        if (!subject || !startDate || !startTime || !endTime) {
            return;
        }
        const payload = {
            batch_id: selectBatch,
            staff_id: selectedStaff,
            subject,
            start_date: startDate,
            start_time: new Date(`${startDate}T${startTime}`).toISOString(),
            end_time: new Date(`${startDate}T${endTime}`).toISOString(),
            // mode: mode.toUpperCase(),
        };

        dispatch(CreateClassThunk(payload));
        setOpenCreate(false);
        await dispatch(GetAllClassesThunk(activeTab));

    };
    return (
        <div>

            <div className='flex flex-col sm:flex-row md:flex-row justify-between items-start sm:items-center gap-2 mb-4'>
                <div>
                    <h1 style={{ ...FONTS.tittle, color: COLORS.primary_blue }}>
                        Class Management
                    </h1>
                    <p style={{ color: COLORS.primary_blue }}>
                        Create class and allocate students
                    </p>
                </div>
                <button
                    className='flex gap-1 items-center px-2 py-1 rounded-[5px]'
                    onClick={() => setOpenCreate(true)}
                    style={{ backgroundColor: COLORS.primary_blue, color: COLORS.secondary_white }}
                >
                    <img src={plusicon} alt='plus' className='w-5 h-5' />
                    Schedule class
                </button>
            </div>


            <div className='shadow-[0px_0px_14px_0px_#2D216140] p-2 mt-4 flex gap-2 rounded'>
                <button
                    className='p-2 rounded w-full'
                    style={{
                        backgroundColor: activeTab === 'ongoing' ? COLORS.primary_blue : COLORS.secondary_white,
                        color: activeTab === 'ongoing' ? COLORS.secondary_white : COLORS.primary_blue,
                    }}
                    onClick={() => setActiveTab('ongoing')}
                >
                    Ongoing & Upcoming Class
                </button>
                <button
                    className='p-2 rounded w-full'
                    style={{
                        backgroundColor: activeTab === 'completed' ? COLORS.primary_blue : COLORS.secondary_white,
                        color: activeTab === 'completed' ? COLORS.secondary_white : COLORS.primary_blue,
                    }}
                    onClick={() => setActiveTab('completed')}
                >
                    Completed Class
                </button>
            </div>


            <div className="mt-4 flex gap-2 items-center w-[80%] border border-[#BEBDBD] rounded-[10px] px-3 py-2 bg-white shadow-sm">
                <img src={searchicon} alt="search" className="w-5 h-5" />
                <input
                    type="text"
                    placeholder="Search by topic or batch..."
                    className="w-full outline-none text-sm"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>


            <div className="mt-4">
                {activeTab === 'ongoing' && <OngoingClass classes={displayedClasses} handleDelete={handleDelete} />}
                {activeTab === 'completed' && <CompletedClass classes={displayedClasses} />}
            </div>


            <div className="w-full p-4 flex justify-end gap-2">
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Prev
                </button>
                <span className="px-2">{currentPage} / {totalPages}</span>
                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>


            {openCreate && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white w-[60%] h-max rounded-lg shadow-lg p-6 relative overflow-y-auto">
                        <div className="flex justify-between items-center pb-3">
                            <div>
                                <h2 className="text-xl font-semibold">Schedule New Class</h2>
                                <p>System will check for conflicts automatically</p>
                            </div>
                            <button onClick={() => setOpenCreate(false)}>
                                <img src={closeicon} alt="close" className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="p-2 mt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">Select Course</label>
                                    <select name="course_id"
                                        onChange={handleChange}
                                        className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" >
                                        <option value="">Select course</option>
                                        {
                                            courses?.map((item: any) => (
                                                <option key={item?.uuid} value={item?.uuid}>{item?.course_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">Select Batch</label>
                                    <select name="course_id"
                                         onChange={(e)=>setselectBatch(e.target.value)}
                                        className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" >
                                        <option value="">Select Batch</option>
                                        {
                                            batch?.map((item: any) => (
                                                <option key={item?.uuid} value={item?.uuid}>{item?.batchName}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">Subject*</label>
                                    <input value={subject} onChange={(e) => setSubject(e.target.value)}
                                        className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" placeholder="eg.nodejs" />
                                </div>
                               <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">Select Staff</label>
                                    <select name="course_id"
                                         onChange={(e)=>setSelectedStaff(e.target.value)}
                                        className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]" >
                                        <option value="">Select Staff</option>
                                        {
                                            staff?.map((item: any) => (
                                                <option key={item?.uuid} value={item?.uuid}>{item?.staff_name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">Start Date*</label>
                                    <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full border border-[#B4B3B3] rounded-[5px] p-2 text-[#6E6E6E]" />
                                </div>
                                {/* <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">End Date*</label>
                                    <input type="date"
                                     className="w-full border border-[#B4B3B3] rounded-[5px] p-2 text-[#6E6E6E]" />
                                </div> */}
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">Start Time*</label>
                                    <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)}
                                        className="w-full border border-[#B4B3B3] rounded-[5px] p-2 text-[#6E6E6E]" />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">End Time*</label>
                                    <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} className="w-full border border-[#B4B3B3] rounded-[5px] p-2 text-[#6E6E6E]" />
                                </div>
                                {/* <div className="flex flex-col gap-1">
                                    <label className="text-sm text-black">Mode*</label>
                                    <select value={mode} onChange={(e) => setMode(e.target.value)}
                                        className="input border border-[#B4B3B3] rounded-[5px] p-1 text-[#6E6E6E]">
                                        <option value="offline">offline</option>
                                        <option value="online">online</option>
                                    </select>
                                </div> */}
                            </div>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">
                            <button className="px-4 py-2 text-white rounded" onClick={handleCreateClass} style={{ background: COLORS.bg_light_green }}>Schedule</button>
                            <button onClick={() => setOpenCreate(false)} className="px-4 py-2 text-white rounded" style={{ background: COLORS.bg_red }}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ClassesManagement;
