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
    navbar: [
      // NavbarItem
      {
        text: 'OASIS',
        link: 'https://dabai-tap.vercel.app/',
      },
      {
        text: 'Business Center',
        link: 'https://dabai-tap.vercel.app/#/biz',
      },
      {
        text: 'Game Center',
        link: 'https://dabai-tap.vercel.app/#/game',
      },

    ],
    // 侧边栏数组
    // 所有页面会使用相同的侧边栏
    // collapsable: false,
    sidebar: [
      // SidebarItem
      // {
      //   text: '指南',
      //   link: '/'
      // },
      {
        text: 'Docs',
        collapsible: true,
        children: [
          {
            text: 'Introduction',
            link: '/guide/introduction.md'
          },
          {
            text: 'Get Started',
            link: '/guide/getStarted.md'
          },
          {
            text: 'Security',
            link: '/guide/security.md'
          },
          {
            text: 'Available Networks',
            link: '/guide/availableNetworks.md'
          },
          '/guide/DASHBOARD.md',
          '/guide/AUTH_SERVICE.md',
          '/guide/WALLET_SERVICE.md',
          '/guide/NFT_SERVICE.md',
          '/guide/NODE_SERVICE.md',
          '/guide/RESOURCES.md',
        ]
      },
      // {
      //   text: '常用介绍',
      //   collapsible: true,
      //   children: [
      //     // SidebarItem
      //     {
      //       text: '如何编写文档',
      //       children: ['/markdown.md'],
      //     }
      //   ],
      // },
      // {
      //   text: 'API',
      //   collapsible: true,
      //   children: [
      //     {
      //       text: '如何接入api',
      //       children: ['/api.md'],
      //     }
      //   ],
      // },
      {
        text: 'Download SDK(Gitbub)',
        link: 'https://www.github.com/',
       
      }
    ],
  }),
}