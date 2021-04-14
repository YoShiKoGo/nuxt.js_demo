<template>
    <div>
        <!-- <h1>这是错误页{{error.statusCode}}, 错误信息：{{error.message}}</h1> -->
        <h1 v-if="error.statusCode === 404">
            您访问的页面不存在：{{error.message}}
        </h1>
        <h1 v-else>
            请求接口失败或超时！请刷新重试：{{error.message}}
        </h1>
    </div>
</template>
<script>
export default {
    props: ['error'],    //引用error对象
    // layout:'blog/index'
    layout(context) {
        return 'blog/index'
    }
}
</script>