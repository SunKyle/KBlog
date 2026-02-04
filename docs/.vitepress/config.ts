import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default defineConfig({
  base: '/KBlog/',
  title: '个人博客',
  description: '我的技术博客',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about/' }
    ],
    sidebar: {
      '/articles/': [
        {
          text: '技术文章',
          items: [
            { text: 'Vue 3 入门', link: '/articles/vue3-intro' },
            { text: 'Vite 性能优化', link: '/articles/vite-optimization' }
          ]
        }
      ]
    }
  }
})
