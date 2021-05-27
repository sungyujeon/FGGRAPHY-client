<template>
  <div class="pt-4">
    <div class="ranker" v-if="rankers.length != 0">'{{ rankers[0] }}'님의 추천영화 리스트</div>
    <vue-glide v-if="movieLists[0].length != 0">      
      <vue-glide-slide v-for="movie in movieLists[0]" :key="movie.movie.id">         
        <GenreDetailMovieCard :movie="movie"/>
      </vue-glide-slide>      
    </vue-glide>      

    <div class="ranker" v-if="rankers.length != 0">'{{ rankers[1] }}'님의 추천영화 리스트</div>
    <vue-glide v-if="movieLists[1].length != 0">      
      <vue-glide-slide v-for="movie in movieLists[1]" :key="movie.movie.id">         
        <GenreDetailMovieCard :movie="movie"/>
      </vue-glide-slide>      
    </vue-glide>    

    <div class="ranker" v-if="rankers.length != 0">'{{ rankers[2] }}'님의 추천영화 리스트</div>
    <vue-glide v-if="movieLists[2].length != 0">      
      <vue-glide-slide v-for="movie in movieLists[2]" :key="movie.movie.id">         
        <GenreDetailMovieCard :movie="movie"/>
      </vue-glide-slide>      
    </vue-glide>    
  </div>
</template>

<script>
import GenreDetailMovieCard from '@/components/GenreDetailMovieCard.vue'
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'GenreDetailHomeLeft',  
  props: {
    movieLists: Array,
    rankers: Array
  },
  components: {
    GenreDetailMovieCard,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },      
}
</script>

<style>
  .ranker {
    text-align: left;
    margin-left: 18px;
    margin-bottom: 6px;
    font-weight: bold;
    font-size: 23px;
  }
</style>