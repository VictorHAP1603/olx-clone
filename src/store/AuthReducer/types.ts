export interface initialStateProps {
  isLogged: boolean;
}

export interface Action {
  type: string;
  payload: {
    email: string;
  };
}
