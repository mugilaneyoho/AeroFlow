import { createSlice } from "@reduxjs/toolkit";

interface BatchState {
  batches: any[];
  selectedBatch: any | null;
}

const initialState: BatchState = {
  batches: [],
  selectedBatch: null,
};

const batchSlice = createSlice({
  name: "batch",
  initialState,
  reducers: {
    setAllBatch: (state, action) => {
      state.batches = action.payload;
    },

    setSelectedBatch: (state, action) => {
      state.selectedBatch = action.payload;
    },

    updateBatchInState: (state, action) => {
      const index = state.batches.findIndex(
        (batch) => batch.uuid === action.payload.uuid
      );

      if (index !== -1) {
        state.batches[index] = action.payload;
      }
    },
  },
});

export const {
  setAllBatch,
  setSelectedBatch,
  updateBatchInState,
} = batchSlice.actions;

export default batchSlice.reducer;
