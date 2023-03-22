/*
 * @Date: 2022-04-24 11:40:02
 * @Description:路由初始化
 */
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // do something...
  next()
})

export default router
