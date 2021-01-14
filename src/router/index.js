import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'example1',
    component: () => import('../views/example1.vue')
  },
  {
    path: '/example2',
    name: 'example2',
    component: () => import('../views/example2.vue')
  },
  {
    path: '/example3',
    name: 'example3',
    component: () => import('../views/example3.vue')
  },
  {
    path: '/example4',
    name: 'example4',
    component: () => import('../views/example4.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
