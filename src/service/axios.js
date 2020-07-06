/* eslint-disable */
import axios from 'axios'
export default axios.create({
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Credentials': "true",
    'Access-Control-Allow-Origin': "*",
    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
  }
})