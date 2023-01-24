import {createRouter, createWebHashHistory} from 'vue-router'
import Home from '@/views/Home.vue'
import Settings from '@/views/Settings.vue'
import Rules from '@/views/Rules.vue'
import Start from '@/views/Start.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/rules',
    name: 'rules',
    component: Rules
  },
  {
    path: '/start',
    name: 'start',
    component: Start
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
