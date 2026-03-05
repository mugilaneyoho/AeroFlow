import React, { useState } from 'react'
import profileimg from '../assets/images/profileimg.png'
import logouticon from '../assets/images/logout.png'
import { COLORS } from '../constant'
import { useNavigate } from 'react-router-dom'
import Profilepage from '../components/profilepage/Profilepage'
import { useDispatch } from 'react-redux'
import { RemoveLocalStorage } from '../utils/helpers'
import { logout } from '../features/login/reducer/loginSlice'
import type { AppDispatch } from '../store/store'

const Navbar:React.FC = () => {
   const navigate = useNavigate()
   const[open,setOpen] = useState(false)
   const [profileOpen , setProfileOpen] = useState(false)
  
   const dispatch = useDispatch<AppDispatch>()
 
 
   const handleLogout = () =>{
    RemoveLocalStorage("AuthToken")
    dispatch(logout())
    setOpen(false)
    navigate("/login",{replace:true})
  }
  return (
    <div>
         <div className="h-18 text-white flex items-center justify-between px-6 ml-2 rounded-[10px] shadow" style={{backgroundColor:COLORS.primary_blue}}>
      <div className='hidden sm:inline'>
        <h4 className="font-medium">Welcome, Dr. Ramesh Krishnan</h4>
        <p className="text-xs text-white/70">
          Employee ID: EMP2024000
        </p>
      </div>

    <div className='flex gap-2'>
        <img
        src={profileimg}
        alt="profile"
        className="w-10 h-10 rounded-full"
        onClick={()=>{
          setProfileOpen(true)
           setOpen(false)
          }
        }
      /> 


      <button className='w-10 h-10 rounded-full bg-white flex items-center justify-center'>
        <img src={logouticon} alt='log' className='flex items-center' onClick={()=>setOpen(true)}/> 
      </button>
        </div>  
    </div>
     
     {profileOpen && (
       <Profilepage onClose={()=> setProfileOpen(false)} />
     )}

     {open && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white  rounded-lg shadow-lg p-6 relative overflow-y-auto">
      
         <p>Are you sure want to log out?</p>
         <div className='flex justify-between pt-2 gap-5'>
           <button onClick={()=>setOpen(false)}
            className='flex-1 rounded px-4 py-2'
            style={{color:COLORS.primary_blue, 
                    border:`1px solid ${COLORS.primary_blue}`,
                    backgroundColor:"transparent"
            }}
            >cancel</button>
           <button  className='flex-1 rounded px-4 py-2' onClick={handleLogout}
            style={{color:COLORS.secondary_white, 
                    backgroundColor:COLORS.primary_blue
            }}>Logout</button>
         </div>
      </div>

      </div>
     )}

    </div>
  )
}

export default Navbar