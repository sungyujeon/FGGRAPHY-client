<template>
  <div class="pt-4">
    <vue-glide v-if="oneMovieList.length != 0">
      <vue-glide-slide v-for="movie in oneMovieList" :key="movie.id">         
        <MovieCard :movie="movie"/>
      </vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>      

    <vue-glide v-if="twoMovieList.length != 0">
      <vue-glide-slide v-for="movie in twoMovieList" :key="movie.id">  
        <MovieCard :movie="movie"/>
      </vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>

    <vue-glide v-if="threeMovieList.length != 0">
      <vue-glide-slide v-for="movie in threeMovieList" :key="movie.id">  
        <MovieCard :movie="movie"/>
      </vue-glide-slide>
      <template slot="control">
        <button data-glide-dir="<">prev</button>
        <button data-glide-dir=">">next</button>
      </template>
    </vue-glide>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'HomeLeft',  
  props: {    
    oneMovieList: {
      type: Array,      
    },
    twoMovieList: {
      type: Array,
    },
    threeMovieList: {
      type: Array, 
    }
  },
  components: {
    MovieCard,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },      
}
  

</script>

<style>

</style>