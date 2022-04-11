import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home/index.vue'),
    meta: { tab: true }
  },
  {
    path: '/market',
    name: 'Market',
    component: () => import('@/views/market/index.vue'),
    meta: { tab: true }
  },
  {
    path: '/me',
    name: 'Me',
    component: () => import('@/views/me/index.vue'),
    meta: { tab: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
