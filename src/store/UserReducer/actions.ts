import { Dispatch } from "redux";

export const setEmail = (email: string) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "SET_EMAIL",
      payload: { email },
    });
  };
};
