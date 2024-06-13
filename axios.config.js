
import axios from 'axios';

const instance = axios.create({
 // baseURL: 'https://rolesa-server.webclosuresandbox.cloud', 
  baseURL: 'http://127.0.0.1:8000', 
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default instance;
