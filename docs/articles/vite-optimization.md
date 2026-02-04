# Vite 性能优化

## 什么是 Vite

Vite 是一个现代化的前端构建工具，由 Vue.js 作者尤雨溪开发，专注于提供快速的开发体验。

## 性能优化策略

### 1. 依赖预构建

Vite 会自动预构建依赖项，将 CommonJS 模块转换为 ESM 模块，提高加载速度。

### 2. 代码分割

使用动态导入实现代码分割，减少初始加载体积：

```javascript
// 懒加载组件
const LazyComponent = () => import('./LazyComponent.vue')

// 路由懒加载
const routes = [
  {
    path: '/about',
    component: () => import('./views/About.vue')
  }
]
```

### 3. 图片优化

使用现代图片格式和适当的压缩：

- **WebP 格式**：提供更好的压缩率
- **响应式图片**：根据设备尺寸加载不同大小的图片
- **图片懒加载**：只在需要时加载图片

### 4. 构建优化

在 `vite.config.js` 中配置构建选项：

```javascript
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue'],
          router: ['vue-router'],
          store: ['pinia']
        }
      }
    }
  }
})
```

### 5. 开发服务器优化

- **使用缓存**：Vite 会缓存已编译的文件
- **热模块替换**：只更新修改的模块，无需刷新整个页面
- **快速启动**：利用 ES 模块的原生支持，启动速度极快

## 性能监控

使用 Chrome DevTools 或 Lighthouse 进行性能分析：

1. **Network 面板**：分析资源加载时间
2. **Performance 面板**：分析运行时性能
3. **Lighthouse**：生成性能报告和优化建议

## 最佳实践

- **最小化依赖**：只安装必要的依赖项
- **使用 CDN**：对于第三方库，考虑使用 CDN 加载
- **启用 gzip/brotli 压缩**：减少网络传输大小
- **合理使用 preload/prefetch**：提前加载关键资源