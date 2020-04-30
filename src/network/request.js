/* import axios from "axios";
var baseURL = "http://127.0.0.1:3000";
axios.interceptors.response.use(res => {
  return res.data;
});
export function request(url, params) {
  return axios.get(baseURL + url, {
    params: params
  });
}
 */

import axios from "axios";
var baseURL = "http://127.0.0.1:3000";
axios.interceptors.response.use((res) => {
  return res.data;
});
export function request(url, params) {
  return axios.get(baseURL + url, {
    params: params,
  });
}
