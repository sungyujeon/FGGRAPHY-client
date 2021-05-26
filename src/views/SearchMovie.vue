<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-4 p-4" v-for="movie in movies" :key="movie.id">
        <SearchMovieCard :movie="movie"/>
      </div>
    </div>
  </div>

</template>

<script>
import SearchMovieCard from '@/components/SearchMovieCard.vue'

export default {
  name: 'SearchMovie',
  components: {
    SearchMovieCard,
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