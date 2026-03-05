import { useState } from "react";
import closeIcon from "../../assets/course/closeedit.png"; 

import editicon from '../../assets/staff/editicon.png'
import emptyimg from '../../assets/staff/emptyimg.png'
import { COLORS } from "../../constant";
import { useDispatch } from "react-redux";
import { CreateStaffThunk, GetAllStaffThunk, UpdateStaffThunk } from "../../features/staff/reduce/thunk";


interface Staff {
  uuid?: string;
  staff_name?: string;
  phone_number?: string;
  email?: string;
  address?: string;
  employee_type?: string;
  experience?: string;
  qualification?: string;
  expertise?: string;       
  staff_id?: string;
  is_active?: boolean;
}


interface EditStaffProps {
  open: boolean;
  onClose: () => void;
  staff?: Staff; 
}

export default function StaffModal({ onClose, staff }: EditStaffProps) {
 
  

const [name, setName] = useState(staff?.staff_name || "");
const [phone, setPhone] = useState(staff?.phone_number || "");
const [email, setEmail] = useState(staff?.email || "");
const [address, setAddress] = useState(staff?.address || "");
const [job, setJob] = useState(staff?.employee_type || "");
const [staffId, setStaffId] = useState(staff?.staff_id || "");
const [experience, setExperience] = useState(staff?.experience || "");
const [education, setEducation] = useState(staff?.qualification || "");
const [showSkillInput, setShowSkillInput] = useState(false);
const [newSkill, setNewSkill] = useState("");
const [isActive, setActive] = useState(staff?.is_active !== false); 
const [skills, setSkills] = useState<string[]>(staff?.expertise?.split(",") || ["React", "Node.js", "JavaScript"]);
const dispatch = useDispatch<any>();





const handleSubmit = async () => {
 const payload = {
  staff_name: name,
  phone_number: phone,
  email: email,
  address: address,
  employee_type: job,          
  experience: experience,      
  qualification: education,    
  expertise: skills.join(","), 
  staff_id: staffId,
  is_active: isActive,        
};

  try {
    if (staff?.uuid) {
      await dispatch(UpdateStaffThunk(staff.uuid, payload));
    } else {
      await dispatch(CreateStaffThunk(payload));
    }

    dispatch(GetAllStaffThunk());
    onClose();
  } catch (err) {
    console.error("Error creating/updating staff:", err);
  }
};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-[60%] h-[90%] rounded-lg shadow-lg p-6 relative overflow-y-auto">
        
      
        <div className="flex justify-between items-center pb-3">
          <div>
            <h2 className="text-xl font-semibold">
              {staff ? "Edit Existing Staff" : "Create New Staff"}
            </h2>
            <p>{staff ? "Edit existing staff in your institute training program" : "Add a new staff to your institute"}</p>
          </div> 
          <button onClick={onClose}>
            <img src={closeIcon} alt="close" className="w-4 h-4" />
          </button>
        </div>

       
        <div className="mt-4 p-2 rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140]">
          <h3 className="font-semibold mb-3">Personal Details</h3>
          <div className="flex flex-col gap-2 mb-4">
            <p className="text-black text-sm text-left"></p>
            <div className="relative w-max">
              <img
                src={emptyimg}
                alt="staff"
                className="w-20 h-20 rounded-full object-cover"
              />
              <button className="absolute bottom-0 right-0">
                <img src={editicon} alt="edit" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Staff Name</label>
              <input
                className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
                placeholder="Enter staff name"
                value={name}
                onChange={(e) => setName(e.target.value)}
           
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Mobile No</label>
              <input
                className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
                placeholder="Enter mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Staff ID</label>
              <input
                className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
                placeholder="Enter staff ID"
                value={staffId}
                onChange={(e) => setStaffId(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Email</label>
              <input
                className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-sm text-black">Permanent Address</label>
              <input
                className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]"
                placeholder="Enter permanent address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>
        </div>

    
        <div className="p-2 rounded-[10px] shadow-[0px_0px_14px_0px_#2D216140] mt-4">
          <h3 className="font-semibold mb-3">Professional Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Experience*</label>
              <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Experience*" value={experience} onChange={(e) => setExperience(e.target.value)} />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Employment Type</label>
              <select value={job} onChange={(e) => setJob(e.target.value)} className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" >
                <option>Employment Type</option>
                <option>Full Time</option>
                <option>Part Time</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-black">Education Qualification*</label>
              <input className="input border border-[#B4B3B3] rounded-[5px] p-1 font-semibold text-[#6E6E6E]" placeholder="Education Qualification*" value={education} onChange={(e) => setEducation(e.target.value)} />
            </div>

            <div className="flex flex-col">
  <p className="mb-2">Expertise*</p>
  <div className="flex gap-2 flex-wrap items-center">
    {skills.map((skill) => (
      <span
        key={skill}
        className="bg-[#CBDCE4] text-[#726A97] px-3 py-1 rounded text-sm"
      >
        {skill}
      </span>
    ))}

    
    {showSkillInput ? (
      <div className="flex gap-1 items-center">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="border px-2 py-1 rounded text-sm"
          placeholder="Enter skill"
        />
        <button
          onClick={() => {
            if (newSkill.trim() !== "") {
              setSkills([...skills, newSkill.trim()]);
              setNewSkill("");
              setShowSkillInput(false);
            }
          }}
          className="bg-[#2D2161] text-white px-2 py-1 rounded text-sm"
        >
          Add
        </button>
        <button
          onClick={() => {
            setShowSkillInput(false);
            setNewSkill("");
          }}
          className="bg-gra px-2 py-1 rounded text-sm"
        >
          Cancel
        </button>
      </div>
    ) : (
      <button
        className="border px-2 py-1 rounded text-sm"
        onClick={() => setShowSkillInput(true)}
      >
        +
      </button>
    )}
  </div>
</div>

          </div>

          
          <div className="mt-4 flex flex-col gap-2">
            <label className="text-sm font-medium">Status</label>
            <button
              type="button"
              onClick={() => setActive(!isActive)}
              className="w-12 h-6 rounded-full p-1 flex items-center transition-colors duration-300"
              style={{ backgroundColor: isActive ? COLORS.bg_light_green : COLORS.bg_gray }}
            >
              <div className={`w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-300 ${isActive ? "translate-x-6" : "translate-x-0"}`} />
            </button>
          </div>
        </div>

       
        <div className="flex justify-end gap-3 mt-6">
          <button onClick={handleSubmit} className="px-4 py-2 text-white rounded" style={{ background: COLORS.bg_light_green }}>
            {staff ? "Save the Changes" : "Create Staff"}
          </button>
          <button onClick={onClose} className="px-4 py-2 border rounded text-white" style={{ background: COLORS.bg_red }}>
            Cancel
          </button>
        </div>

      </div>
    </div>
  );
}
