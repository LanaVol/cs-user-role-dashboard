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
    data: [
      {
        id: "634f703b-1eb2-4bb4-a92b-f551257e1b5a",
        positionName: "Новобранец",
        salary: "50",
        countTasks: 15,
        permits: [
          "Дуель",
          "Выставлять цены",
          "Закупать сырье",
          "Выгонять из банды",
        ],
      },
      {
        id: "99ac6617-32b0-4d94-8e93-9032c90d5de0",
        positionName: "Рядовой",
        salary: "80",
        countTasks: 15,
        permits: [
          "Продавать продукт",
          "Смотреть аналитику",
          "Выгонять из банды",
        ],
      },
      {
        id: "e41c6a6e-3109-4034-a65b-66e78f2a68b8",
        positionName: "Сержант",
        salary: "100",
        countTasks: 15,
        permits: ["Продавать продукт", "Выгонять из банды"],
      },
    ],
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

    deleteCurrentPosition: (state, { payload }) => {
      console.log(payload);
      state.data = state.data.filter((position) => position.id !== payload);
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
