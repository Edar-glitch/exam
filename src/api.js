import axios from "axios"

const API = axios.create({
    baseURL: 'https://67adabd93f5a4e1477de930e.mockapi.io/eldar/pop',
    headers: {
        'Content-Type': 'application/json'
    },

})
export default API