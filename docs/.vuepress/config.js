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
    sidebar: [
      // SidebarItem
      {
        text: '指南',
        link: '/',
      },

      // {
      //   text: 'Introduction',
      //   link: '/list/introduction.md'
      // },
      // {
      //   text: 'Get Started',
      //   link: '/list/getStarted.md'
      // },
      // {
      //   text: 'Security',
      //   link: '/list/security.md'
      // },
      // {
      //   text: 'Available Networks',
      //   link: '/list/availableNetworks.md'
      // },
      // {
      //   text: 'DASHBOARD',
      //   link: '/list/DASHBOARD.md'
      // },
      // {
      //   text: 'AUTH SERVICE',
      //   link: '/list/AUTH_SERVICE.md'
      // },
      // {
      //   text: 'WALLET SERVICE',
      //   link: '/list/WALLET_SERVICE.md'
      // },
      // {
      //   text: 'NFT SERVICE',
      //   link: '/list/NFT_SERVICE.md'
      // },
      // {
      //   text: 'NODE SERVICE',
      //   link: '/list/NODE_SERVICE.md'
      // },
      // {
      //   text: 'RESOURCES',
      //   link: '/list/RESOURCES.md'
      // },

      {
        text: '技术文档',
        collapsible: true,
        children: [
          {
            text: 'Introduction',
            children: ['/list/introduction.md']
          },
          {
            text: 'Get Started',
            children: ['/list/getStarted.md']
          },
          {
            text: 'Security',
            children: ['/list/security.md']
          },
          {
            text: 'Available Networks',
            children: ['/list/availableNetworks.md']
          },
          {
            text: 'DASHBOARD',
            children: ['/list/DASHBOARD.md']
          },
          {
            text: 'AUTH SERVICE',
            children: ['/list/AUTH_SERVICE.md']
          },
          {
            text: 'WALLET SERVICE',
            children: ['/list/WALLET_SERVICE.md']
          },
          {
            text: 'NFT SERVICE',
            children: ['/list/NFT_SERVICE.md']
          },
          {
            text: 'NODE SERVICE',
            children: ['/list/NODE_SERVICE.md']
          },
          {
            text: 'RESOURCES',
            children: ['/list/RESOURCES.md']
          }
        ]
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
            text: '如何编写文档',
            children: ['/markdown.md'],
          }
        ],
      },
      {
        text: 'API',
        collapsible: true,
        children: [
          {
            text: '如何接入api',
            children: ['/api.md'],
          }
        ],
      },
      {
        text: 'SDK',
        collapsible: true,
        children: [
          {
            text: '下载和使用SDK',
            children: ['/sdk.md'],
          }
        ],
      }
    ],
  }),
}