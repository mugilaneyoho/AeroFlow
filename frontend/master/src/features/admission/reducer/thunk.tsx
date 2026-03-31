import { fetchAllAdmission, createAdmission, fetchAdmissionById } from "../serivces";
import { getAllAdmission, addAdmission, getAdmissionById } from "../reducer/admissionSlice";

export const getAdmissionThunk = () => async (dispatch: any) => {
    try {
        const data = await fetchAllAdmission();
        dispatch(getAllAdmission(data));
        console.log(data,"datainthunk")
    } catch (error) {
        console.log("GET ALL ERROR:", error);
    }
};


export const getAdmissionByIdThunk = (uuid: string) => async (dispatch: any) => {
    try {
        const data = await fetchAdmissionById(uuid);
        dispatch(getAdmissionById(data));
        console.log("API RESPONSE",data);
    } catch (error) {
        console.log("GET BY ID ERROR:", error);
    }
};


export const createAdmissionThunk = (payload: any) => async (dispatch: any) => {
    try {
        const data = await createAdmission(payload);
        dispatch(addAdmission(data));
    } catch (error) {
        console.log("CREATE ERROR:", error);
    }
};
