<template>
  <div class="mt-5">
    <h1>Review</h1>
    <div class="row row-col-4 mt-3">    
      <div v-for="movie in $store.state.movies" :key="movie.id" class="col-4 border">
        {{ movie.overview }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetailReview',
  created: function () {
    this.$store.dispatch('getMovies')
  }
}
</script>

<style>

</style>