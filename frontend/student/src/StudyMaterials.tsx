import { Calendar } from "lucide-react";
import book from "../src/assets/book.png"
import { ArrowDownToLine } from "lucide-react";

const StudyMaterials = () => {

    const courses = [{
        courseName: "React Fundamentals", category: "React and frontend", status: "completed", date: "2025-01-15",
        materials: ["react_fundamentals.pdf", "react_demo_video.mp4"]
    },
    {
        courseName: "React Hooks", category: "React and frontend", status: "ongoing", date: "2025-01-15",
        materials: ["reacthook_fundamentals.pdf"]
    }
    ]

    return (
        <div className="p-5">
            <div className="my-3">
                <h1 className="text-2xl font-medium">Syllabus & Study Materials</h1>
                <p className="text-[#7C7979]">Access your course materials and syllabus</p>
            </div>
            <div>
                {courses.map((item) => (
                    <div key={item.courseName} className="shadow-[0px_0px_10px_0px_#00000026] p-3 rounded-2xl my-2 w-300">
                        <div className="flex justify-between">
                            <div>
                                <div className="flex gap-10">
                                    <div>
                                        <div className="text-xl font-bold ">{item.courseName}</div>
                                        <h3 className="text-[#8F8F8F]">{item.category}</h3>
                                    </div>
                                </div>

                                <div className="flex gap-2 my-2">
                                    <Calendar className="text-[#8F8F8F]" />
                                    <div className="font-medium flex gap-1">
                                        <h3>Date:</h3>
                                        {item.date}
                                    </div>
                                </div>

                            </div>
                            <div className="mt-3">
                                {item.status === "completed" && (
                                    <div className="bg-[#0B580E] text-white p-1 rounded">
                                        {item.status}
                                    </div>
                                )}
                                {item.status === "ongoing" && (
                                    <div className="bg-[#0B0F58] text-white px-2.5 py-1 rounded">
                                        {item.status}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="bg-[#F7FFF5] rounded my-2">
                            <div className="flex">
                                <img src={book} alt="book" className="h-10 w-10" />
                                <h3 className="font-medium mt-2">Study Materials:</h3>
                            </div>
                            <div>
                                {item.materials.map((doc, index) => (
                                    <div key={index} className="shadow-[0px_0px_15px_0px_#00000040] my-2 p-1 rounded mx-3 flex justify-between">
                                        {doc}
                                        <button>
                                            <ArrowDownToLine />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StudyMaterials;