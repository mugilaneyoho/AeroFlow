import React from 'react'
import logo from '../../assets/icons/profile.svg'
import close from '../../assets/closse.png'
import ToggleSwitch from '../../components/ui/ToggelButton'
import {useFormik} from 'formik'
import { useCreateTeleCallerMutation } from '../../services/RTKQuery/TeleCaller'

type props = {
  OnClose:(data:boolean)=>void;
}

const TeleCallerCreateForm: React.FC<props> = ({OnClose}) => {
  const [CreateTelecaller,{data,isSuccess,isLoading}] = useCreateTeleCallerMutation()

  const formik = useFormik({
    initialValues: {
      employee_name: '',
      emp_id: '',
      phone_number: '',
      alter_number: '',
      email: '',
      address: '',
      education: '',
      work_exp: '',
      image: '',
      password: '',
    },
    onSubmit: async (value) => {
      await CreateTelecaller(value)
      OnClose(!isSuccess)
    }
  })

  return (
    <div className='flex flex-col w-[80vh] h-[90vh] overflow-y-scroll relative gap-5 shadow-[0px_0px_14px_0px_#00000040] bg-white rounded-lg p-4' style={{scrollbarWidth:'none'}}>
      <form onSubmit={formik.handleSubmit} className='flex flex-col gap-5'>
      <div className='w-full flex flex-col gap-5 *:py-4 *:px-4 **:focus:outline-none'>
        <div className='flex flex-col w-full gap-2 relative border-b border-solid border-[#7B797F]'>
           <img src={close} alt="" className=' absolute right-0' onClick={()=>OnClose(false)}/>
           <img src={logo} alt="" className='w-40 h-40'/>
           {/* <div className='flex flex-row justify-between text-xl font-semibold'>
            <p>Priya Sharma</p>
            <ToggleSwitch/>
           </div>
            <p>TC001</p> */}
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Employee Id</label>
          <input type="text" name='emp_id' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg'
            onChange={formik.handleChange} value={formik.values.emp_id}
           />
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Full Name</label>
          <input type="text" name='employee_name' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg'
            onChange={formik.handleChange} value={formik.values.employee_name}
           />
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Mobile Name</label>
          <input type="text" name='phone_number' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg' 
            onChange={formik.handleChange} value={formik.values.phone_number}
          />
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Mail Id</label>
          <input type="text" name='email' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg' 
            onChange={formik.handleChange} value={formik.values.email}
          />
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Login password</label>
          <input type="text" name='password' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg' 
            onChange={formik.handleChange} value={formik.values.password}
          />
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Work Experience</label>
          <input type="text" name='work_exp' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg' 
            onChange={formik.handleChange} value={formik.values.work_exp}
          />
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Address</label>
          <input type="text" name='address' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg' 
            onChange={formik.handleChange} value={formik.values.address}
          />
        </div>
        <div  className='w-full grid grid-cols-2 border-b border-solid border-[#7B797F]'>
          <label className='font-medium text-lg'>Education Qualification</label>
          <input type="text" name='education' className='border border-solid border-[#79747E] p-2 placeholder:text-[#00000099] bg-[#F5F5F5] rounded-lg' 
            onChange={formik.handleChange} value={formik.values.education}
          />
        </div>
      </div>

      <div className='flex flex-row justify-end'>
      <div className='flex flex-row gap-5'>
        <button type="button" onClick={()=>OnClose(false)} className='bg-[#F8F8F8] border border-solid borer-[#1F338C4D] w-40 px-4 py-1 rounded-lg cursor-pointer'>Cancel</button>
        <button type="submit" className={`text-white bg-[#1F338C] border-solid border-[#1F338C] w-40 px-4 py-1 rounded-lg ${isLoading ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        disabled={isLoading}
        >{isLoading ? 'Saving..' : 'Save'}</button>
      </div>
      </div>
      </form>
    </div>
  )
}

export default TeleCallerCreateForm