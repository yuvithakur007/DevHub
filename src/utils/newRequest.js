import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://dev-hub-back-end.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
