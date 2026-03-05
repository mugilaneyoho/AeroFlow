import schedule from "../assets/Schedule.png"
import prof from "../assets/prof.png"
import clock from "../assets/clock.png"
import pin from "../assets/pin.png"

const Schedule = () => {

    const classes = [
        { courseName: "React & Frontend", prof: "Prof.Priya Sharma", timing: "9:00 AM - 12:00 PM", location: "http//zoom link.com", mode: "Online" },
        { courseName: "Node.js & Backend", prof: "Prof.James", timing: "1:00 PM - 3:00 PM", location: "Room no:305", mode: "Offline" }
    ]

    return (
        <div>
            <div className="border border-[#868686] rounded-2xl m-3">
                <div className="flex ml-3 mt-2">
                    <img src={schedule} alt="image" className="h-10 w-10 my-2 ml-2" />
                    <h1 className="text-[#1A7B9D] text-3xl font-bold m-2">Today's Classes</h1>
                </div>
                {classes.map((item) => (

                    <div className="shadow-[0px_0px_10px_0px_#00000040] m-5 p-5 rounded-2xl flex justify-between">
                        <div>
                            <div className="text-2xl font-bold flex gap-3 mb-3">
                                <h1> {item.courseName}</h1>
                                <div>
                                    {item.mode === "Online" && (
                                        <div className="text-sm mt-2 text-white px-1 bg-green-500 rounded font-light">{item.mode}</div>
                                    )}
                                    {item.mode === "Offline" && (
                                        <div className="text-sm mt-2 text-white px-1 bg-red-500 rounded font-light">{item.mode}</div>
                                    )}
                                </div>
                            </div>
                            <div className="flex my-1 gap-2">
                                <img src={prof} alt="icon" className="h-6 w-6" />
                                <h3 className="">{item.prof}</h3>
                            </div>
                            <div className="flex my-1 gap-2">
                                <img src={clock} alt="icon" className="h-6 w-6" />
                                <h3 className="">{item.timing}</h3>
                            </div>
                            <div className="flex my-1 gap-2">
                                <img src={pin} alt="icon" className="h-6 w-6" />
                                <h3 className="text-[#2790DC]">{item.location}</h3>
                            </div>
                        </div>
                        <button className="mt-4">
                            {item.mode === "Online" && (
                                <h1 className="text-sm mt-2 text-white bg-[#1A7B9D] rounded px-4 py-2 font-light">Join Now</h1>
                            )}
                            {item.mode === "Offline" && (
                                <h1 className="text-sm mt-2 text-white bg-[#3CA7FF] rounded px-8 py-2 font-light">View</h1>
                            )}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Schedule;