export default ({$axios}, inject)=>{
    //  test方法注入到context/vue/store
    inject('test', ()=> $axios.$get('/test'))
}