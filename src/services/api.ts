import { apiFetchGet, apiFetchPost, apiFetchFile } from "../helpers/requests";
import {
  ISignInJsonProps,
  IRegisterJsonProps,
  IGetRecentsAdsFunctionProps,
  IGetCategoriesJsonProps,
  IGetStatesJsonProps,
  IGetRecentsAdsJsonProps,
  IGetAdInfosJsonProps,
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

  getRecentAds: async ({ limit, sort }: IGetRecentsAdsFunctionProps) => {
    const object = {
      endpoint: "/ad/list",
      body: { limit, sort },
    };

    const { ads, total }: IGetRecentsAdsJsonProps = await apiFetchGet(object);

    return { ads, total };
  },

  getInfosAd: async (id: string, others: boolean = false) => {
    const object = {
      endpoint: "/ad/item",
      body: { id, others },
    };

    const json: IGetAdInfosJsonProps = await apiFetchGet(object);

    return json;
  },

  //Posts

  postAddAd: async (fData: FormData) => {
    const object = {
      endpoint: "/ad/add",
      body: fData,
    };

    const json: { id?: string; error?: string } = await apiFetchFile(object);

    console.log(json);

    return json;
  },
};
