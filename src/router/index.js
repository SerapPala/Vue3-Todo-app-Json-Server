import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import YapilacakEkle from '../views/YapilacakEkle'
import YapilacakGuncelle from '../views/YapilacakGuncelle'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/yapilacak-ekle',
    name: 'YapilacakEkle',
    component: YapilacakEkle
  },
  {
    path: '/yapilacak-guncelle/:id',
    name: 'YapilacakGuncelle',
    component: YapilacakGuncelle,
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
