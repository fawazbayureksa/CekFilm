import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: { 'apikey': process.env.REACT_APP_API_KEY }
});

export default axiosInstance;
