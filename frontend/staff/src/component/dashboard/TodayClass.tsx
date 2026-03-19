import { COLORS, FONTS } from '../../constant'
import starticon from '../../assets/dashboardsimg/StartClassicon.png'
import { useSelector } from "react-redux";
import { selectStaffDashboard } from "../../features/dashboard/reducer/selector";

export interface TodayClassItem {
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
  const staffDashboard:any = useSelector(selectStaffDashboard);
const classes = staffDashboard?.todayClasses || [];
  return (
    <div>
         <div className='w-full p-4 rounded-[10px]' style={{boxShadow:COLORS.shadow_violet}}>
                   <h1 style={{color:COLORS.primary_violet,...FONTS.header}}>TODAY'S CLASSES</h1>
                    
                    <div className='space-y-2 pt-2'>
                        {classes.map((data :TodayClassItem,index :number)=>(
                             <div key={index}>
                                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-3 rounded-[10px] pt-4' style={{boxShadow:COLORS.shadow_white}}>
                                      <div>
                                         <p className='font-semibold pb-1'>{data.topic}</p>
                                         <p className='text-sm pb-1'>{data.batch}</p>
                                         <p className='text-xs pb-1'>{data.students}</p>
                                         <p className='font-medium'>{data.link}</p>
                                      </div>
        
                                      <div className='flex items-start justify-center'>
                                        <span className='px-3 py-1 text-xs rounded-[5px]'
                                        style={{backgroundColor:data.update === "Ongoing" ?COLORS.bg_dark_green:COLORS.bg_blue,color:COLORS.secondary_white}}
                                        >{data.update}</span> </div>
        
                                      <div className="flex flex-col gap-1 items-stretch">
          
                                         <p className="text-sm font-medium px-4 py-1 rounded-[10px] text-white text-center w-full"
                                         style={{
                                             backgroundColor: data.status === "Online"
                                                           ? COLORS.bg_light_green
                                                           : COLORS.bg_red,
                                                           }}
                                                            >
                                                     {data.status}
                                                     </p>
        
          
                                            <p className="text-sm text-center w-full">
                                             {data.time}
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
                        ))}
                    </div>
                </div>
    </div>
  )
}

export default TodayClass