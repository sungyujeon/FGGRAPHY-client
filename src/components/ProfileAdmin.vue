<template>
  <div v-if="this.username === 'AdminUser'">
    <div class="d-flex justify-content-evenly my-4">
      <button @click="initModel" class="btn btn-primary">Init Genre Ranker Model</button>
      <button @click="updateAllRanking" class="btn btn-warning">Update All Users' Ranking</button>
      <button @click="updateGenreRanking" class="btn btn-danger">Update All Users' Genre Ranking</button>

    </div>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ProfileAdmin',
  data: function () {
    return {
      username: this.$store.getters.decodedToken.username
    }
  },
  methods: {
    initModel: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/movies/init-genre-ranker/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{  
          console.log(res)
        })
    },
    updateAllRanking: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/accounts/calc-ranking/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{  
          console.log(res)
        })
    },
    updateGenreRanking: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/movies/calc-genre-ranking/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{  
          console.log(res)
        })
    },
  },
}
</script>

<style>

</style>