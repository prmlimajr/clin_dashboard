export const TOKEN_KEY = 'ClinDashboard';
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const login = (token, user) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(`${TOKEN_KEY}_USER`, user.name);
  localStorage.setItem(`${TOKEN_KEY}_ADMIN`, user.admin);
};
export const getName = () => localStorage.getItem(`${TOKEN_KEY}_USER`);
export const isAdmin = () => localStorage.getItem(`${TOKEN_KEY}_ADMIN`) === 1;
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
