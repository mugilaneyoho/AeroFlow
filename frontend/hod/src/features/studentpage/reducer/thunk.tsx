import type { AppDispatch } from "../../../store/store";
import {
  fetchAllStudent,
  fetchSingleStudent,
  createStudent,
  deleteStudent,
} from "../services/index";

import {
  getAllStudent,
  getSelectedStudent,
  createStudentInState,
  deleteStudentInState,

} from "./studentSlice";


export const GetAllStudentThunk = () => async (dispatch: AppDispatch) => {
  const response = await fetchAllStudent();
  dispatch(getAllStudent(response.data || []));
  return response.data;
};

export const GetSingleStudentThunk =
  (uuid: string) => async (dispatch: AppDispatch) => {
    const response = await fetchSingleStudent(uuid);
    dispatch(getSelectedStudent(response.data));
    return response.data;
  };


export const CreateStudentThunk =
  (data: any) => async (dispatch: AppDispatch) => {
    const response = await createStudent(data);
    if (response?.data) {
      dispatch(createStudentInState(response.data));
    }
    return response.data;
  };


export const DeleteStudentThunk =
  (uuid: string) => async (dispatch: AppDispatch) => {
    const response = await deleteStudent(uuid);
    if (response?.success) {
      dispatch(deleteStudentInState(uuid));
    }
    return response;
  };

