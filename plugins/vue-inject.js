import Vue from 'vue'

/**
 * 客户端插件
 * @param {test} string 
 */
//es6
// Vue.prototype.$myInjectedFunction = string => console.log('绑定到Vue实例里面的参数：'+ string)
Vue.prototype.$myInjectedFunction = function(string) {
    console.log('绑定到Vue实例里面的参数：'+ string)
}
