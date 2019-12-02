import axios from 'axios'

export const request = axios.create({
	baseURL: 'https://',
	timeout: 50000
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	return config;
}, function (error) {
	
	return Promise.reject(error);
});
  
  // 添加响应拦截器
request.interceptors.response.use(function (response) {
	// 对响应数据做点什么 
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});