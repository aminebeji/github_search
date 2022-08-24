export const BASE_URL = process.env.VUE_APP_BASE_URL;
import axios from "axios";

export const api = async (url, params = {}) => {
  let instance = axios.create({
    baseURL: BASE_URL,
    headers: params.headers ? params.headers : {},
  });
  return await instance.get(url);
};

export const CusttomApi = async (url, params = {}) => {
  let instance = axios.create({
    baseURL: url,
    headers: params.headers ? params.headers : {},
  });
  return await instance.get();
};

