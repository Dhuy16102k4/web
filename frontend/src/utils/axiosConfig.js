import axios from 'axios';


const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',  
  timeout: 10000,  
});

// Interceptor to attach the Authorization token to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');  
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config; 
  },
  (error) => Promise.reject(error)  
);

axiosInstance.interceptors.response.use(
  (response) => response, 
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem('authToken'); 
      window.location.href = '/login';  
    }
    return Promise.reject(error);  
  }
);

export default axiosInstance;
