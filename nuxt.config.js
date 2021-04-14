export default {

  // router: {
  //   middleware: 'auth'
  // },

  server: {
    port: 3000,
    host: '0.0.0.0' //默认是localhost
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    htmlAttrs: { // 对应 HTML_ATTRS 属性
      lang: 'en'
    },
    headAttrs:{ // HEAD_ATTRS
      name:"headname"
    },
    bodyAttrs:{ // BODY_ATTRS
      style:'background-color: green'
    },
    title: '博客社区站点_IT技术',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '//static.aliyin.com/service/css/element.css?v=123' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-inject.js',
    '~/plugins/ctx-inject.js',
    '@/plugins/all-inject.js',
    '@/plugins/interceptor.js',
    '~/api/test.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
  ],

  axios:  {
    proxy:  true, //  开启代理
    prefix: '/api',  // 请求接口添加前缀  /api -> /api/test
  },

  proxy:  { //代理转发
    '/api': { // /api/test -> https://mock.mengxuegu.com/mock/6073001f56076a4a76484460/blog-web/test
      target: 'https://mock.mengxuegu.com/mock/6073001f56076a4a76484460/blog-web',
      pathRewrite:  {'^/api': ''}
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
