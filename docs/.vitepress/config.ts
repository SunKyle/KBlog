import { defineConfig } from 'vitepress'

// 同步版本的侧边栏配置
function generateSidebarSync() {
  const sidebar: any = {
    '/articles/': [
      {
        text: '技术文章',
        collapsible: true,
        collapsed: false,
        items: [
          { text: 'Vue 3 入门', link: '/articles/vue/vue3-intro' },
          { text: 'Vite 性能优化', link: '/articles/vue/vite-optimization' },
          { text: 'Test Article', link: '/articles/vue/test-article' },
          { text: 'Frontmatter 测试文章', link: '/articles/vue/frontmatter-test' }
        ]
      }
    ],
    '/life/': [
      {
        text: '生活随笔',
        collapsible: true,
        collapsed: false,
        items: [
          { text: '日常感悟', link: '/life/thoughts' },
          { text: '旅行见闻', link: '/life/travel' }
        ]
      }
    ],
    '/about/': []
  }

  return sidebar
}

export default defineConfig({
  // 基础路径（保持你的原有配置）
  base: '/KBlog/',
  title: 'KBlog',
  description: '分享记录美好生活',
  lang: 'zh-CN',

  // 头部标签（增强 SEO、体验、兼容性）
  head: [
    ['link', { rel: 'icon', href: '/KBlog/favicon.ico', type: 'image/x-icon' }], // 补充 icon 类型
    ['link', { rel: 'apple-touch-icon', href: '/KBlog/logo.svg' }], // 苹果设备图标适配
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'keywords', content: 'Vue3,Vite,前端开发,技术博客,生活随笔' }],
    ['meta', { name: 'author', content: 'sunxiaokai' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }]
  ],
  // 主题配置（优化体验、补充实用功能）
  themeConfig: {
    logo: '/KBlog/logo.svg',

    // 导航栏（优化交互、补充提示）
    nav: [
      { text: '首页', link: '/', activeMatch: '^/$' }, 
      { text: '技术文章', link: '/articles/', activeMatch: '^/articles/' },
      { text: '生活随笔', link: '/life/', activeMatch: '^/life/' },
      { text: '关于', link: '/about/', activeMatch: '^/about/' },
    ],
    // 侧边栏（自动生成）
    sidebar: generateSidebarSync(),
    
    // 社交链接（优化显示、补充图标提示）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunxiaokai/KBlog' },
      { icon: 'twitter', link: 'https://twitter.com' },
      { icon: 'linkedin', link: 'https://linkedin.com' }
    ],
    // 页脚（优化文案、增强版权信息）
    footer: {
      message: '欢迎交流学习，基于 VitePress 构建',
      copyright: 'Copyright © 2026. All Rights Reserved.'
    },

    // 编辑链接（优化文案、补充提示）
    editLink: {
      pattern: 'https://github.com/sunxiaokai/KBlog/edit/main/docs/:path',
      text: '发现错误？点击编辑此页'
    },
  },
  // 新增：Markdown 优化（提升内容展示体验）
  markdown: {
    lineNumbers: true, // 代码块显示行号
    // 支持脚注、删除线等扩展语法
    typographer: true
  }
})