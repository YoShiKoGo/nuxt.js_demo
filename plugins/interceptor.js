export default({store, route, redirect, $axios}) =>{

    $axios.onRequest(config => {
        console.log("请求拦截器-----")
        //  请求头添加token
        return config
    })

    $axios.onResponse(response => {
        console.log('响应拦截器：', response)
        return response
    })

    $axios.onError(error => {
        console.log('响应异常：', error.response.status)
    })
}