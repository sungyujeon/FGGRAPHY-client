import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    userToken: null,
    movies: null,
    genres: Array.from(Array(19), (e, i) => i+1)
  },
  mutations: {
    SAVE_JWT: function (state, token) {
      state.userToken = token
    },
    DELETE_JWT: function (state) {
      state.userToken = null
    },
    GET_MOVIES: function (state, data) {
      state.movies = data
    }
  },
  actions: {
    getJWT: function (context, credential) {
      // console.log(context, credential)
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/api-token-auth/`,
        data: credential
      })
        .then((res)=>{
          // console.log(res.data.token)
          context.commit('SAVE_JWT', res.data.token)
        })
        .catch((err)=>{
          console.log(err)
        })
    },
    deleteJWT: function (context) {
      context.commit('DELETE_JWT')
    },
    // context안에 getters도 state도 모두 들어있다!!
    getMovies: function (context) {
      console.log(context)
      console.log(`JWT Token: ${context.state.userToken}`)
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/movies/`,
        headers: {
          Authorization: `JWT ${context.state.userToken}`
        }
      })
        .then((res)=>{
          console.log(res)          
          const result = res.data.filter(element => {
            console.log(element.poster_path)
            return element.poster_path
          });
          console.log(result)
          context.commit('GET_MOVIES', result)
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  },
  // getters의 첫 인자는 state
  getters: {
    // 분기처리 한 이유 : 로그인이 되어있는지 안되어있는지 True,False로 확인하기 위해서
    decodedToken: function (state) {
      // state안에 userToken값이 있으면
      if (state.userToken) {
        return jwt_decode(state.userToken)
      } else {
        return null
      }
    },
    getGenreGroups: function (state) {      
      const genreGroups = []
      let cnt = 0
      let genreGroup = []
      for (let genre of state.genres) {
        genreGroup.push(genre)
        cnt += 1
        if (cnt == 4) {
          genreGroups.push(genreGroup)
          genreGroup = []
          cnt = 0
        }
      }
      // genreGroup은 마지막 4개 들어있는 배열
      genreGroups.push(genreGroup)
      
      return genreGroups
      
    }
  },
  modules: {
  }
})
