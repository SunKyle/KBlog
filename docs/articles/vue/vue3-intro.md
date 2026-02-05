# Vue 3 入门

## 什么是 Vue 3

Vue 3 是 Vue.js 的最新主要版本，于 2020 年 9 月发布，带来了许多新特性和性能改进。

## 主要特性

### 1. Composition API

Composition API 是 Vue 3 中最重要的新特性之一，它允许我们使用函数式的方式组织组件逻辑。

```vue
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const count = ref(0)
const increment = () => count.value++
</script>
```

### 2. 响应式系统改进

Vue 3 使用 Proxy 替代了 Object.defineProperty，提供了更完整的响应式支持。

### 3. 更好的 TypeScript 支持

Vue 3 是用 TypeScript 重写的，提供了更好的类型推断和类型检查。

## 开始使用 Vue 3

### 1. 创建项目

使用 Vite 创建 Vue 3 项目：

```bash
npm create vite@latest my-vue3-app -- --template vue
cd my-vue3-app
npm install
npm run dev
```

### 2. 基本组件结构

Vue 3 组件可以使用 `<script setup>` 语法，使代码更简洁：

```vue
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
const title = 'Hello Vue 3'
const message = 'Welcome to the Vue 3 ecosystem'
</script>

<style scoped>
h1 {
  color: #42b883;
}
</style>
```