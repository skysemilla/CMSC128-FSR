import axios from 'axios';

export const ViewAllFaculty = () => {
  return axios.get('/api/faculty/viewAll');
};

export const editProfile = facultyInfo => {
  return axios.post('/api/faculty/edit', facultyInfo);
};

export const editTerm = termInfo => {
  return axios.post('/api/faculty/termEdit', termInfo);
};

export const getEmployeeData = empid => {
  return axios.post('/api/faculty/data', empid);
};

export const SearchFacultyByName = name => {
  return axios.post('/api/faculty/searchByName', name);
};

export const SearchFacultyById = empid => {
  return axios.post('/api/faculty/searchById', empid);
};
