/**
 * Selects the position data from the Redux state.
 * @param {Object} state - The Redux state.
 * @returns {Array} - An array containing position data.
 */
export const getPositionData = (state) => state.positions.data;

/**
 * Selects the current position ID from the Redux state.
 * @param {Object} state - The Redux state.
 * @returns {string|null} - The ID of the current position or null if not set.
 */
export const getCurrentPositionId = (state) =>
  state.positions.currentPositionId;

/**
 * Selects information about the active position based on the current position ID.
 * @param {Object} state - The Redux state.
 * @returns {Object|null} - Information about the active position or null if not found.
 */
export const getActivePositionInfo = (state) =>
  state.positions.data.find(
    (position) => position.id === state.positions.currentPositionId
  );
