import { createSlice } from "@reduxjs/toolkit";

/**
 * Initial state for positionsSlice.
 * @typedef {Object} InitialState
 * @property {Array} data - An array to store positions.
 * @property {string|null} currentPositionId - The ID of the current position.
 */

/**
 * Redux slice for managing positions.
 * @type {import("@reduxjs/toolkit").Slice}
 * @name positionsSlice
 */
export const positionsSlice = createSlice({
  name: "position",
  initialState: /** @type {InitialState} */ ({
    data: [],
    currentPositionId: null,
  }),
  reducers: {
    /**
     * Reducer to add a new position.
     * @param {InitialState} state - The current state.
     * @param {Object} action - Redux action with payload.
     * @param {Object} action.payload - The payload containing the new position.
     */
    addNewPosition: (state, { payload }) => {
      state.data = [...state.data, payload];
    },

    /**
     * Reducer to update a position.
     * @param {InitialState} state - The current state.
     * @param {Object} action - Redux action with payload.
     * @param {Object} action.payload - The payload containing the updated position.
     */
    updatePosition: (state, { payload }) => {
      state.data = state.data.map((position) =>
        position.id === payload.id ? { ...position, ...payload } : position
      );
    },

    /**
     * Reducer to set the current position ID.
     * @param {InitialState} state - The current state.
     * @param {Object} action - Redux action with payload.
     * @param {string|null} action.payload - The ID of the current position.
     */
    setCurrentPositionId: (state, { payload }) => {
      state.currentPositionId = payload;
    },

    /**
     * Reducer to update permits for a position.
     * @param {InitialState} state - The current state.
     * @param {Object} action - Redux action with payload.
     * @param {Object} action.payload - The payload containing position ID and permit.
     * @param {string} action.payload.id - The ID of the position.
     * @param {string} action.payload.permit - The permit to be updated.
     */
    updatePermits: (state, { payload }) => {
      const { id, permit } = payload;

      state.data = state.data.map((position) =>
        position.id === id
          ? {
              ...position,
              permits: position.permits.includes(permit)
                ? position.permits.filter((p) => p !== permit)
                : [...position.permits, permit],
            }
          : position
      );
    },

    /**
     * Reducer to set the data list.
     * @param {InitialState} state - The current state.
     * @param {Object} action - Redux action with payload.
     * @param {Array} action.payload - The payload containing the new data list.
     */
    setDataList: (state, { payload }) => {
      state.data = payload;
    },
  },
});

/**
 * Actions generated from the positionsSlice.
 * @type {Object}
 * @name positionActions
 * @property {Function} addNewPosition - Action to add a new position.
 * @property {Function} updatePosition - Action to update a position.
 * @property {Function} setCurrentPositionId - Action to set the current position ID.
 * @property {Function} updatePermits - Action to update permits for a position.
 * @property {Function} setDataList - Action to set the data list.
 */
export const { actions: positionActions } = positionsSlice;

/**
 * Reducer generated from the positionsSlice.
 * @type {import("@reduxjs/toolkit").Reducer}
 * @name positionReducer
 */
export const { reducer: positionReducer } = positionsSlice;
