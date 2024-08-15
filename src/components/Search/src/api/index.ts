import axios from "axios";
import configEnv from "./configEnv";

export const getValue = (key: string) => window.localStorage.getItem(key);

export const getObject = (key: string) => {
  const jsonValue = getValue(key);
  if (!jsonValue) {
    return null;
  }

  return jsonValue;
};

const AccessToken = "@conductor:token";
const UserNameToken = "@conductor:userName";

const api = axios.create({
  baseURL: configEnv.baseUrl,
  timeout: 10 * 1000,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Security-Policy": "upgrade-insecure-requests",
    "x-auth-profile": "employee",
    "x-auth-realm": "SNB-Internal",
  },
});

api.interceptors.request.use(async (config) => {
  const token = getObject(AccessToken);
  const userName = getObject(UserNameToken);
  config.baseURL = configEnv.baseUrl;
  if (token) {
    config.headers!.authorization = `Bearer ${token}`;
    config.headers!["X-App-Name"] = `${userName?.replace(/['"]+/g, "")}`;
  }
  return config;
});

export default api;
