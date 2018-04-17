import axios from 'axios';

export const addLimitedPractice = limitedpracticeInfo => {
	return axios.post('/api/limitedpractice/add', limitedpracticeInfo);
};

export const deleteLimitedPractice = limited_practice_id => {
	return axios.post('/api/limitedpractice/delete', limited_practice_id)
};

export const editLimitedPractice = limitedpracticeInfo => {
	return axios.post('/api/limitedpractice/edit', limitedpracticeInfo)
};

export const viewAllLimitedPractice = () => {
	return axios.post('/api/limitedpractice/viewAll')
};

export const viewLimitedPractice = emp_id => {
	return axios.post('/api/limitedpractice/view', emp_id)
};