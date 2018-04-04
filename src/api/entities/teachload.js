import axios from 'axios';

export const addTeachLoad = teachLoadInfo => {
	return axios.post('/api/teachload/add', teachLoadInfo);
};

export const deleteTeachLoad = teachLoadInfo => {
	return axios.post('/api/teachload/delete', teachLoadInfo)
};

export const editTeachLoad = teachLoadInfo => {
	return axios.post('/api/teachload/edit', teachLoadInfo)
};

export const viewTeachLoad = () => {
	return axios.post('/api/teachload/view')
};

export const viewAllTeachLoad = () => {
	return axios.post('/api/teachload/viewAll');
};
