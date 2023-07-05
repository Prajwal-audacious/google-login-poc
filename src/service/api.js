import axios from "axios";

const ApiCaller = (url, method, data = {}, host) => {
  return axios({
    url: `${host}${url}`,
    method,
    data,
    headers: { Authorization: localStorage.getItem("authToken") || "" },
  });
};

export default ApiCaller;
