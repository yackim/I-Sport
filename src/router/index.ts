import { createRouter, createWebHistory } from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Inscription from '../components/Inscription.vue'
import Connecter from '../components/Connecter.vue'
import brouillon from '../components/brouillon.vue'
import login from '../components/login.vue'
import InscriptionProf from '../components/InscriptionProf.vue'

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
  },
  {
    path: '/brouillon',
    name: 'brouillon',
    component: brouillon
  },
  {
    path: '/login',
    name: 'login',
    component: login
  }
  ,
  {
    path: '/Prof',
    name: 'InscriptionProf',
    component: InscriptionProf
  }
]

const router = createRouter({
  history: createWebHistory(""),
  routes
})

export default router
