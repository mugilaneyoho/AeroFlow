import React, { useState } from 'react'
import plus from '../../assets/Frame.png'
import TeleCallerCard from '../../components/ui/TeleCallerCard'
import search from '../../assets/search-normal.png'
import Dropdown from '../../components/ui/DropDown'
import TeleCallerCreateForm from '../../features/telecaller/TeleCallerCreateForm'
import Modal from '../../components/shared/Models'
import { useGetTeleCallerQuery } from '../../services/RTKQuery/TeleCaller'
import type { TeleCallerProfile } from '../../types/TeleCallerTypes'

const Telecaller:React.FC = () => {
  const [Form, setForm] = useState<boolean>(false);

  const {data,isLoading,error} = useGetTeleCallerQuery('telecallerapi')

  const CloseForm =()=>{
    setForm(false)
  }
  return (
    <div className='w-full h-full bg-white p-2 flex flex-col gap-5'>
      <div className='flex flex-row justify-between'>
        <div>
          <p className='font-semibold text-2xl'>Tele-Caller Management</p>
          <p className='font-normal text-[#595555] text-xl'>Create and manage tele-caller accounts</p>
        </div>
        <div className='flex flex-row items-center gap-5 px-6 py-2 border-2 border-solid border-[#1F338C] rounded-2xl cursor-pointer' onClick={()=>setForm(true)}>
          <img src={plus} alt="" className='w-8 h-8'/>
          <p className='text-[#1F338C] text-xl font-medium'>Create Tele-Caller</p>
        </div>
      </div>

      <div className='w-full flex flex-row justify-between'>
        <div className='flex flex-row gap-2 items-center border border-solid border-[#716F6F] rounded-lg w-96 px-2'>
          <img src={search} alt="" className='w-6 h-6'/>
          <input 
            type="text" 
            className='text-xl p-2 w-full focus:outline-none'
            placeholder='Search..'
          />
        </div>
        <div>
          <Dropdown/>
        </div>
      </div>

      <div className='grid xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2 gap-5 w-full'>
        {
          data?.data?.map((data:TeleCallerProfile)=>(
            <TeleCallerCard data={data}/>
          ))
        }
      </div>

      <Modal isOpen={Form} children={<TeleCallerCreateForm OnClose={setForm}/>} onClose={CloseForm}/>

    </div>
  )
}

export default Telecaller