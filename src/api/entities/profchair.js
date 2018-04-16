import axios from 'axios';

export const editProfessorialChair = facultyInfo => {
  return axios.post('/api/facultygrant/edit', facultyInfo);
};

export const viewFacultyGrant = id => {
  return axios.post('/api/facultygrant/viewEmp', id);
};

export const addFacultyGrant = id => {
   return axios.post('/api/facultygrant/add', id);
};
  
