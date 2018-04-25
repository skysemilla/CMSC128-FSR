import axios from 'axios';

export const addTeachLoad = teachLoadInfo => {
	return axios.post('/api/teachload/add', teachLoadInfo);
};

export const deleteTeachLoad = teachLoadInfo => {
	return axios.post('/api/teachload/delete', teachLoadInfo)
};

export const editTeachLoad = teachLoadInfo => {
	return axios.post('/api/teachload/edit', teachLoadInfo)
};

export const viewTeachLoad = () => {
	return axios.post('/api/teachload/view')
};

export const viewTeachLoadEmpAdmin = emp_id => {
	return axios.post('/api/teachload/viewempadmin', emp_id)
};

export const viewAllTeachLoad = () => {
	return axios.post('/api/teachload/viewAll');
};

export const editAddTeachLoadUnits = teachLoadInfo => {
	return axios.post('/api/teachload/editAddTeachLoadUnits/', teachLoadInfo)
};

export const editRemoveTeachLoadUnits = teachLoadInfo => {
	return axios.post('/api/teachload/editRemoveTeachLoadUnits/', teachLoadInfo)
};

export const getTeachLoad = teachLoadInfo => {
	return axios.post('/api/teachingload/viewByTeachloadId', teachLoadInfo)
};

export const getSubjectByTeachId = teachLoadInfo => {
	return axios.post('/api/teachload/subjectByTeachId', teachLoadInfo)
};