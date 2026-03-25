/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
// import { useEffect, useState } from "react";
// import type { Course } from "../types/courseInterface";
// import { classService } from "../services/classService";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Upcoming = () => {

    // const [courses, setCourses] = useState<Course[]>([]);
    // const [error, setError] = useState<string | null>(null);
    const classes = useSelector((state: RootState) => state.classes.data)
    console.log(classes)

    // useEffect(() => {
    //     const fetchClasses = async () => {
    //         try {
    //             const data = await classService.getUpcomingClasses();
    //             setCourses(data);
    //         }
    //         catch (err) {
    //             console.log("Failed to fetch classes:", err);
    //             setError("Unable to Load classes");
    //         }
    //     }
    //     fetchClasses();
    // }, []);

    // if (error) return <div className="text-red-500 text-center py-10">{error}</div>;  
    const formatDate = (date: string) => {
        if (!date) return "N/A";
        return new Date(date).toLocaleDateString("IND");
    };

    return (
        <div className="grid grid-cols-2 gap-5">
            {classes?.map((item: any) => (
                <div
                    key={item?.id || item?.uuid}
                    className="shadow-[0px_0px_10px_0px_#00000026] p-5 rounded-2xl my-2 overflow-hidden"
                >
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row justify-between">
                                <div className="flex gap-4">
                                <div>
                                    <div className="text-xl font-bold ">{item.subject}</div>
                                    <h3 className="text-[#8F8F8F]">{item.batch_name}</h3>
                                </div>
                                <div>
                                    {item.class_mode === "online" && (
                                        <h3 className="text-sm text-white rounded bg-green-500 px-1 mt-1.5">
                                            {item.class_mode}
                                        </h3>
                                    )}
                                    {item.class_mode === "offline" && (
                                        <h3 className="text-sm text-white rounded bg-red-500 px-1 mt-1.5">
                                            {item.class_mode}
                                        </h3>
                                    )}
                                </div>
                                </div>
                                <div className="mt-3">
                                    <h3 className="text-sm text-white rounded p-1 bg-[#0B0F58]">
                                        Upcoming
                                    </h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-[250px_300px] my-5 ml-3">
                                <div className="flex gap-2 mb-2">
                                    <Calendar className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {formatDate(item.start_date)}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <Clock className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item.start_time?.split('T')[1]?.split('.')[0]} - {item.end_time?.split('T')[1]?.split('.')[0]}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2 text-[#3497DE]">
                                    <MapPin className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item.location}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <h3 className="text-[#8F8F8F]">Assigned Staff: </h3>
                                    <div className="font-bold">
                                        {item.staff.staff_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Upcoming;