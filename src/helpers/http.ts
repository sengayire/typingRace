import axios, { AxiosError, AxiosResponse, AxiosRequestConfig } from "axios";
import jsCookie from "js-cookie";

const http = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_ACCOUNT_BASE_API_URL}`,
});

const requestHandler = (request: AxiosRequestConfig) => {
  if (!request.headers["X-Token"] && typeof window !== "undefined") {
    request.headers["X-Token"] = jsCookie.get("token") || "";
  }

  return request;
};

const errorHandler = (err: AxiosError) => {
  const { statusText } = err?.response || {};
  const message = err?.response?.data?.message || err?.message;

  return Promise.reject({
    ...err,
    error: true,
    message: message || statusText,
    data: {
      ...err.response,
      message: message || statusText,
    },
  });
};

export const successHandler = (response: AxiosResponse): AxiosResponse =>
  response;

http.interceptors.request.use((request) => requestHandler(request));

http.interceptors.response.use(
  (response) => successHandler(response),
  (error) => errorHandler(error)
);

export default http;
