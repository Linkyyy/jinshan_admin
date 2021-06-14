import axios from 'axios'

axios.defaults.baseURL="127.0.0.1";

//请求拦截
axios.interceptors.request.use(config => {
    return config;
}, error => {
    return Promise.reject(error)
})

//响应拦截
axios.interceptors.response.use(response => {
    // endLoading();
    // store.commit("setIsLoading",false);
    if(response.data.stat=="ok")return response;
    else{
        return Promise.reject(response.data.message);
    }
}, error => {
    // endLoading();
    // store.commit("setIsLoading",false);
    console.log(error);
    return Promise.reject(error);
})

export default axios