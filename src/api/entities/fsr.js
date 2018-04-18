import axios from 'axios';

export const ViewApprovedFSR = () => {
  return axios.get('/api/fsr/viewApproved');
};

export const ViewPendingFSR = () => {
  return axios.get('/api/fsr/viewPending');
};
