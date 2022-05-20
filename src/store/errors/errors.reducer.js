import { ERROR_ACTION_TYPES } from "./errors.types";

const ERRORS_INITIAL_STATE = {};

export const errorsReducer = (state = ERRORS_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case ERROR_ACTION_TYPES.SET_FIELD_ERRORS:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};
