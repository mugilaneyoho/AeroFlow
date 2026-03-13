import Profile from "../assets/Profile.png"
import Show from "../assets/Show.png"
import Vector from "../assets/Vector.png"
import TimeCircle from "../assets/TimeCircle.png"
import reschedule from "../assets/reschedule.png"
import reject from "../assets/reject.png"
import approved from "../assets/approved.png"
import normal from "../assets/normal.png"
import high from "../assets/high.png"
import { Phone, ArrowLeft } from "lucide-react"
import { useGetMeetingsQuery } from "../services/meetingApi"
import { useState } from "react";
import { type Meeting } from "../services/meetingApi";

const MeetingHistory = () => {

    const { data: meetings, isLoading, isError, error } = useGetMeetingsQuery();

    const [viewDetails, setViewDetails] = useState<Meeting | null>(null);

    if (isLoading) {
        return <div className="p-10 text-center">Loading Meeting History...</div>;
    }

    if (isError) {
        return (
            <div className="p-10 text-center text-red-500">
                Error loading meetings: {JSON.stringify(error)}
            </div>
        );
    }

    return (
        <div className="bg-white rounded-3xl p-6 shadow-[#76153C] shadow-lg my-5">
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-slate-800">Meeting History</h1>
                <button className="bg-white text-[#76153C] px-6 py-2 rounded-xl transition-colors border-2 border-[#BDC2C740]">
                    View All
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {meetings?.map((meeting) => (
                    <div key={meeting.id} className="shadow-[0px_0px_14px_0px_#76153C_inset] p-5 rounded-3xl bg-white">

                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-2">
                                <img src={Profile} alt="Profile" className="h-8 w-8 rounded-full" />
                                <span className="font-bold">{meeting.visitor}</span>
                            </div>
                            <button className="hover:bg-slate-100 p-1 rounded-full" onClick={() => setViewDetails(meeting)}>
                                <img src={Show} alt="Show" className="h-6 w-6" />
                            </button>
                        </div>

                        <div className="flex justify-between my-4">
                            <div>
                                <div className="text-lg font-extralight text-gray-500">Mobile number</div>
                                <div className="flex">
                                    <Phone className="text-[#76153C] h-4 w-4 m-0.5" />
                                    <span className="text-sm font-medium">{meeting.mobileNumber}</span>
                                </div>
                            </div>

                            <div className="text-right">
                                <div className="text-lg font-extralight text-gray-500">Priority</div>
                                <div className="flex items-center justify-end gap-2">
                                    {meeting.priority === "Normal" && <img src={normal} alt="Normal" className="h-4 w-4" />}
                                    {meeting.priority === "High" && <img src={high} alt="High" className="h-4 w-4" />}
                                    <span className="text-sm font-medium">{meeting.priority || "Normal"}</span>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between mb-6">
                            <div>
                                <div className="text-lg font-extralight text-gray-500">Purpose</div>
                                <div className="flex items-center gap-2">
                                    <img src={Vector} alt="Vector" className="h-4 w-4" />
                                    <span className="text-sm font-medium">{meeting.purposeOfMeeting}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-lg font-extralight text-gray-500">Time</div>
                                <div className="flex items-center justify-end gap-2">
                                    <img src={TimeCircle} alt="Time" className="h-4 w-4" />
                                    <span className="text-sm font-medium">{meeting.requestedTime}</span>
                                </div>
                            </div>
                        </div>

                        <div className="font-medium text-sm border-[0.5px] rounded-lg w-40 mx-auto border-gray-200">
                            {meeting.status === "Approved" && (
                                <div className="flex items-center gap-2 py-2 justify-center text-green-600">
                                    <img src={approved} alt="Approved" className="h-4 w-4" />
                                    <span>Approved</span>
                                </div>
                            )}

                            {(meeting.status === "Reschedule" || !meeting.status) && (
                                <div className="flex items-center gap-2 py-2 justify-center text-orange-500">
                                    <img src={reschedule} alt="Reschedule" className="h-4 w-4" />
                                    <span>Rescheduled</span>
                                </div>
                            )}

                            {meeting.status === "Reject" && (
                                <div className="flex items-center gap-2 py-2 justify-center text-red-600">
                                    <img src={reject} alt="Reject" className="h-4 w-4" />
                                    <span>Rejected</span>
                                </div>
                            )}

                            {meeting.status === "Pending" && (
                                <div className="flex items-center gap-2 py-2 justify-center text-gray-600">
                                    <span>Pending</span>
                                </div>
                            )}

                            {meeting.status === "Ongoing" && (
                                <div className="flex items-center gap-2 py-2 justify-center text-gray-600">
                                    <span>Ongoing</span>
                                </div>
                            )}

                            {meeting.status === "Completed" && (
                                <div className="flex items-center gap-2 py-2 justify-center text-gray-600">
                                    <span>Completed</span>
                                </div>
                            )}

                        </div>
                    </div>
                ))}

                {viewDetails && (
                    <div className="fixed inset-0 flex flex-col items-center bg-black/50 my-2">
                        <div className="bg-white px-6 py-3 rounded-2xl w-fit">
                            <div>
                                <div className="flex">
                                    <ArrowLeft className="cursor-pointer m-0.5" onClick={() => setViewDetails(null)} />
                                    <h3 className="font-bold text-lg">Back to Dashboard</h3>
                                </div>
                                <h2 className="text-lg font-medium">Visitor Details</h2>
                            </div>
                            <div className="flex">
                                <div>
                                    <div className="border border-black rounded p-2 mb-2">
                                        <h1 className="font-medium">Visitor Information</h1>
                                        <div className="grid grid-cols-2">
                                            <div>
                                                <h1 className="text-[#716F6F]">Sl.No</h1>
                                                <span className="font-medium">{viewDetails.id}</span>
                                            </div>
                                            <div>
                                                <h1 className="text-[#716F6F]">Full Name</h1>
                                                <span className="font-medium">{viewDetails.visitor}</span>
                                            </div>
                                            <div>
                                                <h1 className="text-[#716F6F]">Mobile</h1>
                                                <span>{viewDetails.mobileNumber}</span>
                                            </div>
                                            <div>
                                                <h1 className="text-[#716F6F]">Visit Type</h1>
                                                <span>Appoinment</span>
                                            </div>
                                            <div>
                                                <h1 className="text-[#716F6F]">Purpose of Visit</h1>
                                                <span>{viewDetails.purposeOfMeeting}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border border-black rounded p-2 mb-2">
                                        <h1 className="font-medium">Time Information</h1>
                                        <div>
                                            <h2 className="font-medium">Entry Time</h2>
                                            <h1>{viewDetails.createdAt}</h1>
                                        </div>
                                        <div>
                                            <h2 className="font-medium">Status</h2>
                                            <h2 className="border border-[#76153C] rounded-xl w-fit px-2">{viewDetails.status}</h2>
                                        </div>
                                    </div>
                                    <div className="border border-black rounded p-2">
                                        <h1 className="font-medium text-xl">Meeting Request</h1>
                                        <div className="grid grid-cols-2 gap-x-30">
                                            <div>
                                                <h2 className="font-medium">Meeting ID</h2>
                                                <h1>{viewDetails.meetingId}</h1>
                                            </div>
                                            <div>
                                                <h2 className="font-medium">Purpose</h2>
                                                <h1>{viewDetails.purposeOfMeeting}</h1>
                                            </div>
                                            <div>
                                                <h2 className="font-medium">Requested Date</h2>
                                                <h1>{viewDetails.date}</h1>
                                            </div>
                                            <div>
                                                <h2 className="font-medium">Requested Time</h2>
                                                <h1>{viewDetails.requestedTime}</h1>
                                            </div>
                                            <div>
                                                <h2 className="font-medium">Priority</h2>
                                                <h1>{viewDetails.priority}</h1>
                                            </div>
                                            <div>
                                                <h2 className="font-medium">Status</h2>
                                                <h1>{viewDetails.status}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-white px-6 py-3 rounded border border-black h-fit mx-3">
                                    <h1 className="font-medium mb-3">Actions</h1>
                                    <div className="flex flex-col gap-2">
                                        <button className="bg-[#76153C] text-white px-4 py-2 rounded-lg hover:bg-opacity-90">
                                            Mark as exit
                                        </button>
                                        <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-opacity-90 border border-[#76153C]">
                                            Create Meeting
                                        </button>
                                        <button className="bg-white text-[#76153C] px-4 py-2 rounded-lg hover:bg-opacity-90 border border-[#76153C]" onClick={() => setViewDetails(null)}>
                                            Back to Dashboard
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>
        </div >
    );
};

export default MeetingHistory;
