import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ViewMyClasses from "../components/ViewMyClasses";

const Classes = () => {
    return (

        <div className="w-full h-screen flex flex-col overflow-hidden">
            <Navbar />
            <div className="flex flex-1 overflow-y-scroll h-full">
                <Sidebar />
                <div className="flex-1 overflow-y-auto h-full p-6 bg-gray-50">
                    <ViewMyClasses />
                </div>
            </div>
        </div>
    )
}

export default Classes;