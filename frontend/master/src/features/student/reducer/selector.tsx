import type { RootState } from "../../../store/store";

export const selectStudents = (state: RootState) => state.student.data;
export const selectStudent = (state: RootState) =>
    state.student.selectedStudent;