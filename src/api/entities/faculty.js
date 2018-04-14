import axios from 'axios';

export const ViewAllFaculty = () => {
  return axios.get('/api/faculty/viewAll');
};

export const editProfile = facultyInfo => {
  return axios.post('/api/faculty/edit', facultyInfo);
};
