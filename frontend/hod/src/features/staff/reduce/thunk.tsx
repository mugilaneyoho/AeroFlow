import type { AppDispatch } from "../../../store/store";
import { createStaff, deleteStaff, fetchAllStaff, fetchSingleStaff, updateStaff } from "../service/index";

import {
  getAllStaff,
  getSelectedStaff,
  updateStaffInState,
} from "./staffSlice";


export const GetAllStaffThunk = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetchAllStaff();
    console.log(response,"responsedata in thunk")
    dispatch(getAllStaff(response));
    return response.data.data;
    
  } catch (error) {
    console.log("Error in GetAllStaffThunk", error);
    return error;
  }
};

export const GetSingleStaffThunk =
  (uuid: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetchSingleStaff(uuid);
      dispatch(getSelectedStaff(response));
      return response;
    } catch (error) {
      return error;
    }
  };


export const CreateStaffThunk =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await createStaff(data);
      dispatch(getAllStaff(response));
      return response.data;
    } catch (error) {
      return error;
    }
  };
export const DeleteStaffThunk =
  (uuid: string) => async () => {
    try {
      const response = await deleteStaff(uuid);
      return response;
    } catch (error) {
      return error;
    }
  };

 

export const UpdateStaffThunk = (uuid: string, data: any) => async (dispatch: AppDispatch) => {
  try {
    const response = await updateStaff(uuid, data);
    dispatch(updateStaffInState(response)); 
    return response.data;
  } catch (error) {
    console.log("Error in UpdateStaffThunk", error);
    return error;
  }
};
