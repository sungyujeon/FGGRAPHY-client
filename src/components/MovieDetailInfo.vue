<template>
  <div>    
    <div class="row d-flex justify-content-center">      
      <div class="col-4">        
        <img v-if="movie.poster_path" :src="posterPath" alt="" style="width: 18vw; height: 50vh;" class="my-3">          
        <h1 v-else>loading</h1>
      </div>
      <div class="col-8 d-flex flex-column justify-content-between" >
        <div>          
          <h5 class="mt-4 mb-4" style="font-size: 35px; font-weight: bold;">{{ movie.title }} | <font-awesome-icon :icon="['fas','star']" class="me-1 cursor-on" style="color: orange;"/>{{ movie.rating_average }}</h5>
          <div class="mt-1 mb-4 ms-5" style="font-size: 22px; text-align: left;">
            <p>관련장르 : <span v-for="genre in movie.genres" :key="genre.id">{{ genre.name }} / </span></p>
            <p>개봉일 : {{ movie.release_date }}</p>
            <p>런타임 : {{ movie.runtime }}분</p>
            <p>별점참여 : {{ movie.rating_count}}명</p>
          </div>
          <p class="px-5 no-overflow" style="font-size: 19px;">{{ movie.overview }}</p>                            
        </div>
        <Star :movie="movie" :rating="rating"/>
        <MovieReviewCreate v-if="movie.poster_path" class="mb-3" :movie="movie" :reviews="reviews"/>        
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
  props: {
    reviews: Array
  },
  data: function () {
    return {
      movie: {
        poster_path: ''
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
    max-height: 20vh;
  }

  h5 {
    margin: 0 auto;
    font: 400 1.3em;
    color: black;
    text-align: center;
  }
</style>