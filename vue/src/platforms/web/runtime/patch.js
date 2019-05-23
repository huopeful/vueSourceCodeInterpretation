/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // 对dom操作的一些封装
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
const modules = platformModules.concat(baseModules)
// nodeOps 一些实际的操作DOM的方法
// 函数科里化 nodeOps modules都是和平台相关的  vue是可以实现跨端的应用  weex 和 web
export const patch: Function = createPatchFunction({ nodeOps, modules })
