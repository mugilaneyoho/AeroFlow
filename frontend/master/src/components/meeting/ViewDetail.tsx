import React from "react"
import person from "../../assets/meeting/person.png"
import doubleperson from "../../assets/meeting/doubleperson.png"
import phone from "../../assets/meeting/phone.png"
import clock from "../../assets/meeting/clock.png"
import type { Meeting } from "../../types/meetingTypes"



interface ViewDetailProps {
    meeting: Meeting
    closeModal: () => void
}

const ViewDetail: React.FC<ViewDetailProps> = ({ meeting, closeModal }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 ">
            <div className="bg-white rounded-xl p-6 w-100 shadow-lg">
                <h2 className=" font-bold mb-4">Visitor Details</h2>
                <div className="flex gap-3 items-center text-center mb-5">
                    <img src={person} className="w-4 h-4 "/>
                    <h1>{meeting.visitor}</h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-md font-semibold">Visitor Name</p>
                        <p className="text-sm">{meeting.visitor}</p>
                    </div>
                    <div>
                        <p className=" text-md font-semibold">Status</p>
                        <p className="text-green-600 border fixed rounded-full text-sm px-2">{meeting.status}</p>
                    </div>
                    <div>
                        <p className="text-md font-semibold">Mobile Number</p>
                        <div className="flex gap-2">
                            <img src={phone} className="w-4 h-4"/>
                            <p className="text-sm">{meeting.mobileNumber}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-md font-semibold">Priority</p>
                        <div className="flex gap-2">
                            <h1 className="w-3 h-3 rounded-full bg-red-500 mt-1"/>
                            <p className="text-sm">{meeting.priority}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-md font-semibold">Purpose</p>
                        <div className="flex gap-2">
                            <img src={doubleperson} className="w-4 h-4"/>
                            <p className="text-sm">{meeting.purposeOfMeeting}</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-md font-semibold">Time</p>
                        <div className="flex gap-2">
                            <img src={clock} className="w-4 h-4"/>
                            <p className="text-sm">{meeting.requestedTime}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <p>Notes(Optional)</p>
                    <input placeholder="Add any notes for the meetings.." className="bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md w-full p-2"/>
                </div>

                <div className="flex justify-end gap-3 mt-6">
                    <button onClick={closeModal} className="border px-4 py-1 rounded-md cursor-pointer">
                        Cancel
                    </button>

                    <button className={` ${meeting.status === "Ongoing"? "bg-green-500": meeting.status === "Scheduled"? "bg-red-500" : ""} text-white px-4 py-1 rounded-md cursor-pointer`}>
                        {meeting.status === "Ongoing" && "Complete"}
                        {meeting.status === "Scheduled" && "Resheduled"}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ViewDetail