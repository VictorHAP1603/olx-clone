import { initialStateProps, Action } from "./types";

const initialValue = {
  email: "",
};

export const UserReducer = (
  state: initialStateProps = initialValue,
  action: Action
) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload.email };
  }

  return state;
};

export * as UserActionCreator from "./actions";

