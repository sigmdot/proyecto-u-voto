import axios from './axios'
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('acces_token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});


// const URL_API = 'https://rest-api-proyecto-soft.herokuapp.com'
/* const URL_API = 'http://localhost:3000' */
const URL_API = 'http://ec2-18-231-198-225.sa-east-1.compute.amazonaws.com/api'
// const PROXY_URL = 'https://cors-proxy-rest-api.herokuapp.com'
// const URL_API = 'http://localhost:4040'
export class Service {
  constructor () {
  }

  login (usuario) {

    const url = `${URL_API}/usuarios/login`
    return axios.post(url,usuario).then(response => response.data)
  }

  crearVotacion(votacion){
    const url = `${URL_API}/votaciones`
    return axios.post(url,votacion).then(response => response.data)
  }

  getVotacion(idVotacion){


    
    const url = `${URL_API}/votaciones/${idVotacion}`
    return axios.get(url).then(response => response.data)
  }
  votar(voto){
    const url = `${URL_API}/votaciones/votar`
    return axios.post(url,voto).then(response => response.data)
  }

  registrarse(usuario){
    const url = `${URL_API}/usuarios/signup`
    return axios.post(url,usuario).then(response => response.data)
  }
}