import axios from 'axios';

const api = axios.create({
  baseURL: 'https://questionsbank-api.herokuapp.com/api',
});

export default api;