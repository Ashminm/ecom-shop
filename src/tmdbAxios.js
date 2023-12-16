import axios from "axios";

const tmdbAxios = axios.create({
    baseURL: "https://fakestoreapi.com/products"
})

export default tmdbAxios