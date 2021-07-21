import Cookies from "js-cookie";
import qs from "qs";

const BASE_URL = "http://alunos.b7web.com.br:501";

export type IApiFetchPostProps = {
  endpoint: string;
  body: {
    email?: string;
    password?: string;
    token?: string;
    name?: string;
    state?: string;
  };
  notallowed?: string;
};

export type IApiFetchGetProps = {
  endpoint: string;
  body?: {
    email?: string;
    password?: string;
    token?: string;
    name?: string;
    state?: string;
    limit?: number;
    sort?: "asc" | "desc";
  };
  notallowed?: string;
};

export const apiFetchPost = async ({ endpoint, body }: IApiFetchPostProps) => {
  if (body && !body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASE_URL + endpoint}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

export const apiFetchGet = async ({ endpoint, body }: IApiFetchGetProps) => {
  if (body && !body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.token = token;
    }
  }

  const res = await fetch(`${BASE_URL + endpoint}?${qs.stringify(body)}`);

  const json = await res.json();

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};
