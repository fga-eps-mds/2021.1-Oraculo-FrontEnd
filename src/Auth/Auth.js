import jwt_decode from "jwt-decode";
import { getToken } from "../Services/Axios/profileService";

export const STORAGE_KEY = "user-token";

const isAuthenticated = () => !!localStorage.getItem(STORAGE_KEY);

const hasToken = () => isAuthenticated();

const login = (token) => localStorage.setItem(STORAGE_KEY, token);

const logout = () => localStorage.removeItem(STORAGE_KEY);

// Check if User token on local storage is valid
const tokenExpired = () => {
  if (hasToken()) {
    const token = getToken();

    // Decode token
    const decoded = jwt_decode(token);

    // Gets the expiration date of the token
    let expirationTime = new Date(decoded.exp * 1000);
    const now = new Date();

    // Checks if token is expired
    if (expirationTime > now) {
      // if token expired we need to clear it from local storage
      logout();
      return true;
    }
  }

  return false;
};

export { isAuthenticated, login, logout, tokenExpired, hasToken };
