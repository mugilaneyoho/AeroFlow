// import { useEffect } from 'react';

// import { useDispatch, useSelector } from 'react-redux';

// import { getStudentsThunk } from '../../features/student/reducer/thunk';
// import type{ AppDispatch } from '../../store/store';
// import card1 from '../../assets/studentManagement/Container (4).png'
// import card2 from '../../assets/studentManagement/Container (5).png'
// import card3 from '../../assets/studentManagement/Container (6).png'
// import card4 from '../../assets/studentManagement/Container (7).png'
// import TopStatsGallery from '../common/TopStats';
// import { selectAdmissions } from '../../features/admission/reducer/selector';




// const AdmissionStats = () => {

//    const dispatch = useDispatch<AppDispatch>();
//     const admission = useSelector(selectAdmissions);

//     useEffect(() => {
//         if (!admission.length) {
//             dispatch(getStudentsThunk());
//         }
//     }, [dispatch, admission.length]);

//     const stats = [
//         {
//             id: 1,
//             icon: card1,
//             title: "Total Students",
//             value: admission.length.toString()
//         },
//         {
//             id: 2,
//             icon: card2,
//             title: "Active Students",
//             value: admission.filter(s => s.is_active).length.toString()
//         },
//         {
//             id: 3,
//             icon: card3,
//             title: "Completed",
//             value: admission.filter(s => !s.is_active).length.toString()
//         },
//         {
//             id: 4,
//             icon: card4,
//             title: "Avg Attendance",
//             value: admission.length.toString()
//         }
//     ];

//     return <TopStatsGallery data={stats} />;
// };

// export default AdmissionStats;