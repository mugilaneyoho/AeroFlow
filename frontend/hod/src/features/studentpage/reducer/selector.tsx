import type { RootState } from "../../../store/store";

export const SelectAllStudent = (state: RootState) => state.student.data;
export const SelectStudent = (state: RootState) => state.student.selectedStudent;