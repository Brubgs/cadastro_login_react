import axios from "axios";

const api = axios.create({
    baseURL: "https://cadastro-de-dsuarios.onrender.com"
})

export default api 