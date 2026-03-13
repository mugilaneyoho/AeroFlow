import { useGetMeetingsQuery } from "../services/meetingApi";

const DashboardStats = () => {

    const { data: meetings = [], isLoading } = useGetMeetingsQuery();

    const stats = [
        {
            label: "Total Visitors",
            notifications: meetings.length
        },
        {
            label: "Pending Approvals",
            notifications: meetings.filter(m => m.status === 'Pending').length
        },
        {
            label: "Ongoing Meetings",
            notifications: meetings.filter(m => m.status === 'Ongoing').length
        },
        {
            label: "Completed",
            notifications: meetings.filter(m => m.status === 'Completed').length
        },
    ];

    if (isLoading) return <div className="text-center mt-6">Updating stats...</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mx-4 mt-6">
            {stats.map((item) => (
                <div key={item.label} className="rounded-3xl h-13 p-4 border-[0.5px] border-[#76153C] flex justify-center items-center gap-2 shadow-lg">
                    <div className="font-semibold text-[#76153C]">
                        {item.label}
                    </div>
                    <div className="rounded-full w-7 h-7 bg-[#76153C] text-white flex items-center justify-center">
                        {item.notifications}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DashboardStats;