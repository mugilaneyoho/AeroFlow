import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store/store';
import { GetAttendaceThunks } from '../feature/attendance/redux/thunks';

  // const attendanceData: any = {
  //   "2026-03-31": { status: 'present' },
  //   "2026-03-20": { status: 'present' },
  //   "2026-03-22": { status: 'absent' },
  //   "2026-03-21": { status: 'late', time: '8:15 AM' },
  // };

const AttendanceDashboard:React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const dispatch = useDispatch<AppDispatch>()

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  useEffect(() => {
    dispatch(GetAttendaceThunks(currentDate.toDateString()))
    console.log(currentDate)
  }, [currentDate, dispatch]);

  const attendanceData: any = useSelector((state:RootState)=>state.attendace.data)

  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    const calendar = [];
    let week = [];

    const startDay: number = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < startDay; i++) {
      week.push(0);
    }

    for (let day = 1; day <= totalDays; day++) {
      week.push(day);

      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    while (week.length < 7) {
      week.push(0);
    }

    calendar.push(week);

    return calendar;
  };

  const calendarRows = generateCalendar(currentDate);

  const getDayStatus = (day:number) => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;

    const key: string = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    return attendanceData?.[key] || null;
  };

  const isWeekend = (day:number) => {
    const d = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    const dayOfWeek = d.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6;
  };

  const getStatusIcon = (status:string) => {
    if (status === 'PRESENT') return "✔️";
    if (status === 'ABSENT') return "❌";
    if (status === 'LATE') return "⏰";
    if (status === 'notfound') return "🗓️"
    return "";
  };

  const getStatusText = (status:string, time:string) => {
    if (status === 'PRESENT') return 'PRESENT';
    if (status === 'ABSENT') return 'ABSENT';
    if (status === 'LATE') return `LATE (${time})`;
    return '';
  };

  const getStatusColor = (status :string) => {
    if (status === 'PRESENT') return 'text-emerald-600';
    if (status === 'ABSENT') return 'text-red-600';
    if (status === 'LATE') return 'text-blue-600';
    if (status === 'notfound') return 'text-cyan-600';
    return '';
  };

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div className="p-10 w-full mx-auto">

      {/* <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-blue-600 font-bold tracking-widest text-xs uppercase mb-2 block">Student Attendance Record</span>
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-2">Julianne Sterling</h2>
            <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
              Undergraduate ID: <span className="font-bold text-gray-900">AE-2024-9912</span> • Faculty of Humanities
            </p>
          </div>
          <div className="flex gap-4">
            <button className="bg-gray-100 text-gray-700 px-6 py-2.5 rounded-xl font-bold text-sm hover:opacity-90 transition-all flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">download</span>
              Export Report
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-10">
          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-600">
            <p className="text-sm font-medium text-gray-600 mb-1">Attendance Rate</p>
            <p className="text-3xl font-black text-gray-900">94.2%</p>
            <div className="w-full bg-gray-200 h-1.5 rounded-full mt-4">
              <div className="bg-blue-600 h-1.5 rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-emerald-600">
            <p className="text-sm font-medium text-gray-600 mb-1">Days Present</p>
            <p className="text-3xl font-black text-gray-900">18 / 20</p>
            <p className="text-xs text-emerald-600 font-bold mt-3">+2 from last month</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-blue-400">
            <p className="text-sm font-medium text-gray-600 mb-1">Late Arrivals</p>
            <p className="text-3xl font-black text-gray-900">1</p>
            <p className="text-xs text-gray-600 font-medium mt-3">October 14th</p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-red-600">
            <p className="text-sm font-medium text-gray-600 mb-1">Absences</p>
            <p className="text-3xl font-black text-gray-900">1</p>
            <p className="text-xs text-red-600 font-bold mt-3">Unexcused</p>
          </div>
        </div>
      </div> */}

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-bold">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>

        <div className="flex gap-2">
          <button onClick={handlePrevMonth} className="px-3 py-1 bg-gray-200 rounded">◀</button>
          <button onClick={handleNextMonth} className="px-3 py-1 bg-gray-200 rounded">▶</button>
        </div>
      </div>

      <div className="flex gap-6 mb-6 text-sm">
        <span className="text-emerald-600 font-bold">✔ Present</span>
        <span className="text-red-600 font-bold">❌ Absent</span>
        <span className="text-blue-600 font-bold">⏰ Late</span>
        <span className="text-cyan-600 font-bold">🗓️ No Classes</span>
      </div>

      <div className="grid grid-cols-7 gap-3">
        {weekDays.map(day => (
          <div key={day} className="text-center font-bold text-gray-500 text-sm">
            {day}
          </div>
        ))}

        {calendarRows.map((row, i) =>
          row.map((day, j) => {
            if (day === 0) {
              return <div key={`${i}-${j}`} />;
            }

            const statusData = getDayStatus(day);
            const weekend = isWeekend(day);

            return (
              <div
                key={day}
                className={`p-3 h-24 rounded-xl flex flex-col justify-between border 
                  ${weekend ? 'bg-gray-100' : 'bg-white'}
                  ${statusData?.status === 'ABSENT' ? 'border-red-300' : ''}
                  ${statusData?.status === 'LATE' ? 'border-blue-300' : ''}
                `}
              >
                <span className="font-bold text-sm">{day}</span>

                {statusData ? (
                  <div className="text-xs">
                    <div>{getStatusIcon(statusData.status)}</div>
                    <div className={`${getStatusColor(statusData.status)} font-bold`}>
                      {getStatusText(statusData.status, statusData.time)}
                    </div>
                  </div>)
                  :
                  (<div className="text-xs">
                    <div>{getStatusIcon('notfound')}</div>
                    <div className={`${getStatusColor('notfound')} font-bold`}>
                      No Classes
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default AttendanceDashboard;