import { combineReducers } from "redux";
import { AuthReducer } from "./AuthReducer";

export * from "./AuthReducer";

export const CombineReducers = combineReducers({
  auth: AuthReducer,
});

export type State = ReturnType<typeof CombineReducers>;
