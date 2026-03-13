import { Plus, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useAddMeetingMutation } from "../services/meetingApi";
import { useGetVisitorsQuery } from "../services/visitorApi";

const CreateMeetingRequest = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [addMeeting, { isLoading }] = useAddMeetingMutation();

    const [formData, setFormData] = useState({
        visitor: "",
        purposeOfMeeting: "",
        requestedTime: "",
        date: "",
        meetingId: "",
        mobileNumber: "",
    });

    const { data: visitors = [], isLoading: isVisitorsLoading } = useGetVisitorsQuery();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await addMeeting(formData).unwrap();
            setIsOpen(false);
            setFormData({ visitor: "", purposeOfMeeting: "", requestedTime: "", date: "", meetingId: "", mobileNumber: "" });
        } catch (err) {
            console.error("Failed to add visitor:", err);
        }
    };

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="cursor-pointer flex p-3 bg-white border-2 border-[#76153C] rounded-lg items-center gap-2 ">
                <Plus size={20} className="text-[#76153C]" />
                <span className="text-[#76153C]">Create Meeting Request</span>
            </button>

            {
                isOpen && (
                    <div className="fixed inset-0 right-0 border-0 bg-black/50 flex justify-end z-50 p-1">
                        <div className="bg-white w-full max-w-md p-6 shadow-2xl relative animate-in fade-in zoom-in duration-200">
                            <button
                                onClick={() => setIsOpen(false)}
                                className="cursor-pointer absolute text-black hover:text-gray-600 mb-8 mt-2 top-0 flex gap-1 text-center"
                            >
                                <ArrowLeft size={20} className="mt-0.5" />
                                <h2>Back</h2>
                            </button>
                            <div className="my-4">
                                <h2 className="text-2xl font-medium text-slate-800">Create Meeting Request</h2>
                                <h3 className="text-sm text-[#BCB4B4] mb-3">Submit a meeting request to the master admin for approval</h3>
                            </div>
                            <form onSubmit={handleSubmit} className="border border-[#BCB4B4] p-3 space-y-2 rounded-2xl">
                                <div>
                                    <label className="block text-sm text-black">Select Visitor</label>
                                    <select
                                        required
                                        className="w-full mt-1 bg-[#79747E]/50 p-2 border border-[#BCB4B4] rounded-xl outline-none cursor-pointer"
                                        value={formData.visitor}
                                        onChange={(e) => setFormData({ ...formData, visitor: e.target.value })}
                                    >
                                        <option value="" disabled>
                                            {isVisitorsLoading ? "Loading visitors..." : "-- Choose a Visitor --"}
                                        </option>

                                        {visitors.map((v) => (
                                            <option key={v.id} value={v.visitorName}>
                                                {v.visitorName}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-black">Purpose of meeting </label>
                                    <input
                                        type="text"
                                        required
                                        className="cursor-pointer w-full mt-1 bg-[#79747E]/50 p-2 border border-[#BCB4B4] rounded-xl outline-none focus:border-[#76153C]"
                                        value={formData.purposeOfMeeting}
                                        onChange={(e) => setFormData({ ...formData, purposeOfMeeting: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-black">Requested Time</label>
                                    <input
                                        type="time"
                                        required
                                        className="cursor-pointer w-full mt-1 bg-[#79747E]/50 p-2 border border-[#BCB4B4] rounded-xl outline-none focus:border-[#362b30]"
                                        value={formData.requestedTime}
                                        onChange={(e) => setFormData({ ...formData, requestedTime: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-black">Phone-number</label>
                                    <input
                                        type="text"
                                        required
                                        className="cursor-pointer w-full mt-1 bg-[#79747E]/50 p-2 border border-[#BCB4B4] rounded-xl outline-none focus:border-[#362b30]"
                                        value={formData.mobileNumber}
                                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-black">Date</label>
                                    <input
                                        type="date"
                                        required
                                        className="cursor-pointer w-full mt-1 bg-[#79747E]/50 p-2 border border-[#BCB4B4] rounded-xl outline-none focus:border-[#362b30]"
                                        value={formData.date}
                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm text-black">Meeting ID</label>
                                    <input
                                        type="text"
                                        required
                                        className="cursor-pointer w-full mt-1 bg-[#79747E]/50 p-2 border border-[#BCB4B4] rounded-xl outline-none focus:border-[#362b30]"
                                        value={formData.meetingId}
                                        onChange={(e) => setFormData({ ...formData, meetingId: e.target.value })}
                                    />
                                </div>

                                <div className="flex gap-1 justify-end">
                                    <button
                                        type="submit"
                                        disabled={isLoading}
                                        className="cursor-pointer w-40 h-10  bg-[#76153C] text-white mt-3 rounded-xl font-medium hover:bg-[#5a102e] disabled:bg-gray-400 transition-colors"
                                    >
                                        {isLoading ? "Submitting..." : "Submit Request"}
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => setIsOpen(false)}
                                        className="cursor-pointer w-40 h-10  text-black border border-[#76153C] mt-3 rounded-xl font-medium hover:bg-gray-400 disabled:bg-gray-400 transition-colors"
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default CreateMeetingRequest;