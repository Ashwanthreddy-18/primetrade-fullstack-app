import axios from "axios";

const API = axios.create({
  baseURL: "https://primetrade-backend-yzin.onrender.com/api",
});

export default API;
