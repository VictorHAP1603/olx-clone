import { apiFetchGet, apiFetchPost } from "../helpers/requests";
import {
  ISignInJsonProps,
  IRegisterJsonProps,
  IGetCategoriesJsonProps,
  IGetStatesJsonProps,
  IGetAdsFunctionProps,
  IGetRecentsAdsJsonProps,
} from "./typesApi";

export const useApi = {
  signIn: async (email: string, password: string) => {
    const object = {
      endpoint: "/user/signin",
      body: { email: email, password: password },
    };

    const json: ISignInJsonProps = await apiFetchPost(object);

    return json;
  },

  register: async (
    name: string,
    email: string,
    password: string,
    locationState: string
  ) => {
    const object = {
      endpoint: "/user/signup",
      body: {
        name,
        email,
        password,
        state: locationState,
      },
    };

    const json: IRegisterJsonProps = await apiFetchPost(object);

    return json;
  },

  // GETS
  getStates: async () => {
    const object = {
      endpoint: "/states",
    };

    const json: IGetStatesJsonProps = await apiFetchGet(object);

    return json.states;
  },

  getCategories: async () => {
    const object = {
      endpoint: "/categories",
    };

    const json: IGetCategoriesJsonProps = await apiFetchGet(object);

    return json.categories;
  },

  getRecentAds: async ({ limit, sort }: IGetAdsFunctionProps) => {
    const object = {
      endpoint: "/ad/list",
      body: { limit, sort },
    };

    const { ads, total }: IGetRecentsAdsJsonProps = await apiFetchGet(object);

    return { ads, total };
  },
};
