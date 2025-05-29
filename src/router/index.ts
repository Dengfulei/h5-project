import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/views/layout/Layout.vue'
import Home from '@/views/home/Home.vue'
import My from '@/views/my/My.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'index',
      path: '/',
      redirect:'/home',
      component: Index,
      children: [
        {
          name: 'home',
          path: '/home',
          component: Home,
        },
        {
          name: 'my',
          path: '/my',
          component: My,
        },
      ],
    },
    {
      path: '/detail',
      name: 'detail',
      component: import('@/views/detail/index.vue')
    }
  ],
})

export default router
