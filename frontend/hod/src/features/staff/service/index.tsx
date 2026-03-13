import Client from "../../../api/index";


export const fetchAllStaff = async () => {
  const response = await Client.staff.getAll();
  return response; 
};


export const fetchSingleStaff = async (uuid: string) => {
  const response = await Client.staff.getStaffById(uuid);
  return response;
};


export const createStaff = async (data: any) => {
  const response = await Client.staff.createStaff(data);
  return response;
};


export const deleteStaff = async (uuid: string) => {
  const response = await Client.staff.deleteStaff(uuid);
  return response;
};

export const updateStaff = async (uuid: string, data: any) => {
  const response = await Client.staff.updateStaff(uuid, data);
  return response;
};

export const StaffDropdown = async()=>{
  const res = await Client.staff.dropdown();
  return res
}