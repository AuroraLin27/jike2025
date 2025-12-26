import axios from 'axios'
import { getToken, removeToken } from './token'
import router from '@/router'

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
    return response.data
  }, (error)=> {
    // 监控状态码:error.response.status
    if (error.response.status === 401) {
      removeToken()
      router.navigate('/login')
      // 强制刷新
      window.location.reload()
    }
    return Promise.reject(error)
})

export {request}