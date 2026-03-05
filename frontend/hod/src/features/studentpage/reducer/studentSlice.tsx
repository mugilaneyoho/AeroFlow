import { createSlice } from "@reduxjs/toolkit";

interface StudentState {
  data: any[];
  selectedStudent: any | null;
}

const initialState: StudentState = {
  data: [],
  selectedStudent: null,
};

const StudentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    getAllStudent: (state, action) => {
      state.data = action.payload;
    },
    getSelectedStudent: (state, action) => {
      state.selectedStudent = action.payload;
    },
    createStudentInState: (state, action) => {
      state.data.push(action.payload); 
    },
    deleteStudentInState: (state, action) => {
      state.data = state.data.filter((s: any) => s.uuid !== action.payload);
    },
    updateStudentInState: (state, action) => {
      state.data = state.data.map((s: any) =>
        s.uuid === action.payload.uuid ? action.payload : s
      );
    },
  },
});

export const {
  getAllStudent,
  getSelectedStudent,
  createStudentInState,
  deleteStudentInState,
 
} = StudentSlice.actions;



export default StudentSlice.reducer;