<template>
  <div>
    <div v-for="movie in movies" :key="movie.id">
      <MovieCard :movie="movie"/>
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'SearchMovie',
  components: {
    MovieCard,
  },
  data: function () {
    return {
      
    }
  },
  computed: {
    movies: function () {
      return this.$store.state.searchMovies
    },
  }
}
</script>

<style>

</style>