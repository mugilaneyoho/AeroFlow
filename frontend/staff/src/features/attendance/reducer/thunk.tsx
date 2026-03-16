import type{ AppDispatch } from "../../../store/store";
import { createAttendance, getAttendanceByClassId } from "../services/index";
import { setLoading, setSuccess, setError, setData } from "./attenSlice";

export const createAttendanceThunk = (payload: any) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));
  try {
    await createAttendance(payload);
    dispatch(setSuccess(true));
  } catch (err: any) {
    dispatch(setError(err.message || "Error creating attendance"));
  } finally {
    dispatch(setLoading(false));
  }
};


export const getAttendanceByClassIdThunk = (classId: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));
  dispatch(setError(null));
  try {
    const data = await getAttendanceByClassId(classId);
    dispatch(setData(data));
  } catch (err: any) {
    dispatch(setError(err.message || "Error fetching attendance"));
  } finally {
    dispatch(setLoading(false));
  }
};