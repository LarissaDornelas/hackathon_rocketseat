import axios from "axios";

export const api = axios.create({
  baseURL: "https://trim-field-260218.appspot.com",
  timeout: 3000
});
