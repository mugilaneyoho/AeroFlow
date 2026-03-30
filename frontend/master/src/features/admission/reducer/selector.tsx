import type { RootState } from "../../../store/store";

export const selectAdmissions = (state: RootState) => state.admission.data;
export const selectAdmission = (state: RootState) =>
    state.admission.selectedAdmission; 