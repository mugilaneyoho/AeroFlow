import React, { useState } from 'react'
import logo from '../../assets/icons/profile.svg'
import menu from '../../assets/Frame.svg'
import ToggleSwitch from './ToggelButton'
import edit from '../../assets/edit.png'
import view from '../../assets/view.png'
import dele from '../../assets/delete.png'
import type { TeleCallerProfile } from '../../types/TeleCallerTypes'
import Modal from '../shared/Models'
import ViewTeleCaller from '../../features/telecaller/ViewTeleCaller'

type props = {
    data:TeleCallerProfile;
    setuuid?:(data:string)=>void;
    setform?:(data:boolean)=>void;
}

const TeleCallerCard: React.FC<props> = ({data ,setuuid,setform}) => {
    const [menuOption, setmenuOption] = useState<boolean>(false);
    const [views, setview] = useState(false);
    const [deletes, setdelete] = useState(false);

    const OpenMenu = () => {
        setmenuOption(!menuOption)
    }

    const CloseView=()=>{
        setview(false)
        setmenuOption(false)
    }

    const CloseDelete=()=>{
        setdelete(false)
        setmenuOption(false)
    }

    return (
        <div key={data?.uuid} className='w-full h-max p-4 bg-white shadow-[0px_0px_14px_0px_#1F338C_inset] rounded-2xl'>
            <div className='flex relative justify-center pt-2'>
                <img src={menu} alt="" className='w-10 h-10 absolute right-0 cursor-pointer' onClick={OpenMenu} />
                {
                    menuOption && <div className="bg-white flex flex-col gap-2 p-2 absolute right-8 shadow-[0px_4px_12px_2px_#00000040] rounded-xl">
                        <div onClick={()=>{setview(true);setmenuOption(false); setuuid?.(data?.uuid);}} className='flex flex-row gap-2 items-center bg-[#F8F8F8] hover:text-white hover:bg-[#1F338C] focus:bg-[#1F338C] px-4 py-1 rounded-lg border border-[#145420] hover:border-[#1F338C] cursor-pointer'>
                            <img src={view} alt="" className='w-3 h-3' />
                            <p>View</p>
                        </div>
                        <div onClick={()=>{setuuid?.(data?.uuid); setform?.(true); setmenuOption(false)}} className='flex flex-row gap-2 items-center bg-[#F8F8F8] hover:text-white hover:bg-[#1F338C] focus:bg-[#1F338C] px-4 py-1 rounded-lg border border-[#145420] hover:border-[#1F338C] cursor-pointer'>
                            <img src={edit} alt="" className='w-3 h-3' />
                            <p>Edit</p>
                        </div>
                        <div onClick={()=>{setdelete(true); setuuid?.(data?.uuid);}} className='flex flex-row gap-2 items-center bg-[#F8F8F8] hover:text-white hover:bg-[#1F338C] focus:bg-[#1F338C] px-4 py-1 rounded-lg border border-[#145420] hover:border-[#1F338C] cursor-pointer'>
                            <img src={dele} alt="" className='w-3 h-3' />
                            <p>Delete</p>
                        </div>
                    </div>
                }
                <img src={logo} alt="" className='w-32 h-32' />
            </div>
            <div className='flex flex-col gap-2 p-4'>
                <div className='flex flex-row justify-between items-center'>
                    <p className='font-semibold text-2xl'>{data?.employee_name}</p>
                    <ToggleSwitch checked={data?.is_active || false} />
                </div>
                <p className='font-medium text-lg'>{data?.emp_id}</p>
                <p className='font-medium text-lg'>{data?.phone_number}</p>
                <p className='font-medium text-lg'>{data?.email}</p>
            </div>
            {
                view && <Modal isOpen={views} children={<ViewTeleCaller tabType='view' closeview={setview} uuid={data?.uuid}/>} onClose={CloseView}/>
            }
            {
                deletes && <Modal isOpen={deletes} children={<ViewTeleCaller tabType='delete' closeview={setdelete} uuid={data?.uuid} />} onClose={CloseDelete} />
            }
        </div>
    )
}

export default TeleCallerCard