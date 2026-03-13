import { useEffect, useState } from 'react';
import { studentStatsCard } from '../../dummyData/studentManagement'
import axios from 'axios';

const StudentStats = () => {

    interface StudentStats {
        id: number;
        icon: string;
        title: string;
        value: string
    }

    const [studentStats, setStudentStats] = useState<StudentStats[]>([]);


    useEffect(() => {
        const fetchStudentStats = async () => {
            try {
                const response = await axios.get<StudentStats[]>("url");
                setStudentStats(response.data);
            }
            catch (err) {
                console.error(err);
            }
        };
        fetchStudentStats();
    }, []);


    return (
        <div className='flex flex-1 gap-5 my-4'>
            {studentStatsCard?.map((card) => (
                <div key={card.id} className='shadow-[0px_0px_15px_0px_#0000001A] flex flex-1 gap-10 p-3 rounded-lg justify-between'>
                    <div>
                        <img src={card.icon} alt={card.title} className='h-10 w-10 my-1' />
                        <p className='text-[#4A5565] font-medium'>{card.title}</p>
                    </div>
                    <div>
                        <h3 className='font-bold text-2xl'>{card.value}</h3>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default StudentStats;