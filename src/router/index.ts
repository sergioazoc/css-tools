import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/letter-counter',
      name: 'letter-counter',
      component: () => import('@/views/LetterCounterView.vue')
    },
  ],
  linkActiveClass: 'active'
})

export default router
