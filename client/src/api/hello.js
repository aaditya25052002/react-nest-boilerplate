import axiosClient from "src/lib/axios-client";

const hello = () => axiosClient.get("hello");

export const helloApi = { hello };
