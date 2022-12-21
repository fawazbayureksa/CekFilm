import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
    headers: { 'X-RapidAPI-Key': process.env.REACT_APP_API_KEY, 'X-RapidAPI-Host': process.env.REACT_APP_API_HOST }
});


export default axiosInstance;
