import {createRouter, createWebHashHistory} from 'vue-router'
import Locations from '@/views/Locations.vue'

const routes = [
  {
    path: '/',
    name: 'locations',
    component: Locations
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
