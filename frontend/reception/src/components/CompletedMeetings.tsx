import show from "../assets/Show.png";
import approve from "../assets/approved.png";
import { useGetMeetingsQuery } from "../services/meetingApi";

const CompletedMeetings = () => {

    const { data: meetings = [] } = useGetMeetingsQuery();

    return (
        <div className="flex justify-between flex-wrap gap-5">
            {meetings.map((meeting) => (
                <div className="w-150 shadow-[0px_0px_14px_0px_#76153C_inset] rounded-2xl p-8 pb-3 pt-4">
                    <div className="flex justify-between my-2">
                        <h1 className="text-xl font-bold">Project Discussion</h1>
                        <div className="mb-1">
                            {meeting.status === "Approved" && (
                                <div className="text-sm border-[0.5px] rounded-3xl px-1 border-[#000000B2]/30 text-green-500 flex gap-1">
                                    <img src={approve} alt="tick" className="h-3 w-3 mt-1" />
                                    <span>Approved</span>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-[#000000B2] text-sm font-medium">
                            {meeting.visitor}
                        </div>
                        <div className="mb-2 text-[#000000B2] text-sm font-medium">
                            +{meeting.mobileNumber}
                        </div>
                    </div>
                    <hr className="text-[#716F6F]" />
                    <div className="grid grid-cols-2 gap-3">
                        <div className="flex flex-col my-2">
                            <h1 className="text-[#716F6F]">Entry Date</h1>
                            <span>{meeting.date}</span>
                        </div>

                        <div className="flex flex-col my-2">
                            <h1 className="text-[#716F6F]">Entry Time</h1>
                            <span>{meeting.requestedTime}</span>
                        </div>

                        <div className="flex flex-col my-2">
                            <h1 className="text-[#716F6F]">Meeting ID</h1>
                            <span className="font-bold">{meeting.meetingId}</span>
                        </div>

                        <div className="flex flex-col my-2">
                            <h1 className="text-[#716F6F]">Priority</h1>
                                <div className="flex gap-1">
                                    <span className="font-medium">{meeting.priority}</span>
                                </div>
                        </div>
                    </div>
                    <hr className="text-[#716F6F]" />
                    <div className="flex border border-[#76153C] rounded-2xl my-2 py-2 justify-center gap-3">
                        <img src={show} alt="show" />
                        <span className="text-[#76153C] font-medium mt-0.5">View Summary</span>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default CompletedMeetings;