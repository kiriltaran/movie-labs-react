import axios from 'axios'

const config = {
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'feb97d72efaa362d5f6b7718a003614e',
  },
}

const mdbClient = axios.create(config)

export default mdbClient
