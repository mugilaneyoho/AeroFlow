import { NavLink } from "react-router-dom"
import dashboard from "../assets/sidebar/dasboard_color.png"
import dashboard_gray from "../assets/sidebar/dashboard_gray.png"
import course from "../assets/sidebar/book_color.png"
import course_gray from "../assets/sidebar/book_gray.png"

import attendance from "../assets/sidebar/attendance_color.png"
import attendance_gray from "../assets/sidebar/attendance_gray.png"

import syllabus from "../assets/sidebar/syllabus_color.png"
import syllabus_gray from "../assets/sidebar/syllabus_gray.png"

import tickets from "../assets/sidebar/ticket_color.png"
import tickets_gray from "../assets/sidebar/ticket_gray.png"

import sidelogo from "../assets/sidebar/admin_logo.png"
import { COLORS } from "../constant"
import { GetLocalStorage } from "../utils/SecureStorage"

const Sidebar = () => {
  const token = GetLocalStorage('AuthToken')
  return (
    <aside className="w-16 sm:w-60 h-screen p-2 sm:p-4 rounded-r-[10px]" style={{ backgroundColor: COLORS.primary_violet }}>


      <div className="rounded-xl p-4 text-center mb-6 flex flex-col items-center justify-center" >
        <img src={sidelogo} alt="logo" className="w-12 h-12 sm:w-15 sm:h-15 object-contain" />
        <h2 className="text-white font-semibold hidden sm:block text-xl">Training Institute</h2>
        <p className="text-white text-sm hidden sm:inline">Staff Pannel</p>
      </div>

      <nav className="space-y-1">
        <NavLink to="/" end
          style={({ isActive }) => ({
            backgroundColor: isActive ? COLORS.secondary_white : 'transparent',
            color: isActive ? COLORS.primary_violet : COLORS.text_gray,
          })}
          className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 rounded-lg hover:bg-white/20"
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? dashboard : dashboard_gray} alt="logo" className="w-5 h-5" />
              <span className="hidden sm:inline">Dashboard</span>
            </>
          )}
        </NavLink>

        <NavLink to="/classes"
          style={({ isActive }) => ({
            backgroundColor: isActive ? COLORS.secondary_white : 'transparent',
            color: isActive ? COLORS.primary_violet : COLORS.text_gray,
          })}
          className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? course : course_gray} alt="logo" className="w-5 h-5" />
              <span className="hidden sm:inline">Classes</span>
            </>
          )}
        </NavLink>

        {/* <NavLink to="/attendance"
          style={({ isActive }) => ({
            backgroundColor: isActive ? COLORS.secondary_white : 'transparent',
            color: isActive ? COLORS.primary_violet : COLORS.text_gray,
          })}
          className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? attendance : attendance_gray} alt="logo" className="w-5 h-5" />
              <span className="hidden sm:inline">Attendance</span>
            </>
          )}

        </NavLink> */}

        <NavLink to="/syllabus"
          style={({ isActive }) => ({
            backgroundColor: isActive ? COLORS.secondary_white : 'transparent',
            color: isActive ? COLORS.primary_violet : COLORS.text_gray,
          })}
          className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 rounded-lg hover:bg-white/10"
        >

          {({ isActive }) => (
            <>
              <img src={isActive ? syllabus : syllabus_gray} alt="logo" className="w-5 h-5" />
              <span className="hidden sm:inline">Syllabus</span>
            </>
          )}

        </NavLink>





        <NavLink to={`/ticket/?tkn=${token}`}
          style={({ isActive }) => ({
            backgroundColor: isActive ? COLORS.secondary_white : 'transparent',
            color: isActive ? COLORS.primary_violet : COLORS.text_gray,
          })}
          className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 rounded-lg hover:bg-white/10"
        >
          {({ isActive }) => (
            <>
              <img src={isActive ? tickets : tickets_gray} alt="logo" className="w-5 h-5" />
              <span className="hidden sm:inline">Ticket</span>
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  )
}

export default Sidebar
