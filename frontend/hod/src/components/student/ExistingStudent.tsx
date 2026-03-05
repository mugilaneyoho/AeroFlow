
import React, { useState } from 'react';
import { COLORS } from '../../constant';
import closeimg from '../../assets/icons/closeedit.png'
import image from '../../assets/student/studentviewimg.png'


interface Props {
  students: any[];
}


const ExistingStudent: React.FC<Props> = ({ students }) => {
  // const [students] = useState<Student[]>([
  //   {
  //     id: 'IMS001',
  //     name: 'Ragul',
  //     email: 'ragul@gmail.com',
  //     batch: 'Evening',
  //     course: 'Full Stack Development',
  //     classMode: 'Online',
  //     timing: '02:00PM-04:00PM',
  //     mobileno:"9876543210",
  //      paidPercentage: 88
      
  //   },
  //   {
  //     id: 'IMS002',
  //     name: 'Rajesh',
  //     email: 'rajesh@gmail.com',
  //     batch: 'Morning',
  //     course: 'UI/UX Designer',
  //     classMode: 'Offline',
  //     timing: '10:00AM-12:00PM',
  //      paidPercentage: 78,
  //       mobileno:"9876543210",
  //   },
  //   {
  //     id: 'IMS003',
  //     name: 'Suresh',
  //     email: 'suresh@gmail.com',
  //     batch: 'Evening',
  //     course: 'Digital Marketing',
  //     classMode: 'Online',
  //     timing: '04:00PM-06:00PM',
  //     paidPercentage: 98,
  //      mobileno:"9876543210",
  //   },
  //   {
  //     id: 'IMS004',
  //     name: 'Ram',
  //     email: 'ram@gmail.com',
  //     batch: 'Morning',
  //     course: 'Digital Marketing Data Analysts',
  //     classMode: 'Offline',
  //     timing: '09:00AM-11:00AM',
  //      paidPercentage: 68,
  //       mobileno:"9876543210",
  //   },
  // ]);

  const [open, setOpen] = useState<any>(null);

  return (
    <div>
      <div className='rounded-[10px] shadow-[0px_0px_10px_0px_#00000040] mt-6 '>
        <div className='p-4 mb-4 rounded-[10px]'>
          <div className=''>
            <table className='w-full border-separate border-spacing-y-3'>
              <thead
                style={{ backgroundColor: COLORS.primary_blue, color: COLORS.secondary_white }}
                className='text-left p-2 rounded-[10px]'
              >
                <tr className='text-left p-2 rounded-[10px]'>
                  <th className='p-3 rounded-l-[10px]'>ID</th>
                  <th className='p-3'>Name</th>
                  <th className='p-3'>Email</th>
                  <th className='p-3'>Batch</th>
                  <th className='p-3'>Course</th>
                  <th className='p-3'>Class mode</th>
                  <th className='p-3'>Timing</th>
                  <th className='p-3'>Attendance</th>
                  <th className='p-3 rounded-r-[10px]'>Action</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr
                    key={student.id}
                    className='rounded-[10px] shadow'
                    style={{ backgroundColor: COLORS.gray_bg }}
                  >
                    <td className='p-3 rounded-l-[10px]'>{student.student_id}</td>
                    <td className='p-3'>{student.student_name}</td>
                    <td className='p-3'>{student.email}</td>
                    <td className='p-3'>{student.batch_id}</td>
                    <td className='p-3'>{student.qualification}</td>
                    <td className='p-3'>{student.classMode}</td>
                    <td className='p-3'>{student.timing}</td>
                    <td>
                        <div className="flex items-center gap-2">
  <div className="rounded w-[60%] h-2 bg-[#D9D9D9] relative">
    <div
      className="h-2 rounded bg-[#46278F]"
      style={{ width: `${student.paidPercentage}%` }}
    />
  </div>

  <p className="text-xs text-[#46278F] whitespace-nowrap mt-1">
    {student.paidPercentage}% Paid
  </p>
</div>
                    </td>
                    <td className='p-3 rounded-r-[10px]'>
                      <div className='flex gap-2 items-center'>
                        <button onClick={()=>setOpen(student)} className='rounded bg-[#342E8F] text-white px-3 py-1'>
                          View
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      {open && (
  <>
    <div className="fixed inset-0 bg-black/50 z-40" onClick={()=>setOpen(null)} />
    <div className="fixed inset-0 flex justify-center items-center z-50">
     <div className='bg-white p-6 rounded shadow-lg w-[40%] h-[90%] relative pointer-events-auto overflow-y-auto'>
         <div className="flex justify-between items-start">
        <div>
          <h1 className='font-semibold text-xl'>View student details</h1>
          <p className='text-sm'>View student of your institute training program</p>
        </div>
        <button
          onClick={()=>setOpen(null)}
          className="absolute top-2 right-2 font-bold"
        >
          <img src={closeimg} alt="close" className="w-4 h-4"/>
        </button>
      </div>

      <div className="flex justify-around p-2  rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140] mt-4">
      <div>
        <h1 className='pb-2 font-semibold'>Personal Details</h1> 
        <p className='pb-2 text-sm'>View Student Image*</p>
        <img src={image} alt="image" className="p-5  object-cover"/>
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
            <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Experience*" defaultValue={open.course} /> </div>
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Batch*</label> 
             <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Experience*" defaultValue={open.batch_id} /> </div> 
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Education Qualification*</label> 
                <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Education Qualification*" defaultValue={open.qualification} /> </div> 
             <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Class mode*</label> 
                <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Education Qualification*" defaultValue={open.classMode} /> </div>
            <div className="flex flex-col gap-1">
      <label className="text-sm text-black">Attendance</label>

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
              <div className="flex flex-col gap-1"> 
                <label className="text-sm text-black">Admission Date*</label> 
                <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Education Qualification*" defaultValue={"online"} /> </div> 
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
        defaultValue="₹500"
      />
    </div>

    <div className="flex flex-col gap-1">
      <label className="text-sm text-black">Pending Amount*</label>
      <input
        className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
        defaultValue="₹74,500"
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
  </>
)}

   
</div>
    </div>
  )
}


export default ExistingStudent