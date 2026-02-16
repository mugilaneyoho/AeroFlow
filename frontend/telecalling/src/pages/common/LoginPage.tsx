import React, { useRef, useState } from 'react'
import bg from '../../assets/image 5.png'
import logo from '../../assets/logo1.png'
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import ToggleSwitch from '../../components/ui/ToggelButton';
import { useTelecallerLoginMutation } from '../../services/api';

const LoginPage:React.FC = () => {

    const emailRef = useRef<HTMLInputElement | null>(null)
    const passRef = useRef<HTMLInputElement | null>(null)

    const [isAdmin, setisAdmin] = useState(false);

    const [teleLogin,{data,isLoading}] = useTelecallerLoginMutation()

    const handellogin =()=>{

        const email = emailRef.current?.value
        const password = passRef.current?.value

        const obj = {
            isAdmin,
            email,
            password,
        }

        teleLogin(obj)

        if (data) {
            console.log(data)
        }
    }

  return (
    <div className='flex flex-col w-screen h-screen text-center items-center bg-cover' style={{backgroundImage: `url(${bg})`}}>
        <div className='flex flex-col gap-5 mt-16'>
            <div className='w-96 h-96 bg-white p-4 rounded-[50%]'>
            <img src={logo} alt="" className=' mask-cover'/>
            </div>
            <p className='font-bold text-4xl text-white'>TeleCaller's Portal</p>
        </div>
        <div className='flex flex-col gap-5 mt-5 w-80'>
            <div className='flex flex-row gap-5 p-2 items-center rounded-xl bg-white'>
                <CiMail/>
                <input type="text" ref={emailRef} className='w-full focus:outline-none' placeholder='enter your email'/>
            </div>
            <div className='flex flex-row gap-5 p-2 items-center rounded-xl bg-white justify-between'>
                <div className='flex flex-row items-center gap-5'>
                <CiLock/>
                <input type="text" ref={passRef} className='w-full focus:outline-none' placeholder='enter your password'/>
                </div>
                <IoEyeOutline/>
            </div>

            <div className='flex flex-row gap-2 justify-end'>
                <p className='text-xl text-white font-bold'>Admin</p>
                <ToggleSwitch checked={isAdmin} onToggle={setisAdmin}/>
            </div>

            <button onClick={handellogin} disabled={isLoading} className={`bg-[#1F338C] text-white font-semibold text-xl border border-solid border-white rounded-2xl py-2 w-full ${isLoading ? 'cursor-none' :'cursor-pointer'}`}>
                LOGIN NOW
            </button>
        </div>
    </div>
  )
}

export default LoginPage