import axios from 'axios';
import Config from 'react-native-config';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export class AccessToken {
  static token;
  static source = source;
}

export const apiClient = () => {
  const apiUrl = Config.API_URL;
  const defaultOptions = {
    timeout: 90000,
    headers: {
      cancelToken: AccessToken.source?.token,
      token: AccessToken.token,
      'Content-Type': 'application/json',
      'User-Device': 'mobile',
    },
  };

  return {
    getBaseUrl: () => {
      return `${apiUrl}`;
    },
    get: (url, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${apiUrl}${url}`;
      }
      return axios.get(`${url}`, { ...defaultOptions, ...options });
    },
    post: (url, data, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${apiUrl}${url}`;
      }
      return axios.post(`${url}`, data, { ...defaultOptions, ...options });
    },
    put: (url, data, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${apiUrl}${url}`;
      }
      return axios.put(`${url}`, data, { ...defaultOptions, ...options });
    },
    delete: (url, options = {}) => {
      if (!isCompleteUrl(url)) {
        url = `${apiUrl}${url}`;
      }
      return axios.delete(`${url}`, { ...defaultOptions, ...options });
    },
  };
};

function isCompleteUrl(url = '') {
  let val = url.indexOf('https://') > -1 || url.indexOf('http://') > -1;
  return val;
}
