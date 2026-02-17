import React from 'react'
import profil from '../../assets/icons/profile.svg'
import close from '../../assets/closse.png'
import { GiConfirmed } from "react-icons/gi";
import { useDeleteTeleCallerMutation, useGetTeleCallerByUUIDQuery } from '../../services/RTKQuery/TeleCaller';
import { toast } from 'react-toastify';

type props = {
    closeview: (data: boolean) => void;
    tabType: string;
    uuid:string;
}

const ViewTeleCaller: React.FC<props> = ({ closeview, tabType, uuid }) => {

    const {data,isLoading} = useGetTeleCallerByUUIDQuery(uuid,{
        skip:!uuid
    })

    const [DeletedTeleCallersApi,{data:deleteres,isSuccess}] = useDeleteTeleCallerMutation()

    const DeleteteleCaller =async(uuid:string)=>{
        await DeletedTeleCallersApi(uuid)
        toast.success('employee deleted success')
        closeview(false)
    }

    return (
        <div className='w-[60vh] h-[50vh] p-4 bg-white rounded-xl shadow-[0px_0px_14px_0px_#00000040_inset]'>
            {
                tabType === 'view' ? <>
                    <div className='flex flex-row gap-10 relative p-2 items-center border-b-2 border-solid border-[#00000033]'>
                        <img src={close} onClick={()=>closeview(false)} alt="" className='absolute right-0 top-0 cursor-pointer' />
                        <div onClick={() => closeview(false)} className='cursor-pointer'>
                            <img src={data?.data?.image === '' ? profil : data?.data.image} alt="" className='w-44 h-44' />
                        </div>
                        <div className='flex flex-col gap-10'>
                            <p className='font-semibold text-4xl'>{data?.data.employee_name}</p>
                            <div className='flex flex-row gap-10'>
                                <p className='font-medium text-xl'>{data?.data?.emp_id}</p>
                                <p className='text-[#1AAA28] font-medium text-xl'>{
                                    data?.data?.is_active ? 'Active' : 'Inactive' 
                                }</p>
                            </div>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 p-4 gap-5'>
                        <p className='text-[#7B797F] font-light text-xl'>Mobile</p>
                        <p className='font-normal text-xl'>{data?.data.phone_number}</p>
                        <p className='text-[#7B797F] font-light text-xl'>Email</p>
                        <p className='font-normal text-xl'>{data?.data.email}</p>
                        <p className='text-[#7B797F] font-light text-xl'>Work Experience</p>
                        <p className='font-normal text-xl'>{data?.data.work_axp}</p>
                        <p className='text-[#7B797F] font-light text-xl'>Address</p>
                        <p className='font-normal text-xl'>{data?.data.address}</p>
                        <p className='text-[#7B797F] font-light text-xl'>Qualification</p>
                        <p className='font-normal text-xl'>{data?.data.education}</p>
                    </div>
                </>
                    : <>
                        <div className='w-full h-[20vh] bg-[#1F338C] flex justify-center items-end p-6 text-white text-6xl font-light'>
                            <GiConfirmed />
                        </div>
                        <div className='p-4 flex flex-col gap-5 justify-center items-center'>
                            <p className='text-4xl font-semibold'>Are you sure?</p>
                            <p className='text-2xl'>Do you want to delete</p>
                            <div className='flex flex-row gap-10'>
                                <div onClick={()=>closeview(false)} className='bg-[#F8F8F8] text-2xl px-10 py-2 border border-[#1F338C4D] rounded-xl cursor-pointer'>No</div>
                                <div onClick={()=>DeleteteleCaller(data?.data?.uuid)} className='bg-[#1F338C] text-2xl px-10 text-white py-2 border border-[#1F338C] cursor-pointer rounded-xl'>Yes</div>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}

export default ViewTeleCaller