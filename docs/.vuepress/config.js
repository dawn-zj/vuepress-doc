// 官网 https://www.vuepress.cn/zh/theme/default-theme-config.html
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
        'select',
        'table',
        'card',
        'dialog',
        'form',
        'windows之qemu'
      ]
    }
  },
  head: [],
  plugins: ['demo-container'],
  markdown: {}
}
