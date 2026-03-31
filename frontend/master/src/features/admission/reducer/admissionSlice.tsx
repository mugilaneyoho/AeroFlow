import { createSlice } from "@reduxjs/toolkit";

interface Admission {
   id: number;
    uuid: string;
    student_name: string;
    student_id: string;
    email: string;
    phone_number: string;
    gender: string;        
    is_active: boolean;    
}

interface AdmissionState {
    data: Admission[];
    selectedAdmission: Admission | null;
}

const initialState: AdmissionState = {
    data: [],
    selectedAdmission: null
};

const AdmissionSlice = createSlice({
    name: "admission",
    initialState,
    reducers: {
        
        getAllAdmission: (state, action) => {
            state.data = action.payload;
        },
        getAdmissionById: (state, action) => {
            state.selectedAdmission = action.payload;
        },
        addAdmission: (state, action) => {
            state.data.push(action.payload);
        },
    }
});

export const {
    getAllAdmission,
    getAdmissionById,
    addAdmission,
    
} = AdmissionSlice.actions;

export default AdmissionSlice.reducer;