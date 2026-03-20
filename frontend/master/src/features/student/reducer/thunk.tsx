import { fetchAllStudents, createStudent, fetchStudentById, deleteStudent } from "../service";
import { getAllStudents, addStudent, getStudentById, removeStudent } from "../reducer/studentSlice";

export const getStudentsThunk = () => async (dispatch: any) => {
    try {
        const data = await fetchAllStudents();
        dispatch(getAllStudents(data));
    } catch (error) {
        console.log("GET ALL ERROR:", error);
    }
};


export const getStudentByIdThunk = (uuid: string) => async (dispatch: any) => {
    try {
        const data = await fetchStudentById(uuid);
        dispatch(getStudentById(data));
        console.log("API RESPONSE",data);
    } catch (error) {
        console.log("GET BY ID ERROR:", error);
    }
};


export const createStudentThunk = (payload: any) => async (dispatch: any) => {
    try {
        const data = await createStudent(payload);
        dispatch(addStudent(data));
    } catch (error) {
        console.log("CREATE ERROR:", error);
    }
};


export const deleteStudentThunk = (uuid: string) => async (dispatch: any) => {
    try {
        await deleteStudent(uuid);
        dispatch(removeStudent(uuid)); 
    } catch (error) {
        console.log("DELETE ERROR:", error);
    }
};