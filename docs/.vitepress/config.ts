import { defineConfig } from 'vitepress'

export default defineConfig({
  // 基础路径（保持你的原有配置）
  base: '/KBlog/',
  // 站点核心信息（增强 SEO）
  title: '个人博客 - 技术分享与生活随笔',
  titleTemplate: '', // 页面标题模板：文章标题 | 站点名称
  description: '专注前端技术分享（Vue3/Vite），记录生活感悟与旅行见闻的个人博客',
  // 语言配置（提升多语言适配和 SEO）
  lang: 'zh-CN',
  // 构建优化（提升生产环境性能）
  build: {
    minify: 'terser', // 更优的代码压缩
    terserOptions: {
      compress: {
        drop_console: true, // 生产环境移除 console
        drop_debugger: true // 生产环境移除 debugger
      }
    },
    chunkSizeWarningLimit: 1000 // 增大 chunk 大小警告阈值（避免不必要的警告）
  },
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
    // 暗黑模式（提升夜间阅读体验）
    darkMode: true,
    // 导航栏（优化交互、补充提示）
    nav: [
      { text: '首页', link: '/', activeMatch: '^/$' }, // 精确匹配激活状态
      { 
        text: '文章', 
        items: [
          { text: '技术文章', link: '/articles/', activeMatch: '^/articles/' },
          { text: '生活随笔', link: '/life/', activeMatch: '^/life/' }
        ]
      },
      { text: '关于', link: '/about/', activeMatch: '^/about/' },
      { 
        text: 'GitHub', 
        link: 'https://github.com/sunxiaokai/KBlog',
        target: '_blank', // 新窗口打开
        rel: 'noopener noreferrer' // 安全增强
      }
    ],
    // 侧边栏（优化层级、补充折叠功能）
    sidebar: {
      '/articles/': [
        {
          text: '技术文章',
          collapsible: true, // 可折叠（移动端友好）
          collapsed: false, // 默认展开
          items: [
            { text: 'Vue 3 入门', link: '/articles/vue3-intro' },
            { text: 'Vite 性能优化', link: '/articles/vite-optimization' }
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
      // 为 about 页添加空侧边栏（避免页面布局错乱）
      '/about/': []
    },
    // 侧边栏配置（全局优化）
    sidebarMenuLabel: '文章目录',
    // outline: {
    //   level: [2, 3], // 大纲仅显示 h2、h3 标题
    //   label: '本页目录' // 大纲标题
    // },
    // 社交链接（优化显示、补充图标提示）
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunxiaokai/KBlog', ariaLabel: 'GitHub 仓库' },
      { icon: 'twitter', link: 'https://twitter.com', ariaLabel: 'Twitter 主页' },
      { icon: 'linkedin', link: 'https://linkedin.com', ariaLabel: 'LinkedIn 主页' }
    ],
    // 页脚（优化文案、增强版权信息）
    footer: {
      message: '欢迎交流学习，基于 VitePress 构建',
      copyright: 'Copyright © 2026 sunxiaokai. All Rights Reserved.'
    },
    // 搜索功能（优化本地搜索体验）
    search: {
      provider: 'local',
      options: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索',
                buttonAriaLabel: '搜索'
              },
              modal: {
                displayDetails: '显示详情',
                noResultsText: '未找到相关结果',
                resetButtonTitle: '清空查询条件',
                backButtonTitle: '返回上一级',
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭'
                }
              }
            }
          }
        }
      }
    },
    // 最后更新（优化时间格式、增强提示）
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'YYYY-MM-DD', // 明确日期格式
        timeStyle: 'HH:mm:ss'
      }
    },
    // 编辑链接（优化文案、补充提示）
    editLink: {
      pattern: 'https://github.com/sunxiaokai/KBlog/edit/main/docs/:path',
      text: '发现错误？点击编辑此页',
      ariaLabel: '编辑当前页面'
    },
    // 新增：返回顶部按钮（提升长页面体验）
    returnToTop: {
      label: '返回顶部'
    },
    // 新增：面包屑导航（提升页面层级感知）
    breadcrumbs: true,
    // 新增：文档目录标题（优化可访问性）
    docTitle: {
      suffix: ' - 小凯的技术博客'
    }
  },
  // 新增：Markdown 优化（提升内容展示体验）
  markdown: {
    lineNumbers: true, // 代码块显示行号
    // 优化链接打开方式（外部链接新窗口）
    links: {
      target: '_blank',
      rel: 'noopener noreferrer'
    },
    // 支持脚注、删除线等扩展语法
    typographer: true
  }
})