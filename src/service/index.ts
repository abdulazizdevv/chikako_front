import axios from 'axios';

// Check if localStorage is available (i.e., running in a browser)
let token: string | null = null;
if (typeof window !== 'undefined') {
  token = localStorage.getItem('token');
}

export const baseURL = `https://single.uz/api`;
export const baseURLImg = `https://single.uz/uploads`;

const axiosInstance = axios.create({
  baseURL: baseURL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
