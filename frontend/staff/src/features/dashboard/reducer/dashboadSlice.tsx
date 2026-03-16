import { createSlice } from "@reduxjs/toolkit";
import type { StaffDashboard } from "../../../types/dashboard";

interface DashboardState {
  StaffData: StaffDashboard | null;
  loading: boolean;
}

const initialState: DashboardState = {
  StaffData: null,
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setStaffDashboard: (state, action) => {
      state.StaffData = action.payload;
    },
    setDashboardLoading: (state, action) => {
      state.loading = action.payload;
    },
    clearDashboard: (state) => {
      state.StaffData = null;
      state.loading = false;
    },
  },
});

export const {
  setStaffDashboard,
  setDashboardLoading,
  clearDashboard,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;