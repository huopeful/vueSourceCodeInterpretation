/* @flow */

import { warn } from 'core/util/index'

export * from './attrs'
export * from './class'
export * from './element'

/**
 * Query an element selector if it's not an element already.
 */
export function query (el: string | Element): Element {
  if (typeof el === 'string') { // 如果传入的是string 调用js原生的方法 查找dom元素
    const selected = document.querySelector(el)
    if (!selected) {  // 找不到元素,报错 ,返回一个空的div dom元素
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      )
      return document.createElement('div')
    }
    return selected
  } else {
    // 如果是dom对象,直接返回
    return el
  }
}
