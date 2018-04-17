import axios from 'axios';

export const addExtension = extensionInfo => {
	return axios.post('/api/extension/add', extensionInfo);
};

export const deleteExtension = extensionInfo => {
	return axios.post('/api/extension/delete', extensionInfo)
};

export const editExtension = extensionInfo => {
	return axios.post('/api/extension/edit', extensionInfo)
};

export const viewAllExtensions = () => {
	return axios.post('/api/extension/viewAll')
};

export const viewExtension = id => {
	return axios.post('/api/extension/view', id)
};