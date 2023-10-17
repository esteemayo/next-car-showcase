import http from './http';
const apiEndpoint = '/cars';

export const getCars = () => http.get(apiEndpoint);
