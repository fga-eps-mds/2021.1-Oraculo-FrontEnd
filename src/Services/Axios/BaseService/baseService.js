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
        if (error.response.status === 500) {
            localStorage.clear();
            window.location.reload();
        }
        return Promise.reject(error);
    }
);

APITags.interceptors.response.use(
    async (response) => {
        try {
            const authToken = await response.status;
            if (authToken === 500 || authToken === 401) {
                localStorage.clear();
                window.location.reload();
            }
            return response;
        } catch (err) {
            return response;
        }
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
            const authToken = await response.status;
            if (authToken === 500 || authToken === 401) {
                localStorage.clear();
                window.location.reload();
            }
            return response;
        } catch (err) {
            return response;
        }
    },
    (error) => {
        if (error.response.status === 500) {
            localStorage.clear();
            window.location.reload();
        }
        return Promise.reject(error);
    }
);
