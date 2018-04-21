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

export const viewSubject = subjectInfo => {
	return axios.post('/api/subject/viewsubject', subjectInfo);
}

export const getSubjectDay = () => {
	return axios.post('/api/subject/getsubjectday');
}