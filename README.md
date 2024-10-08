npm# 项目说明

使用vuepress创建类似ElementUI组件库文档示例代码

# 常用命令
启动：vuepress dev docs, 启动后访问 http://localhost:8080/
打包：vuepress build docs

# 开发环境
主要关注文件：
1. docs/.vuepress/config.js，可以配置开发环境端口、文档的具体展示项；
2. docs/.vuepress/components，如果想展示的为自定义组件，可以放在此处，后续正常引用和使用即可；
3. docs/view/comps目录，一个md文件为一个菜单；
4. md文件和平时的写法大致相同，:::demo标签内写代码可以实现：既可以预览效果，又可以看到源码的效果；


