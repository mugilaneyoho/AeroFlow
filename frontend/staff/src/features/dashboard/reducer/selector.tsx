import type { RootState } from "../../../store/store";

export const selectStaffDashboard = (state: RootState) =>
  state.dashboard.StaffData;

export const selectDashboardLoading = (state: RootState) =>
  state.dashboard.loading;