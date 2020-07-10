import axios from 'axios';

const api = axios.create({
   baseUrl: 'http://localhost:3022'
});

export default api;