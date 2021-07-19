import { initialStateProps, Action } from "./types";
import Cookies from "js-cookie";

const initialValue = {
  isLogged: false,
};

export const AuthReducer = (
  state: initialStateProps = initialValue,
  action: Action
) => {
  switch (action.type) {
    case "IS_LOGGED":
      const token = Cookies.get("token");
      const isValid = token ? true : false;

      return { ...state, isLogged: isValid };
  }

  return state;
};

export * as AuthActionCreator from "./actions";
