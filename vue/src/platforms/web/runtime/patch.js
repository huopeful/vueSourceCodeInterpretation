/* @flow */

import * as nodeOps from 'web/runtime/node-ops' // nodeOps是 'web/runtime/node-ops' 这个文件中导出的所有的方法的一个对象  这些方法是关于平台拥有操作dom的一些方法的封装
import { createPatchFunction } from 'core/vdom/patch'
import baseModules from 'core/vdom/modules/index'
import platformModules from 'web/runtime/modules/index'

// the directive module should be applied last, after all
// built-in modules have been applied.
// cancat方法  合并2个数组 platformModules是平台封装的用于操作style,class,属性(attrs),事件(events)这些的合集模块 用于生产dom    baseModules 基本的模块 指令(directives) ref这些
const modules = platformModules.concat(baseModules)
// nodeOps 一些实际的操作DOM的方法
// 函数科里化 nodeOps modules都是和平台相关的  vue是可以实现跨端的应用  weex 和 web
// 先传入平台相关的参数 利用createPatchFunction这个方法返回一个真正的patch(进过平台定制后的) 之后再调用就已经是确定平台了,进行了平台定制的patch,不用再理会平台的羁绊 不用做if(web){web的操作}else if(weex){weex的操作}这些重复的代码
// modules 经过了函数科里化,依据传入的平台参数,会生成不同(各个平台定制的)的modules
export const patch: Function = createPatchFunction({ nodeOps, modules })
