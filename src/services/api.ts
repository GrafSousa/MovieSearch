import axios from 'axios';

const api = axios.create({
	baseURL: 'http://www.omdbapi.com',
});

export { api };
