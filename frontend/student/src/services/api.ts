import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_URL || 'http://localhost:3011',
    timeout: 50000,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
