import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'watch',
    component: () => import('../views/WatchView.vue')
  },
  {
    path: '/stopwatch',
    name: 'stopWatch',
    component: () => import('../views/StopWatchView.vue')
  },
  {
    path: '/timer',
    name: 'timer',
    component: () => import('../views/TimerView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
