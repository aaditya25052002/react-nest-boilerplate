import axios from "axios";
import { toast } from "sonner";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000",
  headers: {
    Accept: "application/json, text/plain, */*",
  },
});

axiosClient.interceptors.response.use(
  (response) => {
    const method = response.config.method.toUpperCase();
    if (["POST", "PUT", "PATCH", "DELETE"].includes(method || ""))
      toast.success(response.data.message);
    return response.data;
  },
  (error) => {
    toast.error("Error Occured!");
    return Promise.reject(error);
  },
);

export default axiosClient;
