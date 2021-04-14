<template>
    
</template>
<script>
export default {
    //服务端(nuxt)
    asyncData({app}) {
        //不能少'$'符号
        app.$myAllFunction('asyncData')
    },
    //客户端(vue)
    mounted() {
        this.$myAllFunction('mounted')
    },
}
</script>