<template>
  <div class="pt-4">
    <vue-glide>
      <vue-glide-slide v-for="movie in this.$store.state.movies" :key="movie.id">         
        <MovieCard :movie="movie"/>        
      </vue-glide-slide>
    </vue-glide>    

    <vue-glide>
      <vue-glide-slide v-for="movie in this.$store.state.movies" :key="movie.id">  
        <MovieCard :movie="movie"/>
      </vue-glide-slide>
    </vue-glide> 

    <vue-glide>
      <vue-glide-slide v-for="movie in this.$store.state.movies" :key="movie.id">  
        <MovieCard :movie="movie"/>
      </vue-glide-slide>
    </vue-glide>
  </div>

</template>

<script>
import MovieCard from '@/components/MovieCard.vue'
import { Glide, GlideSlide } from 'vue-glide-js'

export default {
  name: 'HomeLeft',  
  computed: {
  },
  components: {
    MovieCard,
    [Glide.name]: Glide,
    [GlideSlide.name]: GlideSlide
  },    
  created: function () {
    this.$store.dispatch('getMovies')
  }
}
</script>

<style>

</style>