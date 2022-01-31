import { createRouter, createWebHashHistory } from 'vue-router'
// 1. 定义路由组件.
// 也可以从其他文件导入
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'
import NotFound from '../components/NotFound.vue'
import Article from '../components/Article.vue'
import Films from '../components/Films.vue'

// 2. 定义一些路由
// 每个路由都需要映射到一个组件。
// 我们后面再讨论嵌套路由。
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/news/:id', component: News },
  // 动态路由参数必须数字
  { path: '/article/:id(\\d+)', component: Article },
  // +动态路由参数必须有，可以多个。*参数可以任意个数
  { path: '/films/:id+', component: Films },
  { path: '/:path(.*)', component: NotFound },
]

// 3. 创建路由实例并传递 `routes` 配置
// 你可以在这里输入更多的配置，但我们在这里
// 暂时保持简单
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})

export default router