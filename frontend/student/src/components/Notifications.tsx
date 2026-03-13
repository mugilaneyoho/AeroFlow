import notification from "../assets/notification.png"
import calendar from "../assets/calendar.png"

const Notifications = () => {

    const notifications = [
        { alert: "Mock Interview Scheduled", message: "Your mock interview is scheduled for tomorrow at 2.00 PM", timing: "2 hours ago" },
        { alert: "New Job Opportunity", message: "Tech Corp is hiring for Full Stack Developer Position", timing: "4 hours ago" },
        { alert: "Congratulations", message: "You have achieved 85% attendance milestone", timing: "one day ago" }
    ]

    return (
        <div>
            <div className="border border-[#868686] rounded-2xl m-3">
                <div className="flex ml-3 mt-2">
                    <img src={notification} alt="image" className="h-10 w-10 my-2 ml-2" />
                    <h1 className="text-[#1A7B9D] text-3xl font-bold m-2">Notifications</h1>
                </div>
                <div>
                    {notifications.map((item) => (
                        <div className="shadow-[0px_0px_10px_0px_#00000040] m-5 p-3 rounded-2xl flex justify-between">
                            <div className="flex gap-4">
                                <div className="mt-1">
                                    <img src={calendar} alt="calendar-icon" />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold mb-2">
                                        {item.alert}
                                    </div>
                                    <div className="text-lg text-[#8F8F8F] w-70 leading-5 mb-0.5">
                                        {item.message}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-7 text-[#8F8F8F]">
                                {item.timing}
                            </div>
                        </div>
                    ))}
                </div>
            </ div>
        </div>
    )
}

export default Notifications;