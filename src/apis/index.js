import axios from 'axios'

const serve = axios.create({
    baseURL: "http://124.222.89.187:6679",
    timeout: 6 * (1000 * 60),
    withCredentials: true,
    // headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
})

// 请求的拦截
serve.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
serve.interceptors.response.use((response) => {
    // 对响应数据做点什么 
    // console.log('响应拦截',response)
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});

const get = (url, data) => {
    return new Promise((resolve, reject) => {
        serve
            .get(url, {
                params: data
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const deleter = (url, data) => {
    return new Promise((resolve, reject) => {
        serve
            .delete(url, {
                params: data
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const post = (url, data) => {
    // 可能需要qs 进行json的转换
    data = {
        ...data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    }
    return new Promise((resolve, reject) => {
        serve
            .post(url, data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
const put = (url, data) => {
    return new Promise((resolve, reject) => {
        serve
            .put(url, data)
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });
};
export default{
    get,
    post,
    deleter,
    put
};