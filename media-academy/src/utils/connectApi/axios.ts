import axios from "axios"

const baseUrl = axios.create({
    baseURL: 'https://api.github.com'
})

export default baseUrl;