import { Dispatch } from "redux";

export const isLoggedVerification = () => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: "IS_LOGGED",
    });
  };
};
