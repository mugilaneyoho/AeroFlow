
import type { AppDispatch } from "../../../store/store";
import dashboardService from "../services/index";
import { setStaffDashboard } from "./dashboadSlice";
import {setDashboardLoading } from "./dashboadSlice";

export const GetStaffDashboardThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setDashboardLoading(true));

    const data = await dashboardService.getStaffDashboard();
    console.log("Dashboard API response thunk:", data); 

    dispatch(setStaffDashboard(data));
    dispatch(setDashboardLoading(false));
  } catch (error: any) {
    console.error("GetStaffDashboardThunk error:", error);
    dispatch(setDashboardLoading(false));
  }
};