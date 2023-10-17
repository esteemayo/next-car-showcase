import axios from 'axios';
import logger from './log';

const API = axios.create({
  baseURL: 'https://cars-by-api-ninjas.p.rapidapi.com/v1',
  headers: {
    'X-RapidAPI-Key': '6ceafa54a4mshb8e5c3f1600592bp157895jsn05473b1433b6',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com',
  },
});

API.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response &&
    error.response.status < 500;

  if (!expectedError) {
    logger.log(error);
  }

  return Promise.reject(error);
});

const http = {
  get: API.get,
};

export default http;
