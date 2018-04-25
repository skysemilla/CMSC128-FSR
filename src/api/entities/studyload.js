import axios from 'axios';

export const addStudyLoad = studyLoadInfo => {
  return axios.post('/api/studyload/add', studyLoadInfo);
};

export const deleteStudyLoad = studyLoadInfo => {
  return axios.post('/api/studyload/delete', studyLoadInfo);
};

export const editStudyLoad = studyLoadInfo => {
  return axios.post('/api/studyload/edit', studyLoadInfo);
};

export const viewStudyLoad = () => {
  return axios.post('/api/studyload/view');
};
export const viewByStudyloadId = studyload_id_input => {
  return axios.post('/api/studyload/viewByStudyloadId', studyload_id_input);
};
export const viewAllStudyLoad = () => {
  return axios.get('/api/studyload/viewAll');
};
export const viewStudyCredentials = () => {
  return axios.get('/api/studyload/viewStudyCredentials');
};
export const editStudyCredentials = studyLoadInfo => {
  return axios.post('/api/studyload/editStudyCredentials', studyLoadInfo);
};
export const getDays = studyload_id => {
  return axios.post('/api/studyload/getDays', studyload_id);
};

export const getStudyLoadCredentialsFSR = info => {
  return axios.post('/api/studyload/getStudyLoadCredentialsFSR', info);
};

export const getStudyLoadFSR = info => {
  return axios.post('/api/studyload/getStudyLoadFSR', info);
};
