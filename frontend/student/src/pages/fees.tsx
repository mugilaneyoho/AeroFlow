import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Fees from "../components/Fees";

const fees = () => {

    return (
        <div className="px-6 py-3 overflow-hidden">
            <Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <div className="flex-1 overflow-y-auto">
                    <Fees />
                </div>
            </div>
        </div>
    )
}

export default fees;