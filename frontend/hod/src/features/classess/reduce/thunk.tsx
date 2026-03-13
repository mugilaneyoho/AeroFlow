import type { AppDispatch } from "../../../store/store";
import {
  fetchAllClasses,
  fetchSingleClass,
  createClass,
  updateClass,
  deleteClass,
} from "../service";
import {
  getAllClasses,
  getSelectedClass,
  createClassInState,
  updateClassInState,
  removeClassFromState,
} from "../reduce/classesSlice";

export const GetAllClassesThunk = (tab:string) => async (dispatch: AppDispatch) => {
  try {
    const data = await fetchAllClasses(tab); 
    dispatch(getAllClasses(data));
    console.log("GetAllClassesThunk", data);
    return data;
  } catch (error) {
    console.error("Error in GetAllClassesThunk", error);
    return error;
  }
};


export const GetSingleClassThunk =
  (uuid: string, mode: string) => async (dispatch: AppDispatch) => {
    try {
      const data = await fetchSingleClass(uuid, mode);
      dispatch(getSelectedClass(data));
      return data;
    } catch (error) {
      return error;
    }
  };


export const CreateClassThunk =
  (data: any) => async (dispatch: AppDispatch) => {
    try {
      const newClass = await createClass(data);
      dispatch(createClassInState(newClass)); 
      return newClass;
    } catch (error) {
      return error;
    }
  };


export const UpdateClassThunk =
  (uuid: string, mode: string, data: any) => async (dispatch: AppDispatch, getState: any) => {
    try {
      await updateClass(uuid, mode, data); 
      
     
      const { classes } = getState();
      const existingClass = classes.data.find((c: any) => c.uuid === uuid);
      if (!existingClass) throw new Error("Class not found in state");

   
      const updatedClass = { ...existingClass, ...data };
      dispatch(updateClassInState(updatedClass));
      return updatedClass;
    } catch (error) {
      console.error("Error in UpdateClassThunk:", error);
      return error;
    }
  };


export const DeleteClassThunk =
  (uuid: string, mode: string) =>
  async (dispatch: AppDispatch) => {
    try {
      await deleteClass(uuid, mode); 
      dispatch(removeClassFromState(uuid)); 
      return uuid;
    } catch (error) {
      return error;
    }
  };