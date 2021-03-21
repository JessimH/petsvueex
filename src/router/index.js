import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dogs',
    name: 'Dogs',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dogs.vue')
  },
  {
    path: '/cats',
    name: 'Cats',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cats.vue')
  },

  {
    path: '/pets/:specie/:id',
    name: 'Pets',
    component: () => import(/* webpackChunkName: "about" */ '../views/Pets.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
