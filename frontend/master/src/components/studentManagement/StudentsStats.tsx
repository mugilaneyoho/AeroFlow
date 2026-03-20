import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { selectStudents } from '../../features/student/reducer/selector';
import { getStudentsThunk } from '../../features/student/reducer/thunk';
import type { AppDispatch } from '../../store/store';
import card1 from '../../assets/studentManagement/Container (4).png'
import card2 from '../../assets/studentManagement/Container (5).png'
import card3 from '../../assets/studentManagement/Container (6).png'
import card4 from '../../assets/studentManagement/Container (7).png'
import TopStatsGallery from '../common/TopStats';


interface StudentStats {
    id: number;
    icon: string;
    title: string;
    value: string
}

const StudentStats = () => {


    // const [studentStats, setStudentStats] = useState<StudentStats[]>([]);


    // useEffect(() => {
    //     const fetchStudentStats = async () => {
    //         try {
    //             const response = await axios.get<StudentStats[]>("url");
    //             setStudentStats(response.data);
    //         }
    //         catch (err) {
    //             console.error(err);
    //         }
    //     };
    //     fetchStudentStats();
    // }, []);


    // const dispatch = useDispatch<AppDispatch>();
    const students = useSelector(selectStudents);

    console.log(students)

    // useEffect(() => {
    //     if (!students?.length) {
    //         dispatch(getStudentsThunk());
    //     }
    // }, [dispatch, students?.length]);

    const stats = [
        {
            id: 1,
            icon: card1,
            title: "Total Students",
            value: students?.length.toString()
        },
        {
            id: 2,
            icon: card2,
            title: "Active Students",
            value: students?.filter(s => s.is_active).length.toString()
        },
        {
            id: 3,
            icon: card3,
            title: "Completed",
            value: students?.filter(s => !s.is_active).length.toString()
        },
        {
            id: 4,
            icon: card4,
            title: "Avg Attendance",
            value: students?.length.toString()
        }
    ];

    return <TopStatsGallery data={stats} />;
};

export default StudentStats;