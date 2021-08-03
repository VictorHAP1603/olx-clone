import Cookies from "js-cookie";
import qs from "qs";
import axios from "axios";

const api = axios.create({
  baseURL: "http://alunos.b7web.com.br:501",
});

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
    others?: boolean;
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

  api.defaults.headers.ContentType = "application/json";

  const json = await (await api.post(endpoint, body)).data;

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

  const json = await (await api.get(`${endpoint}?${qs.stringify(body)}`)).data;

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};

export const apiFetchFile = async ({ endpoint, body }: any) => {
  if (body && !body.token) {
    let token = Cookies.get("token");
    if (token) {
      body.append("token", token);
    }
  }

  const json = await (await api.post(endpoint, body)).data;

  if (json.notallowed) {
    window.location.href = "/signin";
    return;
  }

  return json;
};
