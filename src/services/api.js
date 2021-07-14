import axios from 'axios'
import environment from '../env'

const api = axios.create({ 
    baseURL: environment == 'prd' 
        ? 'http://productionurl.com.br/api' 
        : 'http://127.0.0.1:8000/api'
})

api.interceptors.request.use(
    request => {
        request.headers = {
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': "Bearer " + localStorage.getItem('access_token'),
        }
      return request
    },
    error => error
)

export default api