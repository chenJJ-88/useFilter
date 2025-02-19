import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "useFilter",
  description: "一个基于 React 和 Ant Design 的灵活筛选表单 Hook",
  base: '/useFilter/',
  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/' },
      { text: 'API', link: '/api/' },
      { text: 'GitHub', link: 'https://github.com/chenJJ-88/useFilter' }
    ],
    sidebar: [
      {
        text: '指南',
        items: [
          { text: '介绍', link: '/guide/' },
          { text: '快速开始', link: '/guide/getting-started' },
          { text: '示例', link: '/guide/examples' }
        ]
      }
    ]
  }
}) 