<template>
  <div class="col">
    <div class="card w-1">
      <img :src="posterPath" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">나와랏</h5>
        <!-- <p class="card-text">{{ movie.overview }}</p> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RankingGenres',
  data: function () {
    return {
      posterPath: `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
    }
  },
  props: {
    movie: Object,
  },
}
</script>

<style>

</style>
