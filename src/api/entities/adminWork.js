import axios from 'axios';

export const addPosition = positionInfo => {
  return axios.post('/api/position/add', positionInfo);
};

export const deletePosition = positionInfo => {
  return axios.post('/api/position/delete', positionInfo);
};

export const editPosition = positionInfo => {
  return axios.post('/api/position/edit', positionInfo);
};

export const viewAllPositions = () => {
  return axios.get('/api/position/viewAll');
};

export const viewPosition = id => {
  return axios.post('/api/position/view', id);
};

export const viewHisPosition = id => {
  return axios.post('/api/position/viewHis', id);
};