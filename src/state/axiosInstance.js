import axios from "axios";

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // ✅ Use VITE_ prefix with Vite
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleRequest = (config) => {
  // Example: add token from localStorage
  // const token = localStorage.getItem("token");
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
  console.log("Request config:", config);
  return config;
};

const handleRequestError = (error) => {
  console.error("Request error:", error);
  return Promise.reject(error);
};

// Response Interceptor
const handleResponse = (response) => {
  console.log("Response:", response);
  return response;
};

const handleResponseError = (error) => {
  console.error("Response error:", error);
  if (error.response?.status === 401) {
    // Handle unauthorized errors (e.g., redirect to login)
  }
  return Promise.reject(error);
};

// Attach interceptors
axiosInstance.interceptors.request.use(handleRequest, handleRequestError);
axiosInstance.interceptors.response.use(handleResponse, handleResponseError);

export default axiosInstance;
