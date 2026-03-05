import panelImage from '../assets/reception-panel-image.png';
import dashboardLogo from '../assets/dashboard-logo.png';
import notificationIcon from '../assets/notification-icon.png';
import logoutIcon from '../assets/logout-icon.png';
import profileIcon from '../assets/profile-icon.png';
import reportIcon from '../assets/reportIcon-navbar.png';
import { useNavigate } from 'react-router-dom';
import { meetingApi } from '../services/meetingApi';
import { visitorApi } from '../services/visitorApi';
import { useDispatch } from 'react-redux';


const Navbar = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userName = "John";

    const handleLogout = () => {

        document.cookie.split(";").forEach((c) => {
            document.cookie = c
                .replace(/^ +/, "")
                .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });

        sessionStorage.clear();
        localStorage.clear();

        dispatch(meetingApi.util.resetApiState());
        dispatch(visitorApi.util.resetApiState());

        navigate('/');
    }

    const handleDashboard = () => {
        navigate('/reception')
    }

    const handleReport = () => {
        navigate('/reports')
    }

    return (
        <nav className='flex bg-[#76153C] w-full h-18 justify-between'>
            <div className='flex gap-4 items-center px-4'>
                <div>
                    <img src={panelImage} alt="Image" className='h-10 w-10' />
                </div>
                <div>
                    <h1 className="text-white text-2xl font-bold">Reception Panel</h1>
                    <h4 className="text-white text-base">
                        {userName} Reception
                    </h4>
                </div>
            </div>

            <div className='flex gap-20'>
                <button onClick={handleDashboard}>
                    <div className='flex justify-center'>
                        <img src={dashboardLogo} alt="Dashboard Logo" className='h-10 w-10 justify-center' />
                    </div>
                    <h1 className="text-white text-lg font-bold">Dashboard</h1>
                </button>

                <button onClick={handleReport}>
                    <img src={reportIcon} alt="Dashboard Logo" className='h-10 w-10 justify-center' />
                    <h1 className="text-[#BDC2C7BF] text-lg font-bold">Report</h1>
                </button>

                <button>
                    <h1 className="text-[#BDC2C7BF] text-lg font-bold mt-10">Tickets</h1>
                </button>
            </div>

            <div className='flex gap-2 items-center px-4'>
                <button className='cursor-pointer'>
                    <img src={notificationIcon} alt="Notification Icon" className='h-10 w-10' />
                </button>
                <button className='cursor-pointer'>
                    <img src={profileIcon} alt="Profile Icon" className='h-10 w-10' />
                </button>
                <button onClick={handleLogout} className='cursor-pointer'>
                    <img src={logoutIcon} alt="Logout Icon" className='h-10 w-10' />
                </button>
            </div>
        </nav>
    );
}

export default Navbar;