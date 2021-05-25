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
import SearchMovie from '@/views/SearchMovie.vue'
import Loading from '@/views/Loading.vue'
import GenreDetailHome from '@/views/GenreDetailHome.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading,
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/login/',
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
    path: '/signup/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/ranking/',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/recommendation/',
    name: 'Recommendation',
    component: Recommendation
  },
  {
    path: '/movies/:id/',
    name: 'MovieDetail',
    component: MovieDetail
  },
  {
    path: '/movies/:movie_id/reviews/:review_id/',
    name: 'ReviewDetail',
    component: ReviewDetail
  },
  {
    path: '/movies/:movie_id/trailer/',
    name: 'MovieTrailer',
    component: MovieTrailer,
  },
  {
    path: '/search/',
    name: 'SearchMovie',
    component: SearchMovie,
  },
  {
    path: '/:username/',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/ranking/:genre_id/:genre_name',
    name: 'GenreDetailHome',
    component: GenreDetailHome
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
