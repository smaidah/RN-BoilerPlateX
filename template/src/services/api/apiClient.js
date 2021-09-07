import axios from 'axios';

const CancelToken = axios.CancelToken;
const source = CancelToken.source();

export class AccessToken {
  static token;
  static source = source;
}

export const ApiClient = () => {
  const baseUrl = Environment.config().baseURL;
  const token = AccessToken.token;
  const defaultOptions = {
    cancelToken: AccessToken.source?.token,
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  };

  return {
    get: (url, options = {}) =>
      axios.get(`${baseUrl}${url}`, { ...defaultOptions, ...options }),
    post: (url, data, options = {}) =>
      axios.post(`${baseUrl}${url}`, data, { ...defaultOptions, ...options }),
    put: (url, data, options = {}) =>
      axios.put(`${baseUrl}${url}`, data, { ...defaultOptions, ...options }),
    delete: (url, options = {}) =>
      axios.delete(`${baseUrl}${url}`, { ...defaultOptions, ...options }),
  };
};

export const BuildMode = {
  DEV: 'DEV',
  QA: 'QA',
};

export const Environment = {
  buildMode: BuildMode.DEV,
  // buildMode: BuildMode.QA,

  /* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */

  configurations: {
    [BuildMode.DEV]: {
      baseURL: '',
    },
    [BuildMode.QA]: {
      baseURL: '',
    },
  },

  config(buildMode) {
    const mode = buildMode || this.buildMode;
    return this.configurations[mode];
  },
};
