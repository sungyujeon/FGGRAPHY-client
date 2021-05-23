import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login.vue'
// import Detail from '@/views/Detail.vue'
import Signup from '@/views/Signup.vue'
import Ranking from '@/views/Ranking.vue'
import Recommendation from '@/views/Recommendation.vue'
import MovieDetail from '@/views/MovieDetail.vue'
import Profile from '@/views/Profile.vue'
import ReviewDetail from '@/views/ReviewDetail.vue'
import MovieTrailer from '@/views/MovieTrailer.vue'

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
  {
    path: '/movies/:id',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/:username',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/movies/:movie_id/reviews/:review_id',
    name: 'ReviewDetail',
    component: ReviewDetail
  },
  {
    path: '/movies/:movie_id/trailer/',
    name: 'MovieTrailer',
    component: MovieTrailer,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
