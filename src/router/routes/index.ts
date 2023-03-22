/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-11
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-03
 * @Description: 路由表
 */
import { RouteRecordRaw } from 'vue-router'

const IndexView = () => import('@/views/index-view.vue')

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: IndexView,
  },
]
