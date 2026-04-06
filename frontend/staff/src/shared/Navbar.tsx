import React, { useState } from 'react'
import profileimg from '../assets/images/profile_img.png'
import logoutimg from '../assets/images/logout.png'
import { COLORS, FONTS } from '../constant'
import { useNavigate } from 'react-router-dom'
import Profilepage from '../component/profile/Profilepage'
import { RemoveLocalStorage } from '../utils/SecureStorage'
import { useAuth } from '../context/AuthUseContext'

// import { logout } from '../features/login/reducer/authSlice'

const Navbar:React.FC = () => {
   const navigate = useNavigate()
   const[open,setOpen] = useState(false)
   const [profileOpen , setProfileOpen] = useState(false)
   const { logout: authLogout } = useAuth();
   
   const handleLogout = () =>{
    RemoveLocalStorage("AuthToken")
    authLogout();
    setOpen(false)
    navigate("/login",{replace:true})
  }
 
  return (
    <div>
        <div className="h-18 flex items-center justify-between px-6 m-2 rounded-[10px] shadow" style={{boxShadow:COLORS.shadow_violet,color:COLORS.primary_violet}}>
      <div className='hidden sm:inline md:inline'>
        <h4 className="font-medium text-lg whitespace-nowrap" style={{color:COLORS.primary_violet,...FONTS.header}}>Welcome Back, Mrs. Sarah</h4>
        <p className="text-xs hidden md:block" style={{color:COLORS.primary_violet,...FONTS.subheader}}>
          Assigned Batches: 3
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


      <button className='w-10 h-10 rounded-full flex items-center justify-center' style={{background:COLORS.primary_violet}}>
        <img src={logoutimg} alt='log' className='flex items-center' onClick={()=>setOpen(true)}/> 
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
            style={{color:COLORS.primary_violet, 
                    border:`1px solid ${COLORS.primary_violet}`,
                    backgroundColor:"transparent"
            }}
            >cancel</button>
           <button  className='flex-1 rounded px-4 py-2' onClick={handleLogout}
            style={{color:COLORS.secondary_white, 
                    backgroundColor:COLORS.primary_violet
            }}>Logout</button>
         </div>
      </div>

      </div>
     )}

    </div>
  )
}

export default Navbar