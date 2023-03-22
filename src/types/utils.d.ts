/*
 * @Author: Mr-Nobody-li
 * @Date: 2022-11
 * @LastEditors: Mr-Nobody-li
 * @LastEditTime: 2023-03
 * @Description: utils方法的类型
 */

/// <reference types="axios" />

interface LStype {
  get(key: string): any
  set(key: string, value: any): any
  deleteKey(key: string): void
  clear(): void
}

type FormatTimestamp = (timestamp: number) => void | string
