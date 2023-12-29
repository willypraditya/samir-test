import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import DetailsView from '@/views/Details/DetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailsView
    }
  ]
})

export default router
