import axios from 'axios';

export const addConsultation = consulationInfo => {
	return axios.post('/api/consultation/add', consulationInfo);
};

export const deleteConsultation = consulationInfo => {
	return axios.post('/api/consultation/delete', consulationInfo)
};

export const editConsultation = consulationInfo => {
	return axios.post('/api/consultation/edit', consulationInfo)
};

export const viewAllConsultation = () => {
	return axios.post('/api/consultation/viewAll')
};

export const viewConsultation = () => {
	return axios.post('/api/position/view')
};