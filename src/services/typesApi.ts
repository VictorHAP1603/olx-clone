// ==================================== FUNCTIONS PROPS  =======================================

export interface IGetRecentsAdsFunctionProps {
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

export interface IGetAdInfosJsonProps {
  category: {
    name: string;
    slug: string;
    _id: string;
  };
  dateCreated: string;
  description: string;
  id: string;
  images: string[];
  // others:
  price: number;
  priceNegotiable: boolean;
  stateName: string;
  title: string;

  userInfo: {
    name: string;
    email: string;
  };

  views: number;
}
