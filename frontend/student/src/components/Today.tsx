/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar } from "lucide-react";
import { Clock } from "lucide-react";
import { MapPin } from "lucide-react";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { GetLocalStorage } from "../utils/SecureStorage";

const Today = () => {
    const classes = useSelector((state: RootState) => state.classes.data)

    const formatDate = (date: string) => {
        if (!date) return "N/A";
        return new Date(date).toLocaleDateString("IND");
    };

    const handelJoinClass =(classid:string)=>{
    const token = GetLocalStorage('t_s_tk')
    window.open(`/confrence?classId=${classid}&token=${token}`, '_blank', 'noopener,noreferrer');
    }


    return (
        <div className="grid grid-cols-2">
            {classes.map((item: any) => (
                <div key={item.uuid} className="shadow-[0px_0px_10px_0px_#00000026] p-3 rounded-2xl my-2">
                    <div className="flex flex-col justify-between">
                        <div>
                            <div className="flex flex-row justify-between">
                                <div className="flex gap-10">
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
                                    <h3 className="text-sm text-white rounded px-2 py-1 bg-[#0B580E]">
                                        Today
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
                                        {item.class_mode === "online" ? 'click join' : 'visit institute'}
                                    </div>
                                </div>
                                <div className="flex gap-2 mb-2">
                                    <h3 className="text-[#8F8F8F]">Assigned Staff: </h3>
                                    <div className="font-bold">
                                        {item.staff?.staff_name}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        {item.class_mode === "online" && (
                            <div className="flex-1 bg-[#EAFFE5] p-3 flex flex-col gap-2">
                                {/* <h2 className="font-bold text-[#20D432] flex items-center gap-2"><span className="h-1 w-1 rounded-full bg-red-500"></span>Class is live now! Join immediately to not miss out.</h2> */}
                                <button onClick={()=>handelJoinClass(item?.uuid)} className="text-white bg-[#1A7B9D] w-full rounded py-2">
                                    Join Now
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Today;