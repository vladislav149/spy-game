import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Locations from '@/views/Locations.vue'
import Professions from '@/views/Professions.vue'
import Rules from '@/views/Rules.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/locations',
    name: 'locations',
    component: Locations
  },
  {
    path: '/professions',
    name: 'professions',
    component: Professions
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
