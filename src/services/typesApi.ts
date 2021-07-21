// ==================================== FUNCTIONS PROPS  =======================================

export interface IGetAdsFunctionProps {
  sort: "desc" | "asc";
  limit: number;
}

// ==================================== JSON PROPS =======================================
export interface ISignInJsonProps {
  token: string;
  error: string;
  email: string;
}

export interface IRegisterJsonProps {
  token: string;
  error: string;
}

export interface IGetCategoriesJsonProps {
  categories: {
    _id: string;
    name: string;
    slug: string;
    img: string;
  }[];
}

export interface IGetStatesJsonProps {
  states: {
    _id: string;
    name: string;
  }[];
}

export interface IGetRecentsAdsJsonProps {
  ads: {
    id: string;
    title: string;
    price: number;
    priceNegotiable: boolean;
    image: string;
  }[];
  total: number;
}
