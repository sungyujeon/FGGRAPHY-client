<template>
  <div class="pt-4">
    <!-- <div class="ranker" v-if="rankers.length != 0">'{{ rankers[0].username }}'님의 추천영화 리스트</div>
    <vue-glide v-if="oneMovieList.length != 0">      
      <vue-glide-slide v-for="movie in oneMovieList" :key="movie.id">         
        <MovieCard :movie="movie"/>
      </vue-glide-slide>      
    </vue-glide>      

    <div class="ranker" v-if="rankers.length != 0">'{{ rankers[1].username }}'님의 추천영화 리스트</div>
    <vue-glide v-if="twoMovieList.length != 0">
      <vue-glide-slide v-for="movie in twoMovieList" :key="movie.id">  
        <MovieCard :movie="movie"/>
      </vue-glide-slide>      
    </vue-glide>

    <div class="ranker" v-if="rankers.length != 0">'{{ rankers[2].username }}'님의 추천영화 리스트</div>
    <vue-glide v-if="threeMovieList.length != 0">
      <vue-glide-slide v-for="movie in threeMovieList" :key="movie.id">  
        <MovieCard :movie="movie"/>
      </vue-glide-slide>      
    </vue-glide> -->
  </div>
</template>

<script>
// import MovieCard from '@/components/MovieCard.vue'
// import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'GenreDetailHomeLeft',  
  data: function () {
    return {

    }
  },
  components: {
    // MovieCard,
    // [Glide.name]: Glide,
    // [GlideSlide.name]: GlideSlide
  },      
}
</script>

<style>
  .ranker {
    text-align: left;
    margin-left: 35px;
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 23px;
  }
</style>