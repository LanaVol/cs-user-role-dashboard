export const getPositionData = (state) => state.positions.data;
export const getCurrentPositionId = (state) =>
  state.positions.currentPositionId;
export const getActivePositionInfo = (state) =>
  state.positions.data.find(
    (position) => position.id === state.positions.currentPositionId
  );
