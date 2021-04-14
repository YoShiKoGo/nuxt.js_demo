//inject: 同时将方法注入到context和Vue实例和store当中
export default (context, inject) => {
    inject('myAllFunction', string => console.log('注入到context和Vue实例和store中的参数:' + string))
}