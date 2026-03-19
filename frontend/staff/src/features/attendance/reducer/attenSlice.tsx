import { createSlice } from "@reduxjs/toolkit";

interface AttendanceState {
  loading: boolean;
  success: boolean;
  error: string | null;
  data: any;
}

const initialState: AttendanceState = {
  loading: false,
  success: false,
  error: null,
  data: null,
};

const attendanceSlice = createSlice({
  name: "attendance",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setSuccess, setError, setData } = attendanceSlice.actions;
export default attendanceSlice.reducer;