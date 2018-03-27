import axios from 'axios';

export const addStudyLoad = studyLoadInfo => {
	return axios.post('/api/studyload/add', studyLoadInfo);
};

export const deleteStudyLoad = studyLoadInfo => {
	return axios.post('/api/studyload/delete', studyLoadInfo)
};

export const editStudyLoad = studyLoadInfo => {
	return axios.post('/api/studyload/edit', studyLoadInfo)
};

export const viewStudyLoad = studyLoadInfo => {
	return axios.post('/api/studyload/view', studyLoadInfo)
};

export const viewAllStudyLoad = () => {
	return axios.post('/api/studyload/viewAll');
};