import { apiFetchGet, apiFetchPost } from "../helpers/requests";
import { ISignInProps, IGetStatesProps, IRegisterProps } from "./typesApi";

export const useApi = {
  signIn: async (email: string, password: string): Promise<ISignInProps> => {
    const object = {
      endpoint: "/user/signin",
      body: { email: email, password: password },
    };

    const json = await apiFetchPost(object);

    return json;
  },

  getStates: async (): Promise<IGetStatesProps> => {
    const object = {
      endpoint: "/states",
    };

    const json = await apiFetchGet(object);

    return json;
  },

  register: async (
    name: string,
    email: string,
    password: string,
    locationState: string
  ): Promise<IRegisterProps> => {
    const object = {
      endpoint: "/user/signup",
      body: {
        name,
        email,
        password,
        state: locationState,
      },
    };

    const json = await apiFetchPost(object);

    return json;
  },
};
