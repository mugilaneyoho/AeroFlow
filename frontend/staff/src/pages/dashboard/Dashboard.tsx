import TodayClass from '../../component/dashboard/TodayClass'
import Notifications from '../../component/dashboard/Notifications'
import Performance from '../../component/dashboard/Performance'
import QuickAction from '../../component/dashboard/QuickAction'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store/store'
import { useEffect } from 'react'
import { GetStaffDashboardThunk } from '../../features/dashboard/reducer/thunk'



const Dashboard = () => {
   const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(GetStaffDashboardThunk());
  }, [dispatch]);
 
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4' >
        <div className='w-full'>
           <TodayClass />
        </div>

        <div className='w-full'>
            <Notifications />
        </div>
      
        
              <div className='w-full'>
                 <Performance />
              </div>
               <div className='w-full'>
                <QuickAction />
               </div>
      </div>
    </div>
  )
}

export default Dashboard