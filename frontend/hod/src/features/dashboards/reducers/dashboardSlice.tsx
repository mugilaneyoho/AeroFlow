import { createSlice } from "@reduxjs/toolkit";
import type { AdminDashboard } from "../../../types/dashboard";

interface DashboardState {
  adminData: AdminDashboard | null;
  loading: boolean;
}

const initialState: DashboardState = {
  adminData: null,
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setAdminDashboard: (state, action) => {
      state.adminData = action.payload;
    },
    setDashboardLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearDashboard: (state) => {
      state.adminData = null;
      state.loading = false;
    },
  },
});

export const {
  setAdminDashboard,
  setDashboardLoading,
  clearDashboard,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;