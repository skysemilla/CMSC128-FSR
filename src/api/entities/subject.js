import axios from 'axios';

export const viewAllSubjects = () => {
	return axios.post('/api/subject/viewAll');
};

export const deleteSubjectId = subjectInfo => {
	return axios.post('/api/subject/delete', subjectInfo)
};

export const editSubjects = subjectInfo => {
	return axios.post('/api/subject/edit', subjectInfo)
};

export const addSubjects = subjectInfo => {
	return axios.post('/api/subject/add', subjectInfo);
};

export const viewSubject = subjectInfo => {
	return axios.post('/api/subject/viewsubject', subjectInfo);
}

export const getSubjectDay = () => {
	return axios.post('/api/subject/getsubjectday');
}

export const getSubjectByID = subjectInfo => {
	return axios.post('/api/subject/getsubjectid', subjectInfo);
}