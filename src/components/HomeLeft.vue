<template>
  <div>영화가 쭈르륵 카드형식으로얍얍
    <div class="row row-cols-1 row-cols-md-5 g-4">      
      <movie-card
        v-for="movie in $store.state.movies"
        :key="movie.id"
        :movie="movie"
      />           
    </div>
  </div>

</template>

<script>
import MovieCard from '@/components/MovieCard.vue'

export default {
  name: 'HomeLeft',
  components: {
    MovieCard,
  },
  created: function () {
    this.$store.dispatch('getMovies')
  }
}
</script>

<style>

</style>