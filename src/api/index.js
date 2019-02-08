import axios from 'axios'

import { AxiosClient } from './clients'
import { Movies } from './modules'

const config = {
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'feb97d72efaa362d5f6b7718a003614e',
  },
}

const MDBInstance = axios.create(config)
const MDBClient = new AxiosClient(MDBInstance)

const api = {
  movies: new Movies(MDBClient),
}

export default api
