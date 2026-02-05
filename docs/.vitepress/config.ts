import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

// 获取当前文件目录
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const docsDir = path.join(__dirname, '..')

// 完全自动生成侧边栏配置
function generateSidebarSync() {
  const sidebar: any = {
    '/articles/': [],
    '/life/': [],
    '/about/': []
  }

  try {
    // 处理技术文章
    const articlesDir = path.join(docsDir, 'articles')
    if (fs.existsSync(articlesDir)) {
      // 遍历文章分类目录
      const categories = fs.readdirSync(articlesDir, { withFileTypes: true })
        .filter((dirent: any) => dirent.isDirectory())
        .map((dirent: any) => dirent.name)
      
      categories.forEach((category: string) => {
        const categoryDir = path.join(articlesDir, category)
        const files = fs.readdirSync(categoryDir)
          .filter((file: string) => file.endsWith('.md') && file !== 'index.md')
        
        if (files.length > 0) {
          // 为每个分类创建二级导航
          const categoryNav = {
            text: category.charAt(0).toUpperCase() + category.slice(1), // 首字母大写
            collapsible: true,
            collapsed: false,
            items: [] as any[]
          }
          
          files.forEach((file: string) => {
            const fileName = file.replace('.md', '')
            const filePath = path.join(categoryDir, file)
            
            // 尝试从文件内容中提取标题
            let title = fileName
            try {
              const content = fs.readFileSync(filePath, 'utf8')
              
              // 尝试从 frontmatter 中提取标题
              const frontmatterMatch = content.match(/^---[\s\S]*?title:\s*(.+?)[\s\S]*?---/)
              if (frontmatterMatch && frontmatterMatch[1]) {
                title = frontmatterMatch[1].trim()
              } else {
                // 尝试从第一个 h1 标题中提取
                const h1Match = content.match(/^#\s+(.+)$/m)
                if (h1Match && h1Match[1]) {
                  title = h1Match[1].trim()
                }
              }
            } catch (error) {
              // 如果出错，使用文件名作为标题
              title = fileName.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())
            }
            
            categoryNav.items.push({
              text: title,
              link: `/articles/${category}/${fileName}`
            })
          })
          
          sidebar['/articles/'].push(categoryNav)
        }
      })
    }
    
    // 处理生活随笔
    const lifeDir = path.join(docsDir, 'life')
    if (fs.existsSync(lifeDir)) {
      // 遍历生活随笔分类目录
      const categories = fs.readdirSync(lifeDir, { withFileTypes: true })
        .filter((dirent: any) => dirent.isDirectory())
        .map((dirent: any) => dirent.name)
      
      categories.forEach((category: string) => {
        const categoryDir = path.join(lifeDir, category)
        const files = fs.readdirSync(categoryDir)
          .filter((file: string) => file.endsWith('.md') && file !== 'index.md')
        
        if (files.length > 0) {
          // 为每个分类创建二级导航
          const categoryNav = {
            text: category, // 使用目录名作为分类名称
            collapsible: true,
            collapsed: true,
            items: [] as any[]
          }
          
          files.forEach((file: string) => {
            const fileName = file.replace('.md', '')
            const filePath = path.join(categoryDir, file)
            
            // 尝试从文件内容中提取标题
            let title = fileName
            try {
              const content = fs.readFileSync(filePath, 'utf8')
              
              // 尝试从 frontmatter 中提取标题
              const frontmatterMatch = content.match(/^---[\s\S]*?title:\s*(.+?)[\s\S]*?---/)
              if (frontmatterMatch && frontmatterMatch[1]) {
                title = frontmatterMatch[1].trim()
              } else {
                // 尝试从第一个 h1 标题中提取
                const h1Match = content.match(/^#\s+(.+)$/m)
                if (h1Match && h1Match[1]) {
                  title = h1Match[1].trim()
                }
              }
            } catch (error) {
              // 如果出错，使用文件名作为标题
              title = fileName.replace(/-/g, ' ').replace(/^\w/, c => c.toUpperCase())
            }
            
            categoryNav.items.push({
              text: title,
              link: `/life/${encodeURIComponent(category)}/${fileName}`
            })
          })
          
          sidebar['/life/'].push(categoryNav)
        }
      })
    }
  } catch (error) {
    console.error('Error generating sidebar:', error)
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