import axios from 'axios';

const apiHost = process.env.REACT_APP_API_HOST;
const apiPort = process.env.REACT_APP_API_PORT || 3001;
const apiURL = `${apiHost}:${apiPort}`;

console.log(apiURL)