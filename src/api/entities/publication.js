import axios from 'axios';

export const addPublication = publicationInfo => {
  return axios.post('/api/publication/add', publicationInfo);
};

export const editPublication = publicationInfo => {
  return axios.post('/api/publication/edit', publicationInfo);
};

export const removePublication = id => {
  return axios.post('/api/publication/delete', id);
};

export const viewPublications = () => {
  return axios.get('/api/publication/viewAll');
};

export const viewOnePublication = id => {
  return axios.post('/api/publication/view', id);
};

export const viewEmployees = () => {
	return axios.get('/api/publication/viewEmployees');
}

export const viewCoworkers = id => {
  return axios.get('/api/publication/viewCoworkers', id);
};

export const addCoworker = info => {
	return axios.post('/api/coworker/add', info);	
}

export const removeCoworkers = info => {
	return axios.post('/api/publication/deleteCoworkers', info);
}

export const getCoworkers = id => {
	return axios.post('/api/publication/getCoworkers', id);
}
