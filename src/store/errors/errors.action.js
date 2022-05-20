import { createAction } from "../../utils/reducer.utils";
import { ERROR_ACTION_TYPES } from "./errors.types";

export const SetFieldError = (error) => {
  createAction(ERROR_ACTION_TYPES.SET_FIELD_ERRORS, error);
};
