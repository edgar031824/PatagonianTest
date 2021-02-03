import axios from 'axios';

const baseRequest = axios.create({
	baseURL: 'http://localhost:4000'
})

export default baseRequest;