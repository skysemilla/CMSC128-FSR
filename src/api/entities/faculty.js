import axios from 'axios';

export const ViewAllFaculty = () => {
  return axios.get('/api/faculty/viewAll');
};
