import axios from "axios";

// URL da Api utilizada
const api = axios.create({
    baseURL : "http://localhost:8081",
})
export default api;