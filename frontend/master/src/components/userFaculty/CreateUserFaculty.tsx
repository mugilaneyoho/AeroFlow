import React, { useState } from 'react'
import { createUser } from '../../features/services'
import { useDispatch } from 'react-redux'
import type { AppDispatch } from '../../store/store'
import { getUserThunk } from '../../features/reducer/userthunk'


interface CreateUserFacultyProps {
  setcreateshowmodel: React.Dispatch<React.SetStateAction<boolean>>
  adduser:(user:any)=> void
}

const CreateUserFaculty: React.FC<CreateUserFacultyProps> = ({setcreateshowmodel, adduser}) => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [role, setrole] = useState("")
    const [password, setpassword] = useState("")
    const dispatch = useDispatch<AppDispatch>()

    
    const handlchange= async()=>{
        const newuser={name, email, role, password}
        try {
            const createResponse = await createUser(newuser)
            adduser(createResponse)
            setcreateshowmodel(false)
            dispatch(getUserThunk())
        } catch (error) {
            console.log("error in createResponse :", error)
        }
    }
 
    return (
    <div className='fixed inset-0 flex items-center justify-center mt-20'>
        <div className='w-130 h-120 bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] p-4 flex flex-col gap-5'>
            <div>
                <h1 className='font-bold'>Create New Users</h1>
                <p>Add a new users to your institute training program</p>
            </div>

            <div className='bg-[#FFFFFF] shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-xl p-3'>
                <div>
                    <h1 className='font-bold'>Personal Details</h1>
                    <p>Upload Staff Image</p>
                </div>
                <div>
                    <h1 className='border bg-[#D9D9D9] w-20 h-20 rounded-full p-5'/>
                    
                </div>

                <div className='flex flex-2 gap-3'>
                    <div className='grid w-[50%]'>
                        <label htmlFor="name">name</label>
                        <input type='text' id='name' placeholder='Enter name' className='border p-2' onChange={(e)=>setname(e.target.value)}/>
                    </div>
                    <div className='grid w-[50%]'>
                        <label htmlFor="role">Role</label>
                        <select name="" id="role" className='border p-2' onChange={(e)=>setrole(e.target.value)}>
                            <option value="">selecte role</option>
                            <option value="SUBADMIN">sub-admin</option>
                            <option value="TELEADMIN">telecaller admin</option>
                            <option value="HOD">HOD</option>
                            <option value="RECEPTION">reception</option>
                        </select>
                        {/* <input type='text' id='role' placeholder='Enter role' className='border p-2' onChange={(e)=>setrole(e.target.value)}/> */}
                    </div>
                </div>
                <div className='flex flex-2 gap-3'>
                    <div className='grid w-[50%]'>
                        <label htmlFor="email">Email</label>
                        <input type='email' id='email' placeholder='Enter email' className='border p-2' onChange={(e)=>setemail(e.target.value)}/>
                    </div>
                    <div className='grid w-[50%]'>
                        <label htmlFor="password">Password</label>
                        <input type='password' id='password' placeholder='Enter password' className='border p-2' onChange={(e)=>setpassword(e.target.value)}/>
                    </div>
                </div>
            </div>

            <div className='flex justify-end gap-5 **:px-4 **:p-2 **:rounded-md text-white'>
                <button type='button' onClick={handlchange} className=' bg-[#20D432]'>Create</button>
                <button type='button' onClick={()=>{setcreateshowmodel(false)}} className=' bg-[#D20F0F]'>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default CreateUserFaculty
