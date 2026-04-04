/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useLocation } from "react-router-dom"
import dashboardLogo from "../assets/dashboard.png"
import sidebar1 from "../assets/sidebar-1.png"
import sidebar2 from "../assets/sidebar-2.png"
import sidebar3 from "../assets/sidebar-3.png"
import sidebar4 from "../assets/sidebar-4.png"
import sidebar1a from "../assets/Frame1.png"
import sidebar2b from "../assets/Frame2.png"
import sidebar3c from "../assets/Frame3.png"
import sidebar4d from "../assets/Frame4.png"
import sidebar5e from "../assets/Frame5.png"
// import sidebar6 from "../assets/sidebar-6.png"
import signout from "../assets/signout.png"
import { useState } from "react"

const Sidebar = () => {

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="bg-[#1A7B9D] rounded-full w-24">
                <div className="flex flex-col gap-10 px-2 py-4 items-center">
                    <SideBarLink
                        to="/"
                        icon={[dashboardLogo,sidebar1a]}
                        name="dashboard"
                    />
                    <SideBarLink
                        to="/classes"
                        icon={[sidebar1,sidebar2b]}
                        name="classes"
                    />
                    <SideBarLink
                        to="/syllabus"
                        icon={[sidebar2,sidebar3c]}
                        name="notes"
                    />
                    <SideBarLink
                        to="/attendace"
                        icon={[sidebar3,sidebar4d]}
                        name="attendace"
                    />
                    <SideBarLink
                        to="/fees"
                        icon={[sidebar4,sidebar5e]}
                        name="fees"
                    />
                    {/* <button className="flex justify-center mb-3">
                        <img src={sidebar6} alt="sidebar6" className="h-6 w-6" />
                    </button> */}
                </div>
            </div>
            <div className="flex flex-col">
                <button>
                    <img src={signout} alt="signout" className="h-12 w-12" />
                </button>
            </div>
        </div>
    )
}

const SideBarLink =({
  to,
  icon,
  name,
}:{
  to:string;
  icon:any;
  name:string;
})=>{
  const [isClick, setisClick] = useState();
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();
  const isActive = location.pathname == to;

  return (
    <Link
      to={to}
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
    >
      <div className='flex flex-col gap-2 justify-center items-center m-4'>
        <div className="flex relative items-center justify-center">
        <div className={`w-14 h-14 ${isActive || isHovered ? 'bg-white' : 'bg-transparent'} transform rotate-45 rounded-xl`}>
        </div>
        <img src={isActive || isHovered ? icon[1] : icon[0]} alt={name} className="h-8 w-8 absolute" />
        </div>
        {
            (isActive || isHovered) &&
        <p className={`${isActive || isHovered ? 'bg-white' : 'bg-transparent'} px-2 py-1 font-semibold text-[#1A7B9D] rounded-lg`}>{name}</p>
        }
      </div>
    </Link>
  )
}

export default Sidebar;