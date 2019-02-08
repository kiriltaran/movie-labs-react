class AxiosClient {
  constructor(axiosInstance) {
    this.axios = axiosInstance
  }

  get(url, config) {
    return this.axios.get(url, config)
  }

  post(url, data, config) {
    return this.axios.post(url, data, config)
  }

  delete(url, config) {
    return this.axios.delete(url, config)
  }

  put(url, data, config) {
    return this.axios.put(url, data, config)
  }

  patch(url, data, config) {
    return this.axios.patch(url, data, config)
  }

  addRequestInterceptor(successCb, errCb) {
    this.axios.interceptors.request.use(successCb, errCb)
  }

  addResponseInterceptor(successCb, errCb) {
    this.axios.interceptors.response.use(successCb, errCb)
  }
}

export default AxiosClient
