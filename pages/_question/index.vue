<template>
    <div>
        <h2>问答列表-{{$route.params.question}}</h2>
    </div>
</template>
<script>
export default {
    validate({params}){
        const arr = ['wait', 'hot', 'new']
        console.log('问答列表',arr.indexOf(params.question))
        return arr.indexOf(params.question) != -1
    },
    asyncData({params}) {
        const question = params.question
        console.log('question',params.question)
        //根据question做业务逻辑.... 查询列表
    },
}
</script>