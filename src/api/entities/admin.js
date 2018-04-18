import axios from 'axios';

export const enableFaculty = empid => {
  return axios.post('/api/admin/enable', empid);
};

export const disableFaculty = empid => {
  return axios.post('/api/admin/disable', empid);
};
