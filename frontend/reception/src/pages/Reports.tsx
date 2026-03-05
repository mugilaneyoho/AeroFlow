import { useState } from "react"; 
import Navbar from "../components/Navbar";
import MeetingStatus from "../components/MeetingStatus";
import SearchBar from "../components/Search";
import OngoingMeetings from "../components/OngoingMeetings";
import UpcomingMeetings from "../components/UpcomingMeetings";
import CompletedMeetings from "../components/CompletedMeetings";

function Reports() {
    
    const [activeTab, setActiveTab] = useState("Ongoing");

    const renderActiveComponent = () => {
        switch (activeTab) {
            case "Ongoing":
                return <OngoingMeetings />;
            case "Upcoming":
                return <UpcomingMeetings />;
            case "Completed":
                return <CompletedMeetings />;
            default:
                return <OngoingMeetings />;
        }
    };

    return (
        <div className="h-screen w-screen flex flex-col overflow-hidden bg-slate-50">
            <Navbar />
            <h1 className="text-3xl font-bold text-slate-800 p-4">Reports & Logs</h1>
            <div className="flex-1 overflow-y-auto p-4 md:p-6">

                <MeetingStatus activeTab={activeTab} setActiveTab={setActiveTab} />
                
                <SearchBar />

                <div className="mt-4">
                    {renderActiveComponent()}
                </div>
            </div>
        </div>
    );
}

export default Reports;