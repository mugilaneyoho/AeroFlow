import type { RootState } from "../../../store/store";

export const GetAllStaff = (state: RootState) =>state.staff.data;
export const SelectedStaff = (state: RootState) =>state.staff.selectedStaff;
