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
    updatePosition: (state, { payload }) => {
      state.data = state.data.map((position) => {
        if (position.id === payload.id) {
          return payload;
        }
        return position;
      });
    },
    setCurrentPositionId: (state, { payload }) => {
      state.currentPositionId = payload;
    },
    updatePermits: (state, { payload }) => {
      const { id, permit } = payload;

      state.data = state.data.map((position) => {
        if (position.id === id) {
          const updatedPermits = position.permits.includes(permit)
            ? position.permits.filter((p) => p !== permit)
            : [...position.permits, permit];

          return { ...position, permits: updatedPermits };
        }
        return position;
      });
    },

    // updatePermits: (state, { payload }) => {
    //   const { id, permit } = payload;

    //   const updatedPosition = state.data.find((position) => position.id === id);

    //   if (!updatedPosition) return;

    //   if (updatedPosition.permits.includes(permit)) {
    //     updatedPosition.permits.splice(
    //       updatedPosition.permits.indexOf(permit),
    //       1
    //     );
    //   } else {
    //     updatedPosition.permits.push(permit);
    //   }

    //   state.data = state.data.map((position) => {
    //     if (position.id === id) {
    //       return updatedPosition;
    //     }
    //     return position;
    //   });
    // },
    setDataList: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const { actions: positionActions } = positionsSlice;
export const { reducer: positionReducer } = positionsSlice;
