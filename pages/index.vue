<template>
  <div class="container">
    <h2>首页标题： {{title}}</h2>
    <br>
    <ul>
      <li>标题：{{data.title}}</li>
      <li>内容：{{data.content}}</li>
      <li>作者：{{data.author}}</li>
      <!-- <li><nuxt-link>标题：{{data.title}}</nuxt-link></li>
      <li><nuxt-link>内容：{{data.content}}</nuxt-link></li>
      <li><nuxt-link>作者：{{data.author}}</nuxt-link></li> -->
    </ul>
    <div>
      <!-- 子路由组件渲染处 -->
      <nuxt-child/>
  </div>
  </div>
</template>

<script>
export default {
  //  当前引用的视图组件是：layouts\blog.vue
  // layout({app, route, store, env}) { //es6解构赋值 context只有在服务端执行的时候才能获取到
  //   console.log(app)
  //   return 'blog'
  // },
  data() {
    return {
      title: "这是首页标题",
    };
  },
  //设置当前头部标签的方法
  head() {
    return {
      title: this.title,
      bodyAttrs: {
        // BODY_ATTRS
        style: "background-color: white",
      },
      meta: [
        {hid: '', name: '', content: 'nuxt.js技术栈'}
      ]
    };
  },

  //加载组件之前服务端会调用
  // asyncData({$axios}) {
  //   // 方式1：使用了两个return
  //   return $axios.$get('https://mock.mengxuegu.com/mock/6073001f56076a4a76484460/blog-web/test')
  //   .then(response => {
  //     console.log('response',response)
  //     const data = response.data
  //     return { data }  //{data:data} 
  //   })
  // }

  //  方式2：通过async和await
  // async asyncData({$axios}) {
  //   //await:接口调用完成后再执行后面的
  //   const response = await $axios.$get('/test')
  //   console.log('response',response)
  //   return {data: response.data}
  // },

  //  方式3：通过插件  服务端：要解构赋值中加入app
  async asyncData({$axios, app}) {
    const response = await app.$test()
    console.log('response',response)
    return {data: response.data}
  },

  //客户端 用this.插件方法名
  async mounted() {
    const response = await this.$test()
    console.log('index.vue mounted:',response)
  },
  // 方法中使用插件
  methods: {
    async testAPIPlugin() {
      const response = await this.$test()
    }
  },
};
</script>

<style>
</style>
