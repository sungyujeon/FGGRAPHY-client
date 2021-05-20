import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
// import Detail from '@/views/Detail.vue'
import Signup from '@/views/Signup.vue'
import Ranking from '@/views/Ranking.vue'
import Recommendation from '@/views/Recommendation.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // { 
  //   // :id 는 <int:id>와 같다고 생각하면된다.
  //   path: '/articles/:id',
  //   name: 'Detail',
  //   component: Detail,
  // },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/recommendation',
    name: 'Recommendation',
    component: Recommendation
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
