import axios from 'axios';

export const addLimitedPractice = limitedpracticeInfo => {
	return axios.post('/api/limitedpractice/add', limitedpracticeInfo);
};

export const deleteLimitedPractice = limitedpracticeInfo => {
	return axios.post('/api/limitedpractice/delete', limitedpracticeInfo)
};

export const editLimitedPractice = limitedpracticeInfo => {
	return axios.post('/api/limitedpractice/edit', limitedpracticeInfo)
};

export const viewAllLimitedPractice = () => {
	return axios.post('/api/limitedpractice/viewAll')
};

export const viewLimitedPractice = () => {
	return axios.post('/api/limitedpractice/view')
};