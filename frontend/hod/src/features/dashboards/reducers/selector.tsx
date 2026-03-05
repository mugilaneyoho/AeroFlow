import type { RootState } from "../../../store/store";

export const selectAdminDashboard = (state: RootState) =>
  state.dashboard.adminData;

export const selectDashboardLoading = (state: RootState) =>
  state.dashboard.loading;