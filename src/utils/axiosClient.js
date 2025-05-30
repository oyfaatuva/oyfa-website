import axios from "axios";

const axiosClient = axios.create({
	baseURL: `https://oyfaatuva.com/api`
})

axiosClient.interceptors.request.use((config) => {
	// JSON.parse() here because token stored with useLocalStorage hook which stores variables as JSON string
	const token = JSON.parse(localStorage.getItem('ACCESS_TOKEN'));
	config.headers.Authorization = `Bearer ${token}`
	return config;
})

axiosClient.interceptors.response.use((response) => {
 	return response
}, (error) => {
	const {response} = error;
	if (response.status === 401) {
		localStorage.removeItem('ACCESS_TOKEN')
		alert('Error: Unauthorized. Please login again.');
		window.location.reload();
	} else if (response.status === 404) {
		//Show not found
	}

	throw error;
})

export default axiosClient