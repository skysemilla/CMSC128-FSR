import axios from 'axios';

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