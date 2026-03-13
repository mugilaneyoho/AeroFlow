import show from "../assets/Show.png";
import approve from "../assets/approved.png";
import { Pencil } from "lucide-react";
import { useGetMeetingsQuery, useUpdateMeetingMutation, type Meeting } from "../services/meetingApi";
import { useState } from "react";

const UpcomingMeetings = () => {

    const { data: meetings = [] } = useGetMeetingsQuery();

    const [selectedMeeting, setSelectedMeeting] = useState<Meeting | null>(null);

    const [editMeeting, setEditMeeting] = useState<Meeting | null>(null);

    const [updateMeeting, { isLoading }] = useUpdateMeetingMutation();

    const [formData, setFormData] = useState({ date: "", requestedTime: "" });

    const handleSave = async () => {
        if (!editMeeting) return;
        try {
            await updateMeeting({
                id: editMeeting.id,
                date: formData.date,
                requestedTime: formData.requestedTime,
            }).unwrap();

            setEditMeeting(null);
        } catch (error) {
            console.error("Failed to update meeting:", error);
        }
    };

    return (
        <div className="flex justify-between flex-wrap gap-5">
            {meetings.map((meeting) => (
                <div key={meeting.id} className="w-150 shadow-[0px_0px_14px_0px_#76153C_inset] rounded-2xl p-8 pb-3 pt-4">
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
                    <div className="flex gap-5 m-3">
                        <button onClick={() => setSelectedMeeting(meeting)} className="flex flex-1 gap-3 border-[0.5px] border-[#76153C] p-2 text-center justify-center rounded-2xl w-full">
                            <img src={show} alt="show" className="h-5 w-5 mt-1" />
                            <span className="text-[#76153C] font-medium">View Details</span>
                        </button>

                        <button onClick={() => setEditMeeting(meeting)} className="border-[0.5px] border-green-500 p-2 rounded-2xl text-center justify-center flex flex-1 gap-3 shadow-[0px_0px_14px_0px_#1AAA28_inset] cursor-pointer">
                            <Pencil className="h-4 w-4 mt-1" />
                            <span className="font-medium text-green-500">Edit</span>
                        </button>
                    </div>
                </div>
            ))}

            {selectedMeeting && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 p-3">
                    <div className="bg-white p-6">
                        <h1 className="mb-5 text-xl font-medium">Meeting Details</h1>
                        <div className="grid grid-cols-2 gap-x-30">
                            <div className="flex flex-col gap-5">
                                <div className="font-medium">
                                    {selectedMeeting.visitor}
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Meeting ID</h2>
                                    <h1 className="font-medium">{selectedMeeting.meetingId}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Requested Date</h2>
                                    <h1>{selectedMeeting.date}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Priority</h2>
                                    <h1>{selectedMeeting.priority}</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="font-medium">
                                    +{selectedMeeting.mobileNumber}
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Purpose</h2>
                                    <h1 className="font-medium">{selectedMeeting.purposeOfMeeting}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Requested Time</h2>
                                    <h1>{selectedMeeting.requestedTime}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Status</h2>
                                    <h1>{selectedMeeting.status}</h1>
                                </div>
                            </div>
                        </div>
                        <div onClick={() => setSelectedMeeting(null)} className="flex-1 bg-[#F5F5F5] flex justify-center my-3 cursor-pointer">
                            <button className="font-medium cursor-pointer">
                                close
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {editMeeting && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/50 p-3">
                    <div className="bg-white p-6 rounded shadow-xl max-w-lg w-full">
                        <h1 className="mb-5 text-xl font-medium">Edit Meeting</h1>
                        <div className="grid grid-cols-2 gap-x-30">
                            <div className="flex flex-col gap-5">
                                <div className="font-medium">
                                    {editMeeting.visitor}
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Meeting ID</h2>
                                    <h1 className="font-medium">{editMeeting.meetingId}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Requested Date</h2>
                                    <h1>{editMeeting.date}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Priority</h2>
                                    <h1>{editMeeting.priority}</h1>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5">
                                <div className="font-medium">
                                    +{editMeeting.mobileNumber}
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Purpose</h2>
                                    <h1 className="font-medium">{editMeeting.purposeOfMeeting}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Requested Time</h2>
                                    <h1>{editMeeting.requestedTime}</h1>
                                </div>
                                <div>
                                    <h2 className="text-md text-[#716F6F]">Status</h2>
                                    <h1>{editMeeting.status}</h1>
                                </div>
                            </div>
                        </div>

                        <div className="bg-[#D9D9D9]/30 p-4 rounded-xl my-4 space-y-4">
                            <div>
                                <h2 className="text-sm font-medium mb-1">Reschedule Date</h2>
                                <input
                                    type="date"
                                    className="w-full p-2 rounded border bg-white"
                                    value={formData.date}
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <h2 className="text-sm font-medium mb-1">Reschedule Time</h2>
                                <input
                                    type="time"
                                    className="w-full p-2 rounded border bg-white"
                                    value={formData.requestedTime}
                                    onChange={(e) => setFormData({ ...formData, requestedTime: e.target.value })}
                                />
                            </div>
                        </div>

                        <div className="flex justify-around gap-3 mt-6">
                            <button
                                className="font-medium cursor-pointer bg-[#F5F5F5] px-6 py-2 rounded-lg"
                                onClick={() => setEditMeeting(null)}
                            >
                                Close
                            </button>
                            <button
                                className="font-medium cursor-pointer bg-[#76153C] text-white px-6 py-2 rounded-lg disabled:bg-gray-400"
                                onClick={handleSave}
                                disabled={isLoading}
                            >
                                {isLoading ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}

export default UpcomingMeetings;