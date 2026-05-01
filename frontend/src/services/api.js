import axios from "axios";

const API = axios.create({
  baseURL: "https://teamtaskmanager-production-fb3a.up.railway.app/api"
});

export default API;
