import axios from 'axios';

const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 3000,
});

http.interceptors.request.use(
    (config) => {
        config.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        };
        return config;
    },
    (error) => {
        console.log('request', error);
        return Promise.reject(error);
    },
);

http.interceptors.response.use(
    (response) => response.data || {},
    (error) => Promise.reject(error),
);

export default http;


const http = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    timeout: 3000,
});
