import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

// vue是一个function实现的一个class
function Vue (options) {
  // process (进程对象) 是一个全局变量，它提供有关当前 Node.js 进程的信息并对其进行控制。 作为一个全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。
  if (process.env.NODE_ENV !== 'production' &&
  // instanceof运算符用来判断一个构造函数的prototype属性所指向的对象是否存在另外一个要检测对象的原型链上
  // 这里判断是不是vue的实例
    !(this instanceof Vue)
  ) {
    // 这里是报错 vue是一个构造函数,需要通过new关键字来创建
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  // 在 instance/init.js中定义  在vue原型中定义_init方法 进行初始化操作
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
