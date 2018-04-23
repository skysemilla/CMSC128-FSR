import axios from 'axios';

export const addConsultation = consultationInfo => {
  return axios.post('/api/consulHours/add', consultationInfo);
};

export const deleteConsultation = consultationInfo => {
  return axios.post('/api/consulHours/delete', consultationInfo);
};

export const editConsultation = consultationInfo => {
  return axios.post('/api/consulHours/edit', consultationInfo);
};

export const viewAllConsultations = () => {
  return axios.get('/api/consulHours/viewAll');
};

export const viewConsultation = id => {
  return axios.post('/api/consulHours/view', id);
};