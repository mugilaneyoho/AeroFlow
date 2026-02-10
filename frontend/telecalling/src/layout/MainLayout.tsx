import { Outlet } from "react-router-dom"
import NavBar from "../components/shared/NavBar"
import SideBar from "../components/shared/SideBar"
import { useAuth } from "../contexts/AuthUseContext"

const MainLayout = () => {
  const {isAdmin} = useAuth()
  return (
    <div className="flex flex-col w-screen h-screen overflow-hidden bg-[#FFFFFF]" >
        <div className="flex flex-col flex-1">
         <NavBar/>
        </div>
        <div className="flex h-screen overflow-hidden">
          {
            isAdmin && 
          <div
            className="transition-all duration-300"
            // style={{ width: `${sidebarWidth}px` }}
          >
            <SideBar/>
          </div>
          }
          <div className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </div>
        </div>
    </div>
  )
}

export default MainLayout