import { Calendar, Clock } from "lucide-react";

const Completed = ({ classes }: { classes: any[] }) => {

    const formatDate = (date: string) => {
        if (!date) return "N/A";
        return new Date(date).toLocaleDateString("IND");
    };

    return (
        <div className="grid grid-cols-2">
            {classes?.map((item: any) => (
                <div
                    key={item?.id || item?.uuid}
                    className="shadow-[0px_0px_10px_0px_#00000026] p-5 rounded-2xl my-2 overflow-hidden"
                >
                    <div className="">
                        <div>
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row items-baseline gap-2">
                                    <div>
                                        <div className="text-xl font-bold">
                                            {item?.subject ?? "N/A"}
                                        </div>
                                        <h3 className="text-[#8F8F8F]">
                                            {item?.batch_name ?? "N/A"}
                                        </h3>
                                    </div>

                                    <div>
                                        {item?.class_mode === "online" && (
                                            <h3 className="text-sm text-white rounded bg-green-500 px-1 mt-1.5">
                                                Online
                                            </h3>
                                        )}
                                        {item?.class_mode === "offline" && (
                                            <h3 className="text-sm text-white rounded bg-red-500 px-1 mt-1.5">
                                                Offline
                                            </h3>
                                        )}
                                    </div>

                                </div>
                                <div>
                                    <h3 className="text-sm text-white rounded p-1 bg-[#0B580E]">
                                        Completed
                                    </h3>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 mt-3 text-lg gap-5">
                                {/* Date */}
                                <div className="flex gap-2 mb-2">
                                    <Calendar className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {formatDate(item?.start_date)}
                                    </div>
                                </div>

                                {/* Time */}
                                <div className="flex gap-2 mb-2">
                                    <Clock className="text-[#8F8F8F]" />
                                    <div className="font-bold">
                                        {item?.start_time?.split('T')[1]?.split('.')[0] ?? "--"} - {item?.end_time?.split('T')[1]?.split('.')[0] ?? "--"}
                                    </div>
                                </div>

                                {/* Staff FIXED */}
                                <div className="flex gap-2 text-black">
                                    <h3 className="text-[#8F8F8F]">Assigned Staff:</h3>
                                    <div className="font-bold">
                                        {item?.staff?.staff_name ?? "N/A"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between text-white text-lg font-medium gap-4 mt-4">
                        <button className="bg-[#008BBF] flex-1 py-2 rounded-xl">
                            Download video materials
                        </button>
                        <button className="bg-[#008BBF] flex-1 py-2 rounded-xl">
                            Download materials
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Completed;