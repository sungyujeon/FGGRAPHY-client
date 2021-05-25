<template>
  <div>    
    <div class="row d-flex justify-content-center">      
      <div class="col-6 border">        
        <img v-if="movie.poster_path" :src="posterPath" alt="" style="width: 20vw; height: 50vh;" class="my-3">          
        <h1 v-else>loading</h1>
      </div>
      <div class="col-6 border d-flex flex-column justify-content-between" >
        <div>          
          <h5 class="mt-3">{{ movie.title }} | ★{{ movie.rating_average }}</h5>
          <p class="mt-3 px-5 no-overflow">{{ movie.overview }}</p>                    
        </div>
        <Star :movie="movie" :rating="rating"/>
        <MovieReviewCreate class="mb-3" :movie="movie"/>        
      </div>      
    </div>      
  </div>
</template>

<script>
import axios from 'axios'
import Star from '@/components/Star.vue'
import MovieReviewCreate from '@/components/MovieReviewCreate.vue'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieDetailInfo',
  components: {
    MovieReviewCreate,
    Star,
  },
  data: function () {
    return {
      movie: {
        poster_path: null
      },
      rating: 0,
    }
  },
  computed: {
    posterPath: function () {
      return `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
    }     
  },
  created: function () {    
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/${this.$route.params.id}`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        this.movie = res.data
        axios({
          method: 'get',
          url: `${SERVER_URL}/api/v1/movies/${res.data.id}/rating/`,
          headers: {
            Authorization: `JWT ${this.$store.state.userToken}`
          },
        })
          .then((res)=>{
            this.rating = parseFloat(res.data.rating)
          })
          .catch((err) => {
            console.log(err)
          })
      })
      .catch((err) => {
        console.log(err)
      })
  }
  
}
</script>

<style>
  .no-overflow {
    overflow-y: auto;
    max-height: 40vh;
  }
</style>