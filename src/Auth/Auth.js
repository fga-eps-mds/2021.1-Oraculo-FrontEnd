const STORAGE_KEY = "user-token";

const isAuthenticated = () => !!localStorage.getItem(STORAGE_KEY);

const login = (token) => localStorage.setItem(STORAGE_KEY, token);

const logout = () => localStorage.removeItem(STORAGE_KEY);

export { isAuthenticated, login, logout };
