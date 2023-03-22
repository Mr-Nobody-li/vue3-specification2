/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-10
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-03
 * @Description: 公共方法
 */
import * as dayjs from 'dayjs'
import { ElMessage } from 'element-plus'

window.message = ElMessage

export const LS: LStype = {
  get(key: string) {
    if (!key) {
      return null
    }
    key = key.toString()
    const data = window.localStorage.getItem(key)
    return JSON.parse(data)
  },
  set(key: string, value: any) {
    if (!key || !value) {
      return null
    }
    key = key.toString()
    window.localStorage.setItem(key, JSON.stringify(value))
  },
  deleteKey(key: string) {
    if (!key) {
      return
    }
    key = key.toString()
    window.localStorage.removeItem(key)
  },
  clear() {
    window.localStorage.clear()
  },
}

// 格式化时间戳
export const formatTimestamp: FormatTimestamp = (timestamp: number) => {
  if (!timestamp) return
  return dayjs.unix(timestamp).format('YYYY-MM-DD HH:mm:ss')
}
