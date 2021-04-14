// 定义权限判断中间件，中间件的第一个参数是context
export default ({store,redirect})=>{
    console.log('auth.js认证中间件被调用')
    if(!store   || !store.state.userInfo){
        //如果未认证，则回到首页
        redirect('/')
    }
}