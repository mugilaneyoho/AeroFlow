
import type React from "react"
import profileimg from "../../assets/admisson/profileimg.png"
import eyeicon from "../../assets/admisson/eyeiconView.png"

type ViewStudentProps = {
    open:any
    setOpen:React.Dispatch<React.SetStateAction<any>>
}
const ViewStudent = ({ open , setOpen }:ViewStudentProps) => {
  return (
    <div>
  
    <div className="fixed inset-0 bg-black/50 z-40" onClick={()=>setOpen(null)} />
    <div className="fixed inset-0 flex justify-center items-center z-50">
     <div className='bg-white p-6 rounded shadow-lg w-[40%] h-[90%] relative pointer-events-auto overflow-y-auto'>
         <div className="flex justify-between items-start">
        <div>
          <h1 className='font-semibold text-xl'>View student details</h1>
          <p className='text-sm'>View student of your institute training program</p>
        </div>
        
      </div>

      <div className="flex justify-around p-2  rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140] mt-4">
      <div>
        <h1 className='pb-2 font-semibold'>Personal Details</h1> 
        <p className='pb-2 text-sm'>View Student Image*</p>
       <div className="relative inline-block">
        <img src={profileimg} alt="image" className="p-5  object-cover"/>
        <img src={eyeicon} className="absolute bottom-4 right-5  cursor-pointer"/>
        </div> 
        </div>  
        <div className="flex  flex-col gap-2 justify-center">
          <p className='flex gap-5 justify-between'>Student Name:  <strong>{open.student_name}</strong> </p>
          <p className='flex gap-5 justify-between'>Student ID: <strong>{open.student_id}</strong></p>
          <p className='flex gap-5 justify-between'>Email: <strong>{open.email}</strong></p>
          <p className='flex gap-5 justify-between'>mobile no: <strong>{open.phone_number}</strong></p>
        </div>
      </div>


<div className="p-2 rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140] mt-4"> 
    <h3 className="font-semibold mb-3">Educational Details</h3> 
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> 
        <div className="flex flex-col gap-1"> 
            <label className="text-sm text-black">Course*</label> 
            <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Experience*" defaultValue={"Full stack development"} /> </div>
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Batch*</label> 
             <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Experience*" defaultValue={"Evening"} /> </div> 
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Education Qualification*</label> 
                <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Education Qualification*" defaultValue={open.qualification} /> </div> 
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Class mode*</label> 
                <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Education Qualification*" defaultValue={"online"} /> </div>
              <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Admission Date*</label> 
                <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Education Qualification*" defaultValue={"12/20/2025"} /> </div> 
              </div>
              </div>

    <div className="p-2 rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140] mt-4">
  <h3 className="font-semibold mb-3">Fee Information</h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

   
    <div className="flex flex-col gap-1">
      <label className="text-sm text-black">Total Fee*</label>
      <input
        className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
        defaultValue="₹75,000"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm text-black">Paid Amount*</label>
      <input
        className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
        defaultValue="₹10,000"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm text-black">Pending Amount*</label>
      <input
        className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
        defaultValue="₹65,000"
      />
    </div>


    <div className="flex flex-col gap-1">
      <label className="text-sm text-black">Payment Status*</label>

     <div className="flex items-center gap-2">
  <div className="rounded w-[60%] h-2 bg-[#D9D9D9] relative">
    <div
      className="h-2 rounded bg-[#46278F]"
      style={{ width: `${open.paidPercentage}%` }}
    />
  </div>

  <p className="text-xs text-[#46278F] whitespace-nowrap mt-1">
    {open.paidPercentage}% Paid
  </p>
</div>
    </div>

  </div>
</div>

     
      <div className='flex justify-end mt-4 '  >
         <button className='p-1 bg-[#D20F0F] text-[#FFFFFF] rounded-[5px] ' onClick={()=>setOpen(null)}>cancel</button>
      </div>
    </div>
    </div>

    </div>
  )
}

export default ViewStudent