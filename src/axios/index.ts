/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-10
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-03
 * @Description: axios封装
 */
import axios from 'axios'

export const request = axios.create({
  baseURL: '/api',
  timeout: 10000, //超时配置
  withCredentials: true, //跨域携带cookie
})

// 添加请求拦截器
request.interceptors.request.use(
  function (config: any) {
    // do something...
    return config
  },
  function (error) {
    // do something...
    return Promise.reject(error)
  }
)

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // do something...
    return response
  },
  function (error) {
    // do something...
    return Promise.reject(error)
  }
)
