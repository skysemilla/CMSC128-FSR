import axios from 'axios';

export const addExtension = extensionInfo => {
	return axios.post('/api/extension/add', positionInfo);
};

export const deleteExtension = extensionInfo => {
	return axios.post('/api/extension/delete', positionInfo)
};

export const editExtension = extensionInfo => {
	return axios.post('/api/extension/edit', positionInfo)
};

export const viewAllExtensions = () => {
	return axios.post('/api/extension/viewAll')
};

export const viewExtension = () => {
	return axios.post('/api/extension/view')
};