import axios from 'axios';

// 创建axios实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // api的base_url
    timeout: 6000 // 请求超时时间
});

// 请求拦截器
service.interceptors.request.use(
    config => {
        // 可以在这里添加请求头等信息
        // if (store.getters.token) {
        //   config.headers['X-Token'] = getToken();
        // }
        return config;
    },
    error => {
        // 请求错误处理
        console.log(error); // for debug
        Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    response => {
        // 对响应数据做处理，例如只返回data部分
        const res = response.data;
        // if (res.code !== 20000) {
        //   Message({
        //     message: res.message,
        //     type: 'error',
        //     duration: 5 * 1000
        //   });
        //   // 50008:非法令牌; 50012:其他客户端; 50014:令牌已过期;
        //   if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //     MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确认登出', {
        //       confirmButtonText: '重新登录',
        //       cancelButtonText: '取消',
        //       type: 'warning'
        //     }).then(() => {
        //       store.dispatch('FedLogOut').then(() => {
        //         location.reload(); // 为了重新实例化vue-router对象 防止bug
        //       });
        //     });
        //   }
        //   return Promise.reject('error');
        // } else {
        //   return response.data;
        // }
        return res;
    },
    error => {
        console.log('err' + error); // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
);

export default service;