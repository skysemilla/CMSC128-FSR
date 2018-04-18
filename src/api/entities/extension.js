import axios from 'axios';

export const addExtension = extensionInfo => {
	return axios.post('/api/extension/add', extensionInfo);
};

export const deleteExtension = id => {
	return axios.post('/api/extension/delete', id)
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

export const viewExtensionByID = id => {
	return axios.post('/api/extension/viewByID', id)
};
