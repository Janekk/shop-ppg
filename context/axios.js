import axios from "axios";
import humps from "humps";
import { getToken } from "./session";

const instance = axios.create();

instance.interceptors.request.use((request) => {
  const authToken = getToken();
  if (authToken && request.headers && !request.headers.Authorization) {
    request.headers.Authorization = `Token ${authToken}`;
  }
  if (request.data) {
    request.data = JSON.stringify(humps.decamelizeKeys(request.data));
  }
  return request;
});

instance.interceptors.response.use((response) => {
  if (response.data) {
    return humps.camelizeKeys(response.data);
  }
});

export default instance;
