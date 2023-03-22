/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-07
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-03
 * @Description:
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Utils {
  LS?: LStype
  operations?: { [key: string]: string }
  formatTimestamp?: FormatTimestamp
  download?: Download
  getAsideMenus?: GetAsideMenus
  fieldValidate?: FieldValidate
  checkStrong?: CheckStrong
  resetPassword?: ResetPassword
}

declare interface Window {
  utils: Utils
  message: import('element-plus').Message
}
