import axios from "axios";

export const axiosBase = axios.create({
  baseURL: `http://${window.location.hostname}:9999/`,
});
