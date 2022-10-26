import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home

    },
    {
      path: '/Adoption',
      name: 'Adoption',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Adoption.vue')
    },
    {
      path: '/BreedRegistry',
      name: 'BreedRegistry',
      component: () => import('../views/BreedRegistry.vue')
    },
    {
      path: '/CategoryRegistration',
      name: 'CategoryRegistration',
      component: () => import('../views/CategoryRegistration.vue')
    },
    {
      path: '/GiveAdoption',
      name: 'GiveAdoption',
      component: () => import('../views/GiveAdoption.vue')
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("../views/NoPageFound.vue"),
  },
  ]
})

export default router
