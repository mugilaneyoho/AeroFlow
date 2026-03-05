interface MeetingStatusProps {
    activeTab: string;
    setActiveTab: (tab: string) => void;
}

const MeetingStatus = ({ activeTab, setActiveTab }: MeetingStatusProps) => {
    const tabs = ["Ongoing", "Upcoming", "Completed"];

    return (
        <div className="flex justify-around mb-4">
            {tabs.map((tab) => (
                <h1
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-xl px-6 py-3 cursor-pointer transition-all duration-100 ${activeTab === tab
                            ? "shadow-[0px_0px_14px_0px_#76153C_inset] text-[#76153C] font-bold rounded-2xl"
                            : "shadow-none text-black"
                        }`}
                >
                    {tab} Meetings
                </h1>
            ))}
        </div>
    );
};

export default MeetingStatus