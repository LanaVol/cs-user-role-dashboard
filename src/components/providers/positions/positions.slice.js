import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  currentPositionId: null,
};

export const positionsSlice = createSlice({
  name: "position",
  initialState,
  reducers: {
    addNewPosition: (state, { payload }) => {
      state.data = [...state.data, payload];
    },
  },
});

export const { actions: positionActions } = positionsSlice;
export const { reducer: positionReducer } = positionsSlice;
