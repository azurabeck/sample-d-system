import axios from "axios";

export const getValue = (key: any) => window.localStorage.getItem(key);

export const getObject = (key: string) => {
  const jsonValue = getValue(key);
  if (!jsonValue) {
    return null;
  }

  return jsonValue;
};

export const apiConstants = {
  realm: "SNB-Internal",
  profile: "employee",
};

const NEXT_PUBLIC_BASE_URL = "https://api.dev.k8s.safra.int/";
const AccessToken = "@conductor:token";
const UserNameToken = "@conductor:userName";

const api = axios.create({
  baseURL: NEXT_PUBLIC_BASE_URL,
  timeout: 10 * 1000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Security-Policy": "upgrade-insecure-requests",
    "x-auth-profile": apiConstants.profile,
    "x-auth-realm": apiConstants.realm,
  },
});

api.interceptors.request.use(async (config) => {
  const token = getObject(AccessToken);
  const userName = getObject(UserNameToken);
  if (token) {
    config.headers!.authorization = `Bearer ${token}`;
    config.headers!["X-App-Name"] = `${userName?.replace(/['"]+/g, "")}`;
  }
  return config;
});

export default api;
