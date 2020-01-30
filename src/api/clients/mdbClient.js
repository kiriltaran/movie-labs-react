import axios from 'axios'

const config = {
  baseURL: process.env.MDB_BASE_URL || 'https://api.themoviedb.org/3',
}

const mdbClient = axios.create(config)

mdbClient.interceptors.request.use(
  request => {
    // eslint-disable-next-line no-param-reassign
    request.params.api_key = process.env.MDB_API_KEY || 'feb97d72efaa362d5f6b7718a003614e'

    return request
  },
  error => {
    // TODO: R&D reject vs throw
    throw error
  },
)

mdbClient.interceptors.response.use(
  ({ data }) => data,
  error => {
    // TODO: R&D reject vs throw
    throw error
  },
)

export { mdbClient }
