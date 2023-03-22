/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-10
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-03
 * @Description: main
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import * as JtIconsVue from '@jt-icons/icon-vue-components'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import utils from './utils/index'

window.utils = utils

const pinia = createPinia()
const app = createApp(App)

app.use(ElementPlus, { locale: zhCn })
app.use(router)
app.use(pinia)

for (const [key, component] of Object.entries({ ...JtIconsVue, ...ElementPlusIconsVue })) {
  app.component(key, component)
}

app.mount('#app')
