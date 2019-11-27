import axios from "axios";

const api = axios.create({
  baseURL: "https://trim-field-260218.appspot.com",
  timeout: 3000
});

export default api;
