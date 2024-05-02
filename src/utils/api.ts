import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:32831',
});

export default api;