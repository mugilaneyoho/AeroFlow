import { createSlice } from "@reduxjs/toolkit";


interface StaffState {
  data: any[];        
  selectedStaff: any[];
}

const initialState: StaffState = {
  data: [],
  selectedStaff: [],
};

const StaffSlice = createSlice({
  name: "staff",
  initialState,
  reducers: {
    getAllStaff: (state, action) => {
      state.data = action.payload;
    },
    getSelectedStaff: (state, action) => {
      state.selectedStaff = action.payload;
    },
    createStaff: (state, action) => {
      state.data = action.payload;
    },
    updateStaffInState: (state, action) => {
      state.data = state.data.map((s: any) =>
        s.uuid === action.payload.uuid ? action.payload : s
      );
    },
  },
});

export const {
  getAllStaff,
  getSelectedStaff,
  createStaff,
  updateStaffInState,
} = StaffSlice.actions;

export default StaffSlice.reducer;

