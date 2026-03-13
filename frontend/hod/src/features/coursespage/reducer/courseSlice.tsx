import { createSlice } from "@reduxjs/toolkit";

interface CourseState {
  data: any[];
  selectedCourse: any[];
}

const initialState: CourseState = {
  data: [],
  selectedCourse: [],
};

const CourseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    getAllCourse: (state, action) => {
      state.data = action.payload;
    },
    getSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
    createCourse: (state, action) => {
      state.data = action.payload;
    },
    updateCourseInState: (state, action) => {
      state.data = state.data.map((c: any) =>
        c.uuid === action.payload.uuid ? action.payload : c
      );
    },
  },
});

export const {
  getAllCourse,
  getSelectedCourse,
  createCourse,
  updateCourseInState,
} = CourseSlice.actions;

export default CourseSlice.reducer;
