import { createSlice } from "@reduxjs/toolkit";

interface Student {
   id: number;
    uuid: string;
    student_name: string;
    student_id: string;
    email: string;
    phone_number: string;
    gender: string;        
    is_active: boolean;    
}

interface StudentState {
    data: Student[];
    selectedStudent: Student | null;
}

const initialState: StudentState = {
    data: [],
    selectedStudent: null
};

const StudentSlice = createSlice({
    name: "student",
    initialState,
    reducers: {
        
        getAllStudents: (state, action) => {
            state.data = action.payload;
        },
        getStudentById: (state, action) => {
            state.selectedStudent = action.payload;
        },
        addStudent: (state, action) => {
            state.data.push(action.payload);
        },
        removeStudent: (state, action) => {
            state.data = state.data.filter(
                (student) => student.uuid !== action.payload
            );
        },
        clearSelectedStudent: (state) => {
              state.selectedStudent = null;
           }
    }
});

export const {
    getAllStudents,
    getStudentById,
    addStudent,
    removeStudent,
    clearSelectedStudent
} = StudentSlice.actions;

export default StudentSlice.reducer;