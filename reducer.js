import { types } from "./actions";

export const reducer = (
  state = {
    entry: 0,
    exit: 0,
    floorY: 0,
    completeBody: false,
    appropriate: false
  },
  action
) => {
  switch (action.type) {
    case types.UPDATE_TIMESTAMPS:
      return {
        ...state,
        entry: action.entry,
        exit: action.exit
      };
    case types.UPDATE_VERTICAL:
      return {
        ...state,
        floorY: action.floorY,
        completeBody: action.completeBody
      };
    case types.APPROPRIATE:
      return {
        ...state,
        appropriate: action.appropriate
      };
    default:
      return state;
  }
};
