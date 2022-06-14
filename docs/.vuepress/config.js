const { defaultTheme } = require('vuepress')
module.exports = {
  lang: 'zh-CN',
  title: '你好， VuePress ！',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    sidebar: [
      // SidebarItem
      {
        text: '指南',
        children: [
          // SidebarItem
          {
            text: '介绍',
            link: '/2',
            collapsible: true,
          },
          {
            text: '介绍2',
            link: '/2',
            children: ['/a'],
          },
        ],
      },
    ],
  }),
}