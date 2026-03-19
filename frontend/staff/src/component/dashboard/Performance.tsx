// import React from 'react'
import { COLORS, FONTS } from '../../constant'
import { useSelector } from "react-redux";
import { selectStaffDashboard } from "../../features/dashboard/reducer/selector";

const Performance = () => {
  const staffDashboard:any = useSelector(selectStaffDashboard);

const attendance = staffDashboard?.attendanceCompletion || 0;
const materialUpload = staffDashboard?.materialUploadRate || 0;
  return (
    <div>
         <div className='w-full p-4 rounded-[10px]' style={{boxShadow:COLORS.shadow_violet}}>
           <h1 style={{color:COLORS.primary_violet,...FONTS.header}}>Performance Metrics</h1>
        <div className="space-y-1 pt-2">
               <div className="flex justify-between text-sm font-medium">
    <p>Attendance Completion</p>
    <p>{attendance}%</p>
                  </div>

                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                 <div className="h-full rounded-full"
                   style={{
                        width: `${attendance}%`,
                        background: "linear-gradient(90deg, #3B153A 0%, #E4D1B1 100%)",
                        }}
                        />
                     </div>
                    </div>


                       <div className="space-y-1 pt-2">
                     <div className="flex justify-between text-sm font-medium">
                     <p>Material Upload Rate</p>
                       <p>{materialUpload}%</p>
                          </div>

                        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                           <div className="h-full rounded-full"
                           style={{
                               width: `${materialUpload}%`,
                              background: "linear-gradient(90deg, #3B153A 0%, #E4D1B1 100%)",
                               }}
                                   />
                                  </div>
                                   </div>    
                               </div>
    </div>
  )
}

export default Performance