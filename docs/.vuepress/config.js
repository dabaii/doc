const { defaultTheme } = require('vuepress')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
  title: 'OASIS Develop Center',
  description: '这是我的第一个 VuePress 站点',
  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],
  theme: defaultTheme({
    // navbar: [
    //   // NavbarItem
    //   {
    //     text: 'Foo',
    //     link: '/foo/',
    //   },
    //   // NavbarGroup
    //   {
    //     text: 'Group',
    //     children: ['/group/foo.md', '/group/bar.md'],
    //   },
    //   // 字符串 - 页面文件路径
    //   '/bar/README.md',
    // ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: '指南',
        link: '/',
      },
      {
        text: '常用介绍',
        collapsible: true,
        children: [
          // SidebarItem
          // {
          //   text: '介绍',
          //   link: '/2',
          //   collapsible: true,
          // },
          // {
          //   text: '介绍2',
          //   children: ['/a'],
          // },
         {
          text:'如何编写文档',
          children: ['/markdown.md'],
         }
        ],
      },
      {
        text: 'API',
        collapsible: true,
        children: [
         {
          text:'如何接入api',
          children: ['/api.md'],
         }
        ],
      },
      {
        text: 'SDK',
        collapsible: true,
        children: [
         {
          text:'下载和使用SDK',
          children: ['/sdk.md'],
         }
        ],
      }
    ],
  }),
}