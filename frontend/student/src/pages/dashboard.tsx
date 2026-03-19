import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Progress from "../components/Progress";
import Schedule from "../components/Schedule";
import Notifications from "../components/Notifications";
import PaymentMessage from "../components/PaymentMessage";

const DashBoard = () => {

    return (
        <div className="flex flex-col flex-1">
            <div>
                <Progress />
            </div>
            <div className="flex flex-1">
                <div className="flex-1">
                    <Schedule />
                </div>
                <div className="flex-1">
                    <Notifications />
                </div>
            </div>
            <div>
                <PaymentMessage />
            </div>
        </div>
    )
}

export default DashBoard;
