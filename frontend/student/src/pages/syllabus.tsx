import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StudyMaterials from "../StudyMaterials";

const syllabus = () => {

    return (
        <div className="w-full px-6 py-3 overflow-hidden">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div>
                    <StudyMaterials />
                </div>
            </div>
        </div>
    )
}

export default syllabus;