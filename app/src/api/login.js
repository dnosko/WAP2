import axios from "axios"

const authorizedAxios = axios.create();

authorizedAxios.interceptors.response.use(
	(res) => {
	  return res;
	},
	async (err) => {
	  const originalRequest = err.config;
  
	  	if (err.response) {
			// Access Token was expired
			if (err.response.status === 401 && !originalRequest._retry) {
			originalRequest._retry = true;
			
			await axios.get("http://localhost:3001/refresh")
				.then(res => {
					authorizedAxios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data.access_token;
					originalRequest.headers['Authorization'] = 'Bearer ' + res.data.access_token;
				})
				.catch(err => {
					console.log(err)
					localStorage.removeItem("token");
					window.location = "login";
				});
				return authorizedAxios(originalRequest);
			}
		}
		return Promise.reject(err);
	}
);

const setToken = (token) => {
	authorizedAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

export { authorizedAxios, setToken };