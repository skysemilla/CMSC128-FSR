import axios from 'axios';

export const login = credentials => {
  return axios.post('/api/login', credentials);
};

export const logout = () => {
  return axios.post('/api/logout');
};

export const getSession = () => {
  return axios.post('/api/session');
};

export const signup = form => {
  return axios.post('/api/signup', form);
};
