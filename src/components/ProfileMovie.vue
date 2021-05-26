<template>
  <div class="row offset-1">
    <div style="text-align: left; font-size: 20px; font-weight: bold;" class="mt-4">'admin1234'님이 높은 평점을 준 영화</div>
    <div class="col-2" v-for="highStarMovie in highStarMovies" :key="highStarMovie.movie.id">
      <div class="profile-movie-card-container">
        <img v-if="highStarMovie.movie.poster_path" :src="'https://image.tmdb.org/t/p/original'+highStarMovie.movie.poster_path" alt="" class="mt-3 mb-1 profile-movie-card">
        <p style="text-align: left; font-size: 14px;" class="m-0">{{ highStarMovie.movie.title }}</p>
        <p style="text-align: left; font-size: 12px;">부여한별점 : ★{{ highStarMovie.rating }}</p>
      </div>      
    </div>
    <!-- <div style="text-align: left; font-size: 20px; font-weight: bold;" class="mt-4">'admin1234'님이 최근 리뷰를 단 영화</div>
    <div class="col-2" v-for="movie in movies" :key="movie.id">
      <div class="profile-movie-card-container">
        <img v-if="movie.poster_path" :src="'https://image.tmdb.org/t/p/original'+movie.poster_path" alt="" class="mt-3 mb-1 profile-movie-card">
        <p style="text-align: left; font-size: 14px;" class="m-0">{{ movie.title }}</p>
        <p style="text-align: left; font-size: 12px;">[이 유저가 준 별점이 몇점인지]</p>
      </div>      
    </div> -->
    <br>
    최근 리뷰를 남긴 영화 5개 보여주기
  </div>
</template>

<script>
export default {
  name: 'ProfileMovie',
  props: {
    highStarMovies: Array
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
</style>