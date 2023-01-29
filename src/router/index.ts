// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
  },
  {
    path: '/processes',
    component: () => import('@/components/CComponentTableProcesses'),
  },
  {
    path: '/hello_world',
    component: () => import('@/components/HelloWorld'),
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
