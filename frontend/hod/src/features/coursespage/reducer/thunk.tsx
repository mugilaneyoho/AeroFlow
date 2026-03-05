import type { AppDispatch } from "../../../store/store";
import {
  fetchAllCourse,
  fetchSingleCourse,
  createCourse,
  deleteCourse,
  updateCourse,
} from "../services/index";

import {
  getAllCourse,
  getSelectedCourse,
  updateCourseInState,
} from "./courseSlice";



export const GetAllCourseThunk = () => async (dispatch: AppDispatch) => {
  try {
    const response = await fetchAllCourse();
    dispatch(getAllCourse(response.data));  
    console.log("FULL RESPONSE:", response);
    console.log("RESPONSE.DATA:", response.data);
    return response.data;
  
  } catch (error) {
    console.log("Error in GetAllCourseThunk", error);
    return error;
  }
};



export const GetSingleCourseThunk =
  (uuid: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetchSingleCourse(uuid);
      dispatch(getSelectedCourse(response));
      return response;
    } catch (error) {
      return error;
    }
  };



export const CreateCourseThunk =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await createCourse(data);
      dispatch(GetAllCourseThunk());
      return response.data;
    } catch (error) {
      return error;
    }
  };



export const DeleteCourseThunk =
  (uuid: string) => async (dispatch: AppDispatch) => {
    try {
      await deleteCourse(uuid);  
      console.log("deleted successfully", deleteCourse)
      console.log("Deleting course with uuid:", uuid);

      dispatch(GetAllCourseThunk());
     
    } catch (error) {
      console.error("Error deleting course:", error);
      return error;
    }
  };




export const UpdateCourseThunk =
  (uuid: string, data: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await updateCourse(uuid, data);
      dispatch(updateCourseInState(response.data));
      return response.data;
    } catch (error) {
      console.log("Error in UpdateCourseThunk", error);
      return error;
    }
  };
