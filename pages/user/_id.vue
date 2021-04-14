<template>
    <div>
        <h1>查看用户详情：{{$route.params.id}}</h1>
    </div>
</template>
<script>
export default {
    //  nuxt.js提供的校验动态路由值的方法
    validate({params}) {
        console.log('校验请求参数：',params.id)
        //如果方法返回true则可以访问该组件，否则不允许
       return /^\d+$/.test(params.id)
    },

    asyncData({params}) {
        const id = params.id
        console.log('id',id)
        //根据id做业务逻辑....
        //服务端不能使用 this.$route.params.id 来获取id
    },
}
</script>