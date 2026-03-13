import React, { useState } from "react";
import { COLORS, FONTS } from "../../constant";
import plusicon from "../../assets/Dashboard/plus.png";
import search from "../../assets/staff/search.png";
import Dropdown from "../../components/staffs/Dropdown";
import StaffCard from "../../components/staffs/StaffCard";
import StaffModal from "../../components/staffs/EditStaff";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetAllStaffThunk } from "../../features/staff/reduce/thunk";
import { GetAllStaff } from "../../features/staff/reduce/selector";


const Staff: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState("");
 const typeOptions = ["All Type", "Full-time", "Part-time"];
const statusOptions = ["All Status", "Active", "Inactive"];

const [typeFilter, setTypeFilter] = useState("All Type");
const [statusFilter, setStatusFilter] = useState("All Status");

const handleCreate = () => {
    setEditingStaff(null); 
    setModalOpen(true);
  };

const dispatch = useDispatch<any>();
const staffList: any = useSelector(GetAllStaff);

useEffect(() => {
  dispatch(GetAllStaffThunk());
}, [dispatch]);


const filteredStaff = Array.isArray(staffList?.data)
  ? staffList.data.filter((staff: any) => {

     
      const matchesSearch =
        staff.staff_name
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        staff.staff_id
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase());

     
      const matchesType =
        typeFilter === "All Type" ||
        staff.employee_type?.toLowerCase() ===
          typeFilter.toLowerCase().replace("-", "");

     
      const matchesStatus =
        statusFilter === "All Status" ||
        (statusFilter === "Active" && staff.is_active) ||
        (statusFilter === "Inactive" && !staff.is_active);

      return matchesSearch && matchesType && matchesStatus;
    })
  : [];



  const [currentPage, setCurrentPage] = useState(1);
const cardsPerPage = 8; 
const startIndex = (currentPage - 1) * cardsPerPage;
const endIndex = startIndex + cardsPerPage;
const currentStaff = filteredStaff.slice(startIndex, endIndex);
const totalPages = Math.ceil(filteredStaff.length / cardsPerPage);


  return (
    <div className="">
   
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
        <div>
          <h1 style={{ ...FONTS.tittle, color: COLORS.primary_blue }}>
            Staff Management
          </h1>
          <p style={{ color: COLORS.primary_blue }}>
            Manage teaching staff and their profiles
          </p>
        </div>
        <button
          className="flex gap-1 items-center px-3 py-2 rounded-[10px] hover:opacity-90 transition"
          onClick={handleCreate}
          style={{ backgroundColor: COLORS.primary_blue, color: COLORS.secondary_white }}
        >
          <img src={plusicon} alt="plus" className="w-5 h-5" />
          Create Staff
        </button>
      </div>

 {modalOpen && (
        <StaffModal
          open={modalOpen}
          onClose={() => setModalOpen(false)}
          staff={editingStaff || undefined} 
        />
      )}
      <div className="flex flex-col sm:flex-row gap-4 items-center ">
       
        <div className="flex items-center w-full border border-[#09605A] rounded-[10px] px-3 py-2 bg-white shadow-sm">
          <input
            type="text"
            placeholder="Search by name or emp id"
            className="w-full outline-none text-sm text-gray-700"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img src={search} alt="search" className="w-5 h-5 ml-2" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
           <Dropdown
    options={typeOptions}
    selected={typeFilter}
    onChange={setTypeFilter}
  />

         
          <div className="relative w-full sm:w-40"> 
  <Dropdown
    options={statusOptions}
    selected={statusFilter}
    onChange={setStatusFilter}
  />
             
          </div>
         
        </div>
        
      </div>
     <div className="p-4 mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 rounded-[10px] shadow-sm bg-white text-sm">
  {currentStaff.map((staff: any) => (
   <StaffCard
  key={staff.uuid} 
  uuid={staff.uuid}
  image={staff.image_url || undefined} 
  name={staff.staff_name}
  job={staff.qualification}
  hastag={staff.staff_id}
  time={staff.employee_type}
  email={staff.email}
  phone={staff.phone_number}
  status={staff.is_active ? "Active" : "InActive"}
  address={staff.address}
/>

  ))}
</div>
<div className="w-full p-4 flex justify-end gap-2 ">
  <button 
    disabled={currentPage === 1}
    onClick={() => setCurrentPage(prev => prev - 1)}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Prev
  </button>

  <span className="px-2">{currentPage} / {totalPages}</span>

  <button 
    disabled={currentPage === totalPages}
    onClick={() => setCurrentPage(prev => prev + 1)}
    className="px-3 py-1 border rounded disabled:opacity-50"
  >
    Next
  </button>
</div>


    </div>
  );
};

export default Staff;
