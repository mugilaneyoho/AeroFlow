import Navbar from "../components/Navbar";
import AddVisitor from "../components/AddVisitor";
import CreateMeetingRequest from "../components/CreateMeetingRequest";
import DashboardStats from "../components/DashboardStats";
import MeetingHistory from "../components/MeetingHistory";

function Home() {
    return (

        <div className="h-screen w-screen flex flex-col overflow-hidden bg-slate-50">

            <Navbar />

            <div className="flex-1 overflow-y-auto p-4 md:p-6">

                <div className="flex flex-col md:flex-row my-6 justify-between items-start md:items-center gap-4">
                    <h1 className="text-3xl font-bold text-slate-800">Reception Dashboard</h1>
                    <div className="flex gap-4">
                        <AddVisitor />
                        <CreateMeetingRequest />
                    </div>
                </div>

                <div className="space-y-8">
                    <DashboardStats />
                    <MeetingHistory />
                </div>
            </div>
        </div>
    );
}

export default Home;