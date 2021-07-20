// ======================= PROMISES =================

export interface ISignInProps {
  token: string;
  error: string;
  email: string;
}

export interface IRegisterProps {
  token: string;
  error: string;
}

export interface IGetStatesProps {
  states: {
    _id: string;
    name: string;
  }[];
}
