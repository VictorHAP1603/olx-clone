export interface initialStateProps {
  email: string;
}

export interface Action {
  type: string;
  payload: {
    email: string;
  };
}
