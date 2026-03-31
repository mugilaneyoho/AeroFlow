import { createSlice } from "@reduxjs/toolkit";

interface AttendanceState {
  loading: boolean;
  success: boolean;
  error: string | null;
  data: any;
  view:any;
}

const initialState: AttendanceState = {
  loading: false,
  success: false,
  error: null,
  data: null,
  view:null,
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
    setView:(state,action)=>{
      state.view = action.payload;
    }
  },
});

export const { setLoading, setSuccess, setError, setData, setView } = attendanceSlice.actions;
export default attendanceSlice.reducer;