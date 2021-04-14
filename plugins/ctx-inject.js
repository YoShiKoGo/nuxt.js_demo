//可以接收context对象
/**
 * context:上下问对象，也可以用结构复制{app,...}
 * inject: 同时将方法注入到context和Vue实例和store当中
 */
export default({app}, inject) => {
    app.myContextFunction = string => {
        //将myContextFunction注入到context中
        console.log('在context插件中的参数值：'+ string)
    }
}