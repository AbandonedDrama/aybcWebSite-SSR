module.exports = {
  /* Nuxt.js 使用 lru-cache 提供组件缓存功能以获得更好的渲染性能。 */
  cache: true,
  /* Nuxt.js 让你可以配置全局 CSS 文件、模块、库（每个页面都会被引入）。 */
  css: [
    /* 全局css */
  ],
  /* 静态打包时调用 */
  generate: {
    dir: 'aybcWebSite'
  },
  /* 滚送至顶部 */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    }
  },
  /*
  ** Headers of the page
  */
  head: {
    title: '智能导购机器人---深圳市哎哟不错机器人科技有限公司',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '深圳市哎呦不错机器人科研有限公司是家专业从事研发、生产、销售智能导购器人的高科技创新公司。公司依托于物联网与大数据，利用最先进的计算平台，针对性地成功研发出更快速、更精准、更灵活、更实用的门店智能导购机器人。旨在实现传统门店向智能门店的转变，提升门店的智能管理，形成智能门店的产业生态链。' },
      { name: 'keywords', content: '哎呦不错,哎哟不错,导购机器人,智能导购机器人,门店智能机器人,内衣导购机器人,哎呦不错妹妹,哎哟不错妹妹' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /* 为客户端和服务端的构建配置进行手工的扩展处理。 */
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /* 分析打包结果 */
    analyze: true,
    /* babel配置 */
    babel: {
      plugins: [['component', [
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-default'
        }
      ]]]
    },
    /* 自定义 webpack 加载器 */
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 10KO
          name: 'img/[name].[hash].[ext]'
        }
      }
      // {
      //   test: /\.less$/,
      //   loader: 'style-loader!css-loader!less-loader'
      // }
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
      //   loader: 'file-loader'
      // },
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
      //   loader: 'file-loader',
      //   query: {
      //     name: '[name].[ext]?[hash]'
      //   }
      // }
    ],
    /* Nuxt.js 允许你在自动生成的 vendor.bundle.js 文件中添加一些模块，以减少应用 bundle 的体积。这里说的是一些你所依赖的第三方模块 (比如 axios) */
    vendor: ['axios', 'element-ui']
  },
  /* 配置 Webpack 插件 */
  plugins: ['~plugins/ElementUi']
}
