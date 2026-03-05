
import type { AppDispatch } from "../../../store/store";
import dashboardService from "../services/index";
import { setAdminDashboard, setDashboardLoading } from "./dashboardSlice";

export const GetAdminDashboardThunk = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(setDashboardLoading(true));

    const data = await dashboardService.getAdminDashboard();
    console.log("Dashboard API response thunk:", data); 

    dispatch(setAdminDashboard(data));
    dispatch(setDashboardLoading(false));
  } catch (error: any) {
    console.error("GetAdminDashboardThunk error:", error);
    dispatch(setDashboardLoading(false));
  }
};