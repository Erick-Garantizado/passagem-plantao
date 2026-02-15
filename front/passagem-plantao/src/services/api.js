import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    //headers: {
    //    'authorization': localStorage.getItem('user-token')
    //}
})
    api.interceptors.request.use((config) => {
    const token = localStorage.getItem("user-token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
    })

export default api