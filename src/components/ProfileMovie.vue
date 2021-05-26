<template>
  <div class="row offset-1">
    <div style="text-align: left; font-size: 20px; font-weight: bold;" class="mt-4">'{{ this.$route.params.username }}'님이 높은 평점을 준 영화</div>
    <div class="col-2" v-for="highStarMovie in highStarMovies" :key="highStarMovie.movie.id">
      <div class="profile-movie-card-container">        
        <img v-if="highStarMovie.movie.poster_path" :src="'https://image.tmdb.org/t/p/original'+highStarMovie.movie.poster_path" alt="" class="mt-3 mb-1 profile-movie-card">
          <router-link :to="{ name: 'MovieDetail', params: { id: highStarMovie.movie.id }}" class="link">
          <p style="text-align: left; font-size: 14px;" class="m-0">{{ highStarMovie.movie.title }}</p>
          </router-link>
        <p style="text-align: left; font-size: 12px;">부여한별점 : ★{{ highStarMovie.rating }}</p>
      </div>      
    </div>
    <div style="text-align: left; font-size: 20px; font-weight: bold;" class="mt-4">'{{ this.$route.params.username }}'님이 최근 리뷰를 작성한 영화</div>
    <div class="col-2" v-for="latelyReview in latelyReviews" :key="latelyReview.id">
      <div class="profile-movie-card-container">        
        <img v-if="latelyReview.movie.poster_path" :src="'https://image.tmdb.org/t/p/original'+latelyReview.movie.poster_path" alt="" class="mt-3 mb-1 profile-movie-card">
        <p style="text-align: left; font-size: 14px;" class="m-0">{{ latelyReview.movie.title }}</p>
        <p style="text-align: left; font-size: 12px;" class="cursor-on" @click="clickMovieReviewViewBtn(latelyReview)">리뷰보기</p>
      </div>      
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ProfileMovie',
  props: {
    highStarMovies: Array,
    latelyReviews: Array,
  },  
  methods: {
    clickMovieReviewViewBtn: function (latelyReview) {
      console.log(latelyReview)
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/movies/${latelyReview.movie.id}/is-review/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{  
          console.log(res.data)
          this.$router.push({name: 'ReviewDetail', params: {movie_id: latelyReviewMovie.id, review_id: res.data.reviewInfos.id, review_username: res.data.reviewInfos.user}})
          this.$router.go(this.$router.currentRoute)          
        })  
    }    
  }
}
</script>

<style>
  .profile-movie-card-container {
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border-radius: .25rem;
  }

  .profile-movie-card {
    height: 23vh;
  }

  .cursor-on {
    cursor: pointer;
  }
</style>