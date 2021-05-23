<template>
  <div class="container">
    <p>{{ this.$route.params.id }}출력되는지 확인하기</p>
    <MovieDetailInfo/>
    <MovieDetailReview/>
    <!-- <h3>{{ movie.title }}</h3>
    <p>{{ movie.overview }}</p>
    <img :src="posterPath" alt="">
    <hr>
    <p v-for="review in movie.review_set" :key="review.id">
      {{ review.content }}
    </p>     -->
  </div>
</template>

<script>
import MovieDetailInfo from '@/components/MovieDetailInfo.vue'
import MovieDetailReview from '@/components/MovieDetailReview.vue'
// import axios from 'axios'

// const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieDetail',
  components: {
    MovieDetailInfo,
    MovieDetailReview
  }
//   data: function () {
//     return {
//       movie: null,
//       posterPath: `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
//     }
//   },
//   created: function () {    
//     axios({
//       method: 'get',
//       url: `${SERVER_URL}/api/v1/movies/${this.$route.params.id}`,
//       headers: {
//         Authorization: `JWT ${this.$store.state.userToken}`
//       }
//     })
//       .then((res)=>{
//         this.movie = res.data
//       })
//   }
}
</script>

<style>

</style>
