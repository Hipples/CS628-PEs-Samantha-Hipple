import axios from 'axios';

const apiHost = process.env.APP_API_HOST;
const apiPort = process.env.APP_API_PORT || 3000;
const apiURL = `${apiHost}:${apiPort}`;