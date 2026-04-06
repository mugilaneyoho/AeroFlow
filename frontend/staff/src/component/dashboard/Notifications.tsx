// import React from 'react'
import { COLORS, FONTS } from '../../constant'
import { useSelector, useDispatch } from "react-redux";
import { selectAllNotification } from "../../features/notification/reducer/selector";
import { getNotificationThunk } from "../../features/notification/reducer/thunk";
import { useEffect } from 'react';

// const stats =[
//     {
//         topic:"Class timing conflict for BTH001",
//         status:"Open",
//         priority:"High Priority",
//         hours:"2 hours ago"
//     },
//     {
//         topic:"Study materials not accessible",
//         status:"In Progress",
//         priority:"High Priority",
//         hours:"5 hours ago"
//     },
//     {
//         topic:"Received new student feedback",
//         status:"Open",
//         priority:"High Priority",
//         hours:"20/01/2026"
//     },
//     {
//         topic:"Class timing conflict for BTH001",
//         status:"Open",
//         priority:"High Priority",
//         hours:"10/01/2026"
//     },


// ]

const Notifications = () => {
    const dispatch = useDispatch<any>();
    const stats = useSelector(selectAllNotification);

    useEffect(() => {
        dispatch(getNotificationThunk());
    }, [dispatch]);
    return (
        <div className='w-full h-full p-4 rounded-[10px]' style={{ boxShadow: COLORS.shadow_violet }}>
            <h1 style={{ color: COLORS.primary_violet, ...FONTS.header }}>Notifications</h1>
            <div className='space-y-3 pt-3'>
                {stats.map((item: any, index: any) => (
                    <div key={index} className='p-3 rounded-[10px] pt-4' style={{ boxShadow: COLORS.shadow_white }}>
                        <div className='flex justify-between'>
                            <p>{item.topic}</p>
                            <p>{item.hours}</p>
                        </div>
                        <div className='flex justify-between'>
                            <span className='text-[#6D6D6D] font-bold'> {item.title}</span>
                            <span className='text-[#6D6D6D] border px-2 rounded-md'>{item.priority}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='text-[#6D6D6D]'> {item.message}</span>
                            <span className='text-[#6D6D6D]'> {item.Role}</span>
                            <span className='text-[#6D6D6D]'> {item.CreateAt}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Notifications