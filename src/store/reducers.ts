import { combineReducers } from "redux";

import { UserReducer } from "./UserReducer";

export const CombineReducers = combineReducers({
  user: UserReducer,
});

export * from "./UserReducer";

export type State = ReturnType<typeof CombineReducers>;
