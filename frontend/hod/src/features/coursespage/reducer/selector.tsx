import type { RootState } from "../../../store/store";

export const GetAllCourse = (state: RootState) => state.course.data;

export const SelectedCourse = (state: RootState) =>
  state.course.selectedCourse;
