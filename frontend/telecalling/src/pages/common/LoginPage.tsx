import React from 'react'
import bg from '../../assets/image 5.png'
import logo from '../../assets/logo1.png'
import { CiLock } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";

const LoginPage:React.FC = () => {
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
                <input type="text" className='w-full focus:outline-none'/>
            </div>
            <div className='flex flex-row gap-5 p-2 items-center rounded-xl bg-white justify-between'>
                <div className='flex flex-row items-center gap-5'>
                <CiLock/>
                <input type="text" className='w-full focus:outline-none'/>
                </div>
                <IoEyeOutline/>
            </div>

            <div className='bg-[#1F338C] text-white font-semibold text-xl border border-solid border-white rounded-2xl py-2 w-full cursor-pointer'>
                LOGIN NOW
            </div>
        </div>
    </div>
  )
}

export default LoginPage