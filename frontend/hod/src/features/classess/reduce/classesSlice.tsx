import { createSlice } from "@reduxjs/toolkit";

interface ClassesState {
  data: any[];
  selectedClass: any;
}

const initialState: ClassesState = {
  data: [],
  selectedClass: null,
};

const ClassesSlice = createSlice({
  name: "classes",
  initialState,
  reducers: {
    getAllClasses: (state, action) => {
      state.data = action.payload;
    },
    getSelectedClass: (state, action) => {
      state.selectedClass = action.payload;
    },
    createClassInState: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    updateClassInState: (state, action) => {
      state.data = state.data.map((c: any) =>
        c.uuid === action.payload.uuid ? action.payload : c
      );
    },
    removeClassFromState: (state, action) => {
  state.data = state.data.filter((c: any) => c.uuid !== action.payload);
}
  },
});

export const {
  getAllClasses,
  getSelectedClass,
  createClassInState,
  updateClassInState,
  removeClassFromState,
} = ClassesSlice.actions;

export default ClassesSlice.reducer;
