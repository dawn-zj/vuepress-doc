// 官网 https://www.vuepress.cn/zh/theme/default-theme-config.html
const path = require('../utils/index.js');

module.exports = {
  theme: '',
  title: 'VuePress + Element',
  description: 'VuePress搭建Element的组件库文档教程示例代码',
  base: '/',
  port: '8080',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '组件',
        link: '/view/comps/'
      }
    ],
    sidebar: {
      '/view/comps/': [
          '', // 视为*/README.md
        {
          title: '文档',
          children: path.findMdFiles('/view/comps/')
        }
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}
