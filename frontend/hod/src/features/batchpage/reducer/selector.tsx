import type { RootState } from "../../../store/store";

export const GetAllBatch = (state: RootState) => state.batch.batches;

export const GetSelectedBatch = (state: RootState) =>
  state.batch.selectedBatch;
