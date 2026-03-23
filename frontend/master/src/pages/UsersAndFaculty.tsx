/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { UserCard } from "../dummyData/userfaculty"
import plus from "../assets/userfaculty/plus.png"
import CreateUserFaculty from '../components/userFaculty/CreateUserFaculty'
import { UserDetail } from "../dummyData/userfaculty"
import editicon from "../assets/userfaculty/edit.png"
import deleteicon from "../assets/userfaculty/delete.png"
import viewicon from "../assets/userfaculty/view.png"
import search from "../assets/userfaculty/search.png"

import { type AppDispatch } from '../store/store'
import { useDispatch, useSelector } from "react-redux"
import { getUserThunk } from "../features/reducer/userthunk"
import { selectUser } from "../features/reducer/userselector"


const UsersAndFaculty = () => {
  const [createshowmodel, setcreateshowmodel] = useState(false)
  const [user, setuser] = useState(UserDetail)
  const [searchTerm, setSearchTerm] = useState("")
  const adduser = (newuser: any) => {
    setuser([...user, newuser])
  }


  const dispatch = useDispatch<AppDispatch>()
  const userselector = useSelector(selectUser)


  useEffect(() => {
    dispatch(getUserThunk())
  }, [dispatch])

  return (
    <div className='overflow-hidden flex flex-col gap-5'>
      <div className='flex justify-between'>
        <div>
          <h1 className='font-bold text-xl'>User & Faculty Management</h1>
          <p>Create and manage all institute users with complete control</p>
        </div>
        <div className='border rounded-md px-2 flex gap-2 bg-[#54191D]'>
          <div className={`flex items-center justify-center text-center`}>
            <img src={plus} className='w-6 h-6' />
          </div>
          <button onClick={() => { setcreateshowmodel(true) }} className='text-[#EDBF5C] cursor-pointer'>Create User&Faculty</button>
        </div>
      </div>

      <div className='grid sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-5'>
        {UserCard?.map((data: any, index: any) => {
          return (
            <div key={index} className=' bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 grid gap-2 rounded-xl'>
              <div className='flex justify-between gap-3'>
                <div className={`rounded-md p-2 ${data.title === "HODs" ? "bg-[#FBE7BB]" : data.title === "Staff" ? "bg-[#FBE7BB]" : data.title === "Tele-Callers" ? "bg-[#DBEAFE]" : data.title === "Receptionists" ? "bg-[#DCFCE7]" : " bg-red-200"}`}>
                  <img src={data.icon} className='w-6 h-6' />
                </div>
                <div className='font-bold text-xl'>{data.value}</div>
              </div>
              <div>
                {data.title}
              </div>
            </div>
          )
        })}
      </div>

      <div className=' p-2 rounded-xl bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)]'>
        <div className='flex flex-col md:flex-row gap-4'>
          <div className='w-full md:w-[70%] xl:w-[90%] grid md:gap-5 gap-2'>
            <div>
              <h1 className='font-bold'>Search Staff</h1>
            </div>
            <div className='border border-[#4A5565] rounded-md flex gap-2 p-2'>
              <img src={search} className='w-5 h-5 mt-2' />
              <div className=' rounded-md flex gap-2 p-2 w-full'>
                <input type="text" name="search" placeholder="Search by name, email, phone etc..." className="outline-none w-full" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
              </div>
            </div>
          </div>
          <div className='w-full md:w-[30%] xl:w-[20%] grid md:gap-3 gap-2'>
            <div>
              <h1 className='font-bold'>All Rolls</h1>
            </div>
            <select className='border border-[#4A5565]  rounded-md p-2'>
              <option value="ALL ROLES">All roles</option>
              <option value="HOD">HOD</option>
              <option value="STAFF">Staff</option>
              <option value="TELECALLER">Telecaller</option>
              <option value="RECEPTIONIST">Receptionist</option>
            </select>
          </div>
        </div>
      </div>

      <div className='rounded-xl p-2  bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)]'>
        <div className=' bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-md px-4 **:text-md py-2 **:font-bold flex justify-between'>
          <h1>NAME</h1>
          <h1>EMAIL</h1>
          <h1>ROLE</h1>
          <h1>ACTIONS</h1>
        </div>

        <div className=' rounded-md mt-4 px-5 py-2 flex flex-col justify-between'>
          {userselector?.map((data: any, index: any) => {
            return (
              <div key={index} className='flex justify-between border-b pb-5 mb-5'>
                <p className='text-sm'>{data.name}</p>
                <p className='text-sm'>{data.email}</p>
                <p className='text-sm'>{data.role?.role}</p>
                <div className='flex gap-2'>
                  <div className='rounded-md p-1 bg-[#008BBF]'>
                    <img src={editicon} className='w-4 h-4' />
                  </div>
                  <div className='rounded-md p-1 bg-[#FF4C4C]'>
                    <img src={deleteicon} className='w-4 h-4' />
                  </div>
                  <div className='rounded-md p-1 bg-[#20D432]'>
                    <img src={viewicon} className='w-4 h-4' />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <div >
        {createshowmodel &&
          <CreateUserFaculty setcreateshowmodel={setcreateshowmodel} adduser={adduser} />}
      </div>
    </div>
  )
}

export default UsersAndFaculty
