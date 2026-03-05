import dashboardLogo from "../assets/dashboard.png"
import sidebar1 from "../assets/sidebar-1.png"
import sidebar2 from "../assets/sidebar-2.png"
import sidebar3 from "../assets/sidebar-3.png"
import sidebar4 from "../assets/sidebar-4.png"
import sidebar5 from "../assets/sidebar-5.png"
import sidebar6 from "../assets/sidebar-6.png"
import signout from "../assets/signout.png"


const Sidebar = () => {

    return (
        <div>
            <div className="flex flex-col gap-3 bg-[#1A7B9D] rounded-full w-20 my-5 py-10">
                <div className="flex flex-col gap-15 py-3">
                    <button className="flex justify-center">
                        <img src={dashboardLogo} alt="logo" className="h-6 w-6" />
                    </button>
                    <button className="flex justify-center">
                        <img src={sidebar1} alt="sidebar2" className="h-6 w-6" />
                    </button>
                    <button className="flex justify-center">
                        <img src={sidebar2} alt="sidebar2" className="h-6 w-6" />
                    </button>
                    <button className="flex justify-center">
                        <img src={sidebar3} alt="sidebar3" className="h-6 w-6" />
                    </button>
                    <button className="flex justify-center">
                        <img src={sidebar4} alt="sidebar4" className="h-6 w-6" />
                    </button>
                    <button className="flex justify-center">
                        <img src={sidebar5} alt="sidebar5" className="h-6 w-6" />
                    </button>
                    <button className="flex justify-center mb-3">
                        <img src={sidebar6} alt="sidebar6" className="h-6 w-6" />
                    </button>
                </div>
            </div>
            <div className="flex flex-col ml-4">
                <button>
                    <img src={signout} alt="signout" className="h-12 w-12" />
                </button>
            </div>
        </div>
    )
}

export default Sidebar;