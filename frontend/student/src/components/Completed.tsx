import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { DockIcon } from "lucide-react";
import { useEffect, useState } from "react";
import type { Course } from "../types/courseInterface";
import { classService } from "../services/classService";

const Completed = () => {

    const [courses, setCourses] = useState<Course[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const data = await classService.getCompletedClasses();
                setCourses(data);
            } catch (err) {
                console.error("Failed to fetch the classes:", err);
                setError("Unable to load classes");
            }
        };

        fetchClasses();
    }, []);

    if (error) return <div className="text-center py-10 text-red-500">Error: {error}</div>;

    return (
        <div>
            {courses.map((item) => (
                <div key={item.subject} className="shadow-[0px_0px_10px_0px_#00000026] p-5 rounded-2xl my-2">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex gap-10">
                                <div>
                                    <div className="text-xl font-bold ">{item?.subject}</div>
                                    <h3 className="text-[#8F8F8F]">{item?.batch_name}</h3>
                                </div>
                                <div>
                                    {item.class_mode === "Online" && (
                                        <h3 className="text-sm text-white rounded bg-green-500 px-1 mt-1.5">
                                            {item?.class_mode}
                                        </h3>
                                    )}
                                    {item.class_mode === "Offline" && (
                                        <h3 className="text-sm text-white rounded bg-red-500 px-1 mt-1.5">
                                            {item?.class_mode}
                                        </h3>
                                    )}
                                </div>
                            </div>
                            <div className="grid grid-cols-[250px_300px_300px] mt-3 ml-2 text-lg">
                                <div className="flex gap-2 mb-2">
                                    <Calendar className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item?.start_date}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <Clock className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item?.start_time} - {item?.end_time}
                                    </div>
                                </div>
                                <div className="flex gap-2  text-black">
                                    <div className="flex gap-2 ">
                                        <h3 className="text-[#8F8F8F]">Assigned Staff: </h3>
                                        <div className="font-bold">
                                            {item?.staff}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="flex gap-10">
                                <div className="p-2">
                                    {item.videoDocs.map((doc, index) => (
                                        <div key={index} className="flex gap-2">
                                            <DockIcon className="mb-2" />
                                            {doc}
                                        </div>
                                    ))}
                                </div>
                                <div className="p-2">
                                    {item.videoDocs.map((doc, index) => (
                                        <div key={index} className="flex gap-2">
                                            <DockIcon className="mb-2" />
                                            {doc}
                                        </div>
                                    ))}
                                </div>
                            </div> */}
                        </div>
                        <div className="mt-3">
                            <h3 className="text-sm text-white rounded p-1 bg-[#0B580E]">
                                Completed
                            </h3>
                        </div>
                    </div>
                    <div className="flex justify-between text-white text-lg font-medium flex-1 gap-25">
                        <button className="bg-[#008BBF] flex-1 py-2 rounded-xl">
                            Donwload video materials
                        </button>
                        <button className="bg-[#008BBF] flex-1 py-2 rounded-xl">
                            Donwload materials
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Completed;