import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://devhubbackend.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;
