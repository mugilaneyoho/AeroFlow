
import type { AppDispatch } from "../../../store/store";
import dashboardService from "../services/index";
import { setAdminDashboard, setDashboardLoading } from "./dashboardSlice";

export const GetAdminDashboardThunk = () => async (dispatch: AppDispatch) => {
  dispatch(setDashboardLoading(true));
  try {
    const data = await dashboardService.getAdminDashboard();
    dispatch(setAdminDashboard(data));
  } catch (error: any) {
    console.error("GetAdminDashboardThunk error:", error);
  } finally {
    dispatch(setDashboardLoading(false));
  }
};