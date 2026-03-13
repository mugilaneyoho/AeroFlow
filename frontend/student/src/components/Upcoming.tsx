import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import type { Course } from "../types/courseInterface";
import { classService } from "../services/classService";

const Upcoming = () => {

    const [courses, setCourses] = useState<Course[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await classService.getUpcomingClasses();
                setCourses(data);
            }
            catch (err) {
                console.log("Failed to fetch classes:", err);
                setError("Unable to Load classes");
            }
        }
        fetchClasses();
    }, []);

    if (error) return <div className="text-red-500 text-center py-10">{error}</div>;    

    return (
        <div>
            {(courses || []).map((item) => (
                <div key={item.subject} className="shadow-[0px_0px_10px_0px_#00000026] p-3 rounded-2xl my-2">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex gap-10">
                                <div>
                                    <div className="text-xl font-bold ">{item.subject}</div>
                                    <h3 className="text-[#8F8F8F]">{item.batch_name}</h3>
                                </div>
                                <div>
                                    {item.class_mode === "Online" && (
                                        <h3 className="text-sm text-white rounded bg-green-500 px-1 mt-1.5">
                                            {item.class_mode}
                                        </h3>
                                    )}
                                    {item.class_mode === "Offline" && (
                                        <h3 className="text-sm text-white rounded bg-red-500 px-1 mt-1.5">
                                            {item.class_mode}
                                        </h3>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-[250px_300px] my-5 ml-3">
                                <div className="flex gap-2 mb-2">
                                    <Calendar className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item.start_date}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <Clock className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item.start_time} - {item.end_time}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2 text-[#3497DE]">
                                    <MapPin className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item.venue}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <h3 className="text-[#8F8F8F]">Assigned Staff: </h3>
                                    <div className="font-bold">
                                        {item.staff}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-3">
                            <h3 className="text-sm text-white rounded p-1 bg-[#0B0F58]">
                                Upcoming
                            </h3>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Upcoming;