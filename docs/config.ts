import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "FormFilter",
    description: "一个基于 React 和 Ant Design 的灵活筛选表单 component",
    base: '/useFilter/',  // 对应你的 GitHub 仓库名
    themeConfig: {
        nav: [
            { text: '指南', link: '/guide/' },
            { text: 'API', link: '/api/' },
            { text: 'GitHub', link: 'https://github.com/chenJJ-88/useFilter' }
        ],
        sidebar: [
            {
                text: '介绍',
                items: [
                    { text: '快速开始', link: '/guide/' },
                    { text: '使用示例', link: '/guide/examples' }
                ]
            },
            {
                text: 'API',
                items: [
                    { text: 'useFilter', link: '/api/' },
                    { text: 'FilterForm', link: '/api/filter-form' }
                ]
            }
        ]
    }
})