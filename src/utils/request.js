import axios from 'axios'
import { getToken } from './token'

const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
  timeout: 5000
})

// 请求发送之前插入自定义的配置（Cans胡的处理）
request.interceptors.request.use((config)=> {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bear ${token}`
    }
    return config
  }, (error)=> {
    return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response)=> {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data
  }, (error)=> {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error)
})

export {request}