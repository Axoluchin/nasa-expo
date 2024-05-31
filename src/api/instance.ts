import axios from "axios";
import { NASA_API_KEY } from "../settings";

const instance = axios.create({
  baseURL: "https://api.nasa.gov/",
  params: {
    api_key: NASA_API_KEY,
  },
});

export default instance;
