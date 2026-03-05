import { NavLink } from "react-router-dom"
import dashboard from "../assets/sidebar/dashboard.png"
import course from "../assets/sidebar/course.png"
import student from "../assets/sidebar/student.png"
import staff from "../assets/sidebar/staff.png"
import batches from "../assets/sidebar/batches.png"
import classes from "../assets/sidebar/classes.png"
// import tickets from "../assets/sidebar/tickets.png"
import sidelogo from "../assets/sidebar/sidelogo.png"
import { COLORS } from "../constant"

const Sidebar = () => {
  return (
   <aside className="w-16 sm:w-60 h-screen p-2 sm:p-4 rounded-r-[10px]" style={{backgroundColor:COLORS.primary_blue}}>

      <div className="rounded-xl p-4 text-center mb-6 flex flex-col items-center justify-center" style={{backgroundColor:COLORS.bg_light_white}}>
       <img src={sidelogo} alt="logo" className="w-12 h-12 sm:w-15 sm:h-15 object-contain" />
        <h2 className="text-white font-semibold hidden sm:block text-xl ">Training Admin</h2>
        <p className="text-white/60 text-sm hidden sm:inline">Admin Dashboard</p>
      </div>

      <nav className="space-y-1">
      <NavLink
  to="/"
  end
  style={({ isActive }) => ({
    backgroundColor: isActive ? COLORS.bg_light_white : 'transparent',
    color: isActive ? COLORS.secondary_white : COLORS.text_sidebar,
  })}
  className="flex items-center justify-center sm:justify-start gap-3 px-2 sm:px-4 py-3 rounded-lg hover:bg-white/20"
>
  <img src={dashboard} alt="logo" className="w-5 h-5" />
  <span className="hidden sm:inline">Dashboard</span>
</NavLink>

        <NavLink to="/course"
         style={({ isActive }) => ({
    backgroundColor: isActive ? COLORS.bg_light_white : 'transparent',
    color: isActive ? COLORS.secondary_white : COLORS.text_sidebar,
  })}
  className="flex items-center justify-center sm:justify-start gap-3 px-2 sm:px-4 py-3 rounded-lg hover:bg-white/10"
>
           <img src={course} alt="logo" className="" />
           <span className="hidden sm:inline">Course</span>
        </NavLink>

        

        <NavLink to="/staff"
        style={({ isActive }) => ({
    backgroundColor: isActive ? COLORS.bg_light_white : 'transparent',
    color: isActive ? COLORS.secondary_white : COLORS.text_sidebar,
  })}
  className="flex items-center justify-center sm:justify-start gap-3 px-2 sm:px-4 py-3 rounded-lg hover:bg-white/10"
>
           <img src={staff} alt="logo" className="" />
           <span className="hidden sm:inline">Staff</span>
        </NavLink>

        <NavLink to="/student"
       style={({ isActive }) => ({
    backgroundColor: isActive ? COLORS.bg_light_white : 'transparent',
    color: isActive ? COLORS.secondary_white : COLORS.text_sidebar,
  })}
  className="flex items-center justify-center sm:justify-start gap-3 px-2 sm:px-4 py-3 rounded-lg hover:bg-white/10"
>
          <img src={student} alt="logo" className="" />
          
           <span className="hidden sm:inline">Student</span>
        </NavLink>

        <NavLink to="/batches"
         style={({ isActive }) => ({
    backgroundColor: isActive ? COLORS.bg_light_white : 'transparent',
    color: isActive ? COLORS.secondary_white : COLORS.text_sidebar,
  })}
  className="flex items-center justify-center sm:justify-start gap-3 px-2 sm:px-4 py-3 rounded-lg hover:bg-white/10"
>
           <img src={batches} alt="logo" className="" />
          
           <span className="hidden sm:inline">Batches</span>
        </NavLink>

        <NavLink to="/classes"
         style={({ isActive }) => ({
    backgroundColor: isActive ? COLORS.bg_light_white : 'transparent',
    color: isActive ? COLORS.secondary_white : COLORS.text_sidebar,
  })}
  className="flex items-center justify-center sm:justify-start gap-3 px-2 sm:px-4 py-3 rounded-lg hover:bg-white/10"
>
           <img src={classes} alt="logo" className="" />
         
           <span className="hidden sm:inline">Classes</span>
        </NavLink>

        {/* <NavLink to="/ticket"
        style={({ isActive }) => ({
    backgroundColor: isActive ? COLORS.bg_light_white : 'transparent',
    color: isActive ? COLORS.secondary_white : COLORS.text_sidebar,
  })}
  className="flex items-center justify-center sm:justify-start gap-3 px-4 py-2 rounded-lg hover:bg-white/10"
>
           <img src={tickets} alt="logo" className="" />
          
           <span className="hidden sm:inline">Ticket</span>
        </NavLink> */}
      </nav>
    </aside>
  )
}

export default Sidebar
