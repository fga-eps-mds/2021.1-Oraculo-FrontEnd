import axios from "axios";
import { BaseUrlProcess, BaseUrlProfile, BaseUrlTags } from "../../../Constants/baseUrls";

export const APIProcess = axios.create({
  baseURL: BaseUrlProcess,
});

export const APIProfile = axios.create({
  baseURL: BaseUrlProfile,
});

export const APITags = axios.create({
  baseURL: BaseUrlTags,
});

APIProcess.interceptors.response.use(
  async (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

APITags.interceptors.response.use(
  async (response) => {
    const status = await response.status;
    console.log(`status: ${status}`);
    return response;
  },
  (error) => {
    if (error.response.status === 500) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(error);
  }
);

APIProfile.interceptors.response.use(
  async (response) => {
    try {
      const status = response?.status;
      console.log(`response: ${JSON.stringify(status)}`);
      return response;
    } catch (err) {
      return response;
    }
  },
  (error) => {
    console.log(`ERROR: ${JSON.stringify(error)}`);
    const status = error.response?.status;
    console.log(`status: ${status}`);
    return Promise.reject(error);
  }
);
