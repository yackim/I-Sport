import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Inscription from '../components/Inscription.vue'
import Connecter from '../components/Connecter.vue'

const routes = [
  {
    path: '/hello',
    name: 'hello',
    component: HelloWorld
  },
  {
    path: '/ins',
    name: 'inscription',
    component: Inscription
  },
  {
    path: '/bro',
    name: 'Connecter',
    component: Connecter
  }
]

const router = createRouter({
  history: createWebHistory(""),
  routes
})

export default router
