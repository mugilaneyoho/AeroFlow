import type { AppDispatch } from "../../../store/store";
import {
  fetchAllBatch,
  fetchBatchByCourse,
  fetchSingleBatch,
  createBatch,
  updateBatch,
  deleteBatch,
} from "../services";

import {
  setAllBatch,
  setSelectedBatch,
  updateBatchInState,
} from "./batchSlice";

export const GetAllBatchThunk = (page: number, limit: number) => async (dispatch: AppDispatch) => {
  try {
    const response = await fetchAllBatch(page, limit);
    dispatch(setAllBatch(response.data));
    return response.data;
  } catch (error) {
    console.error("GetAllBatchThunk error:", error);
    return error;
  }
};

export const GetBatchByCourseThunk =
  (courseid: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetchBatchByCourse(courseid);
      dispatch(setAllBatch(response.data));
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const GetSingleBatchThunk =
  (uuid: string) => async (dispatch: AppDispatch) => {
    try {
      const response = await fetchSingleBatch(uuid);
      dispatch(setSelectedBatch(response.data));
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const CreateBatchThunk =
  (data: any, page: number, limit: number) => async (dispatch: AppDispatch) => {
    try {
      const response = await createBatch(data);
      dispatch(GetAllBatchThunk(page, limit));
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const UpdateBatchThunk =
  (uuid: string, data: any) => async (dispatch: AppDispatch) => {
    try {
      const response = await updateBatch(uuid, data);
      dispatch(updateBatchInState(response.data));
      return response.data;
    } catch (error) {
      return error;
    }
  };

export const DeleteBatchThunk =
  (uuid: string, page: number, limit: number) => async (dispatch: AppDispatch) => {
    try {
      await deleteBatch(uuid);
      dispatch(GetAllBatchThunk(page, limit)); 
    } catch (error) {
      return error;
    }
  };
