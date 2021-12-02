import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Inscription from '../components/Inscription.vue'

const routes = [
  {
    path: '',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/ins',
    name: 'inscrition',
    component: Inscription
  }
]

const router = createRouter({
  history: createWebHistory(""),
  routes
})

export default router
