import React, { useState } from "react";
import threedot from '../../assets/staff/three-dots.png'
import hastagimg from '../../assets/staff/hastag.png'
import timeimage from '../../assets/staff/full-time.png'
import emailimg from '../../assets/staff/email.png'
import phoneimg from '../../assets/staff/phone.png'
import { COLORS } from "../../constant";
import closeimg from '../../assets/course/closeedit.png'
import EditStaff from "./EditStaff"
import blueeye from '../../assets/staff/blue_eye.png'
import blueedit from '../../assets/staff/blue_edit.png'
import redDelete from '../../assets/staff/red_delete.png'
import { useDispatch } from "react-redux";
import { DeleteStaffThunk, GetAllStaffThunk } from "../../features/staff/reduce/thunk";


interface StaffCardProps {
  uuid: string;
  image: string;
  name: string;  
  job: string;
  hastag: string;
  time: string;
  email: string;
  phone: string;
  status?: "Active" | "InActive";
  address: string;
}


const StaffCard: React.FC<StaffCardProps> = ({uuid, image, name,  job,  hastag, time, email,phone, status, address }) => {
  
     const[menuOpen , setMenuOpen] = useState(false)
    const[viewOpen , setViewOpen] =useState(false)
    const[editOpen , setEditOpen] = useState(false)
  
    const getStatusColor = () => {
    if (status === "Active") return COLORS.bg_drak_green;
    if (status === "InActive") return COLORS.bg_gray;
    return "gray";
  };
const dispatch = useDispatch<any>();

const handleDelete = async () => {
  await dispatch(DeleteStaffThunk(uuid)); 
  dispatch(GetAllStaffThunk()); 
};



  return (
   <div className="p-4 gap-4 rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140] bg-white text-sm relative">
       <div className="flex justify-between">
            <div>
                 <p className="p-2 rounded-[10px] text-sm" style={{ backgroundColor: getStatusColor(), color: "#fff" }}>
                 {status}
                 </p>
            </div>
            <button onClick={()=>setMenuOpen(prev => !prev)}>
                <img src={threedot} alt="threedot" className="w-5 h-5"/>
            </button>
       </div>
       <div className="p-2 flex flex-col justify-center items-center space-y-2">
            <img src={image} alt="image" />
            <p className="text-[#008BBF] font-medium">{name}</p>
            <p>{job}</p>
       </div>
       <div className="bg-[#F2F7FA] p-2">
             <div className="flex justify-between">
                 <div>
                   <span className="flex gap-1 pb-2 "><img src={hastagimg} alt="hastage" className="w-4 h-4"/>{hastag}</span> 
                 </div>
                 <div>
                    <span className="flex gap-1 pb-2"><img src={timeimage} alt="hastage" className="w-4 h-4"/>{time}</span>
                 </div>
             </div>

             <p className="flex gap-1 pb-2 text-[#008BBF]"><img src={emailimg} alt="email" className="w-4 h-4" />{email}</p>
              <p className="flex gap-1 text-[#008BBF]"><img src={phoneimg} alt="email" className="w-4 h-4" />{phone}</p>
       </div>

       {menuOpen && (
        
 <div className="absolute right-4 top-10 bg-white rounded shadow-[0px_0px_14px_0px_#2D216140] w-24 p-2 space-y-2">
           <button
              onClick={() => {
                setViewOpen(true)
                setMenuOpen(false);

              }}
              className="text-[#342E8F] border-[#342E8F] flex gap-1 border p-2 w-full rounded text-left px-3 py-2 hover:bg-gray-100"
            >
            <img src={blueeye} alt="eye" className="w-4 h-4"/>
              View
            </button>
            <button
              onClick={() => {
               setEditOpen(true)
                setMenuOpen(false);
              }}
              className=" text-[#008BBF] border-[#008BBF] flex gap-1 border p-2 w-full rounded text-left px-3 py-2 hover:bg-gray-100"
            >
                <img src={blueedit} alt="eye" className="w-4 h-4"/> Edit
            </button>
            <button
              onClick={() => {
                handleDelete()
                setMenuOpen(false);
              }}
              className="text-[#910A0A] border-[#910A0A] flex gap-1 border p-2 w-full rounded text-left px-3 py-2 hover:bg-red-100"
            >
               <img src={redDelete} alt="eye" className="w-4 h-4" />  Delete
            </button>
           
          </div>
           
       )}

       {viewOpen && (
         <div className="fixed inset-0 bg-black/50 bg-opacity-40 flex justify-center items-center z-50"> 
      <div className="bg-white p-4 sm:p-6 rounded shadow-lg w-[95%] sm:w-[80%] md:w-[60%] lg:w-[50%] relative max-h-[90vh] overflow-y-auto">

        
          <div className="flex justify-between">
            <h1>Personal Details</h1>
              <button
              onClick={() => setViewOpen(false)}
              className="absolute top-2 right-2 font-bold"
            >
              <img src={closeimg} alt="close" className="w-4 h-4"/>
            </button>
            </div>  
            <div className="flex justify-around p-2 ">
              <img src={image} alt="image" className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full"/>

                <div>
                       <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-2">

                     <div>
                        <h2 className="text-xl mb-4 font-medium">{name}</h2>
                        <p>{hastag}</p>
                        </div>   
                        
                        <p className="p-2 pb-2 rounded-[10px] text-sm h-fit" style={{ backgroundColor: getStatusColor(), color: "#fff" }}>
                          {status}
                        </p>
                        </div>
                        

                        <p className="flex justify-between gap-2 text-sm wrap-break-word">mobile no* <span>{phone}</span></p>
                        <p className="flex justify-between gap-2 text-sm wrap-break-word">Email* <span>{email}</span></p>
                         <p className="flex justify-between gap-2 text-sm wrap-break-word">Permanent Address <span>{address}</span></p>
                        
                </div>
                
            </div> 
           
           <hr className="w-full h-2 text-[#7C7C7C]" />
             <div>
            <h1>Professional Details</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pb-2 gap-3 text-sm">

                <p className="flex justify-between gap-2 text-sm wrap-break-word">Employment <strong>Full Time</strong></p>
                <p className="flex justify-between gap-2 text-sm wrap-break-word">Experience <strong>8 years</strong></p>
                <p className="flex justify-between gap-2 text-sm wrap-break-word">Educational qualification <strong>B.E.Computer Science</strong></p>
            </div>

            <div className="pt-2">
                <p className="pb-2">Expertise*</p>
              <div className="flex flex-wrap gap-2">
                <p className="bg-[#2D2161] text-white p-2">React</p>
                 <p className="bg-[#2D2161] text-white p-2">Node.js</p>
                  <p className="bg-[#2D2161] text-white p-2">Javascript</p>
                   <p className="bg-[#2D2161] text-white p-2">Angular</p>
                    <p className="bg-[#2D2161] text-white p-2">Python</p>
                </div>  
            </div>

           </div>

          </div>
       
          </div>
        
       )}
    

       {editOpen && (
 <EditStaff
  open={editOpen}
  onClose={() => setEditOpen(false)}
  staff={{
    uuid,                    
    staff_name: name,           
    email,                      
    address,                    
    employee_type: time,        
    staff_id: hastag,           
    is_active: status === "Active",
             
  }}
/>

)}

   </div>
  );
};

export default StaffCard;
