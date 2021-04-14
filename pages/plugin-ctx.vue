<template>
    <div>

    </div>
</template>
<script>
export default {
    layout(context) {
        context.app.myContextFunction('context')
        return 'blog/index'
    },
    //服务端
    asyncData({app}) {
        app.myContextFunction('asyncData')
    },
}
</script>