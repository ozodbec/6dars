import axios from "axios";
 const url = 'https://dummyjson.com/products';

 export const castumFetch = axios.create({
    baseURL: url
 })