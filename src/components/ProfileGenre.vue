<template>
  <div class="row row-col border">
    <div class="col-1 border" v-for="genre in $store.state.genreRankings" :key="genre.id">      
      <h5 class="mt-2">{{ genre.name }}</h5>    
      <span class="mb-3">{{ genre.total_review_count }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileGenre',
  created: function () {
    this.$store.dispatch('getGenreRanking')
  },
}
</script>

<style>

</style>