import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000
// baseURL: "https://api.github.com",

const api = axios.create({
    
    baseURL: "http://localhost:3333/users",
});

export default api;