import React, { useState } from 'react'
import editicon from '../../assets/course/edit.png'
import profileimg from '../../assets/images/profileimglarge.png'
import { COLORS } from '../../constant'
type ProfilePageProps ={
    onClose:() => void
}
const Profilepage:React.FC<ProfilePageProps> = ({onClose}) => {
  const [openEdit, setOpenEdit] = useState(false)

  const handleEditSave = () => {
    if(openEdit) {
        setOpenEdit(false);
        onClose()
    }
    else
    {
        setOpenEdit(true)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-[70%] max-w-3xl">

       
        <div className="flex justify-between items-center pb-3">
          <div>
            <h1 className="font-semibold text-xl">Personal Information</h1>
            <p className="text-[#484848] text-sm">
              {openEdit ? "Update your profile details" : "View your profile details"}
            </p>
          </div>

          <button
            onClick={handleEditSave}
            className="flex gap-2 items-center px-3 py-2 rounded"
            style={{
              backgroundColor: COLORS.primary_blue,
              color: COLORS.secondary_white,
            }}
          >
            <img src={editicon} alt="edit" className="w-4 h-4" />
            {openEdit ? "Save Changes" : "Edit Profile"}
          </button>
        </div>

       
        <div className="flex gap-6 border-b pb-4">
          <img src={profileimg} alt="profile" className="w-28 h-28" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
           
            <div>
              <p className="font-medium">Full Name</p>
              {openEdit ? (
                <input className="border border-[#004743] rounded-[5px] focus:ring-2 focus:ring-[#004743] p-2 w-full" defaultValue="Dr. Ramesh Krishnan" />
              ) : (
                <p className="text-sm text-[#484848]">Dr. Ramesh Krishnan</p>
              )}
            </div>

            
            <div>
              <p className="font-medium">Email</p>
              {openEdit ? (
                <input className="border border-[#004743] rounded-[5px] focus:ring-2 focus:ring-[#004743] p-2 w-full" defaultValue="ramesh@training.edu" />
              ) : (
                <p className="text-sm text-[#484848]">ramesh@training.edu</p>
              )}
            </div>

       
            <div>
              <p className="font-medium">Phone</p>
              {openEdit ? (
                <input className="border border-[#004743] rounded-[5px] focus:ring-2 focus:ring-[#004743] p-2 w-full" defaultValue="+91 98765 43210" />
              ) : (
                <p className="text-sm text-[#484848]">+91 98765 43210</p>
              )}
            </div>

          
            <div>
              <p className="font-medium">Qualification</p>
              {openEdit ? (
                <input className="border border-[#004743] rounded-[5px] focus:ring-2 focus:ring-[#004743] p-2 w-full" defaultValue="Ph.D in Computer Science" />
              ) : (
                <p className="text-sm text-[#484848]">Ph.D in Computer Science</p>
              )}
            </div>
             <div>
              <p className="font-medium">Address</p>
              {openEdit ? (
                <input className="border border-[#004743] rounded-[5px] focus:ring-2 focus:ring-[#004743] p-2 w-full" defaultValue="Ph.D in Computer Science" />
              ) : (
                <p className="text-sm text-[#484848]">123 University Ave, City</p>
              )}
            </div>
             <div>
              <p className="font-medium">City</p>
              {openEdit ? (
                <input className="border border-[#004743] rounded-[5px] focus:ring-2 focus:ring-[#004743] p-2 w-full" defaultValue="Ph.D in Computer Science" />
              ) : (
                <p className="text-sm text-[#484848]">Bangalore</p>
              )}
            </div>
          </div>
        </div>

      
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
          <div>
            <p className="text-sm text-[#484848]">Joined Date</p>
            <p className="font-medium">2015-06-01</p>
          </div>
          <div>
            <p className="text-sm text-[#484848]">Experience</p>
            <p className="font-medium">15 years</p>
          </div>
          <div>
            <p className="text-sm text-[#484848]">Location</p>
            <p className="font-medium">Bangalore, Karnataka</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Profilepage
