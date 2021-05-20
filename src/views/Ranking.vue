<template>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-6 g-1">     
      <ranking-genres
        v-for="movie in $store.state.movies"
        :key="movie.id"
        :movie="movie"
      />        
    </div>
  </div>
</template>

<script>
import RankingGenres from '@/components/RankingGenres.vue'

export default {
  name: 'Ranking',
  components: {
    RankingGenres,
  },
  created: function () {
    this.$store.dispatch('getMovies')
  }
}
</script>

<style>

</style>