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
      path: '/character-counter',
      name: 'character-counter',
      component: () => import('@/views/CharacterCounterView.vue')
    },
    {
      path: '/word-counter',
      name: 'word-counter',
      component: () => import('@/views/WordCounterView.vue')
    },
  ],
  linkActiveClass: 'active'
})

export default router
