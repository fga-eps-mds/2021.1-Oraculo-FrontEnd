import axios from "axios";

import { BaseUrlProfile } from "../../../Constants/baseUrls";

export const APIProfile = axios.create({
  baseURL: BaseUrlProfile,
});

APIProfile.interceptors.response.use(
  async (res) => res,
  (err) => {
    if (err.res.status === 500) {
      localStorage.clear();
      window.location.reload();
    }
    return Promise.reject(err);
  }
);
