import { useDispatch, useSelector } from 'react-redux';
import { COLORS, FONTS } from '../../constant';
import { selectAllNotification } from '../../features/notification/reducers/selector';
import { useEffect } from 'react';
import { getNotificationThunk } from '../../features/notification/reducers/thunks';

const AttentionFeed: React.FC = () => {
  const dispatch = useDispatch()
  const notifications =  useSelector(selectAllNotification)
   console.log(notifications) 
 
   useEffect(()=>{
    dispatch(getNotificationThunk() as any)
  },[dispatch])
  
  return (
    <div >
      <h1 style={{ color: COLORS.primary_blue, ...FONTS.subTittle }}>
        Attention Feed
      </h1>

      { 
      notifications.length > 0 ? (
      notifications.map((item : any) => 
        {
          const color =
          item.priority === "HIGH"
            ? COLORS.bg_red
            : item.priority === "MEDIUM"
            ? COLORS.bg_medium_blue
            : COLORS.bg_medium_green;
        
        return (
        <div
          key={item.uuid}
          className="shadow-[0px_0px_10px_0px_#00000040] border border-[#DBDADA] p-2 mb-2 rounded-[10px]"
        >
          <div className="flex gap-2 ">
            <img src={item.icon} alt="icon" className='w-5 h-5 '/>

            <div>
              <p style={{ color }} className=''>{item.title}</p>
              <p className="text-sm" style={{ color: COLORS.text_gray }}>
                {item.message}
              </p>
              <span
                className="inline-block text-sm px-2 py-1 rounded mt-1"
                style={{ backgroundColor: COLORS.bg_light_green }}
              >
                {item.type}
              </span>
            </div>
          </div>
        </div>
      )

       })
       ) : (
        <p>No notifications available.</p>
      )}
    </div>
  );
};

export default AttentionFeed;
