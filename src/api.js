import axios from "axios";

// http://localhost:3000
// baseURL: "https://api.github.com",

const api = axios.create({
    
    baseURL: "http://localhost:3333/users",
});

export default api;