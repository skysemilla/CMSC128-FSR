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

export const viewAllSubjects = () => {
	return axios.post('/api/subject/viewAll');
};

export const deleteSubject = subjectInfo => {
	return axios.post('/api/subject/remove', subjectInfo)
};

export const editSubject = subjectInfo => {
	return axios.post('/api/subject/edit', subjectInfo)
};

export const addSubject = () => {
	return axios.post('/api/subject/add')
};