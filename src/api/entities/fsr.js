import axios from 'axios';

export const ViewApprovedFSR = () => {
  return axios.post('/api/fsr/viewApproved');
};

export const ViewPendingFSR = () => {
  return axios.post('/api/fsr/viewPending');
};

export const ViewApprovedFSRByID = empid => {
  return axios.post('/api/fsr/viewApprovedById', empid);
};

export const ViewApprovedFSRByName = name => {
  return axios.post('/api/fsr/viewApprovedByName', name);
};

export const ViewPendingFSRByID = empid => {
  return axios.post('/api/fsr/viewPendingById', empid);
};

export const ViewPendingFSRByName = name => {
  return axios.post('/api/fsr/viewPendingByName', name);
};

export const sendToAdmin = empid => {
  return axios.post('/api/fsr/send', empid);
};

export const rejectFSR = empid => {
  return axios.post('/api/fsr/reject', empid);
};
