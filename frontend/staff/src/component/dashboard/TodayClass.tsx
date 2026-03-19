import { COLORS, FONTS } from '../../constant'
import starticon from '../../assets/dashboardsimg/StartClassicon.png'
import { useSelector } from "react-redux";
import { selectStaffDashboard } from "../../features/dashboard/reducer/selector";
import { formatTime } from '../../utils/helpers';

export interface TodayClassItem {
  end_time: string | number | Date;
  start_time: string | number | Date;
  class_mode: string;
  batch_name: ReactNode;
  subject: ReactNode;
  location: ReactNode;
  total_student: ReactNode;
  topic: string;
  batch: string;
  students: string;
  link: string;
  update: string;
  status: string;
  time: string;
}

export interface StaffDashboard {
  totalStudents: number;
  totalCourses: number;
  todayClasses?: TodayClassItem[];
}
const TodayClass = () => {
  const staffDashboard: any = useSelector(selectStaffDashboard);
  const classes = staffDashboard?.todayclasses || [];
  const nowDate = new Date()

  return (
    <div className='w-full h-full p-4 rounded-[10px]' style={{ boxShadow: COLORS.shadow_violet }}>
      <h1 style={{ color: COLORS.primary_violet, ...FONTS.header }}>TODAY'S CLASSES</h1>

      <div className='space-y-2 pt-2'>
        {classes.map((data: TodayClassItem, index: number) => {
          const isOngoing = (new Date(data?.start_time) < nowDate && new Date(data?.end_time) > nowDate) ? true : false

          return (
            <div key={index}>
              <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-3 rounded-[10px] pt-4' style={{ boxShadow: COLORS.shadow_white }}>
                <div>
                  <p className='font-semibold pb-1'>{data.subject}</p>
                  <p className='text-sm pb-1'>{data.batch_name}</p>
                  <p className='text-xs pb-1'>{data.total_student}</p>
                  <p className='font-medium'>{data.location}</p>
                </div>

                <div className='flex items-start justify-center'>
                  <span className='px-3 py-1 text-xs rounded-[5px]'
                    style={{ backgroundColor: isOngoing ? COLORS.bg_dark_green : COLORS.bg_blue, color: COLORS.secondary_white }}
                  >{isOngoing ? 'Ongoing' : 'Upcoming'}</span> </div>

                <div className="flex flex-col gap-1 items-stretch">

                  <p className="text-sm font-medium px-4 py-1 rounded-[10px] text-white text-center w-full"
                    style={{
                      backgroundColor: data.class_mode === "online"
                        ? COLORS.bg_light_green
                        : COLORS.bg_red,
                    }}
                  >
                    {data.class_mode}
                  </p>


                  <p className="text-sm text-center w-full">
                    {formatTime(data.start_time as string)} - {formatTime(data.end_time as string)}
                  </p>


                  <button className="flex gap-2 p-2 rounded-[10px] w-full items-center justify-center"
                    style={{ backgroundColor: COLORS.primary_violet }}>
                    <img src={starticon} alt="starticon" />
                    <span className="text-sm font-medium text-white">
                      Start Class
                    </span>
                  </button>

                </div>

              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default TodayClass