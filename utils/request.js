import axios from 'axios'

export const http = axios.create({
	baseURL: 'http://192.168.3.8:8096',
	timeout: 10000
})

// Add a request interceptor
http.interceptors.request.use(function (config) {
    // Do something before request is sent
	uni.showLoading({
	    title: '加载中'
	});
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
http.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
	uni.hideLoading();
    return response;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
	uni.showToast({
	    title: error.toString(),
	    duration: 2000,
		icon: 'none'
	});
    return Promise.reject(error);
  });