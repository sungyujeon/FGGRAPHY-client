<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col-10">
        <GenreDetailHomeLeft :movieLists="movieLists" :rankers="rankers"/>
      </div>
      <div class="col-2">
        <div class="mt-5" style="font-size: 20px; font-weight: bold;">{{ this.$route.params.genre_name }}랭킹</div>
        <GenreDetailHomeRight :rankers="rankers"/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import GenreDetailHomeLeft from '@/components/GenreDetailHomeLeft.vue'
import GenreDetailHomeRight from '@/components/GenreDetailHomeRight.vue'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'GenreDetailHome',
  data: function () {
    return {
      movieLists: [],
      rankers: [],
    }
  },
  components: {
    GenreDetailHomeLeft,
    GenreDetailHomeRight
  },
  created: function () {
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/genres/${this.$route.params.genre_id}/top-ranked/?ranker_nums=10&movie_num=10`,
      headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        console.log(res)        
        res.data.forEach(element => {
          this.rankers.push(element.user) 
          this.movieLists.push(element.movies)                            
        });        
      })
  }
}
</script>

<style>

</style>