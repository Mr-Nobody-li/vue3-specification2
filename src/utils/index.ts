/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-07
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2022-11
 * @Description: 引入utils中所有文件导出的方法
 */

const modules = import.meta.glob('./*.*', { eager: true })

let obj: Utils
for (const path in modules) {
  obj = Object.assign(obj || {}, modules[path])
}

export default obj
