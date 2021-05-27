<template>  
  <div>        
    <router-link :to="{ name: 'MovieDetail', params: {id: this.movie.id} }" class=".search-router-container">
      <img :src="posterPath" class="search-img rounded-3" alt="...">                   
    </router-link>
    <div class="d-flex flex-column mt-2">
      <router-link :to="{ name: 'MovieDetail', params: {id: this.movie.id} }" class="card-movie-title">
        {{ movie.title }}
      </router-link>
      <p class="card-movie-description">개봉년도: {{ movie.release_date.substring(0,4) }} | 런타임: {{ movie.runtime }}분</p>
      <p class="card-movie-description">평균★{{ movie.rating_average }}</p> 
    </div>
  </div>
</template>


<script>

export default {
  name: 'SearchMovieCard',
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

<style scoped>

  .search-img {
    width: 100%;
    height: 55vh;
  }

  .card-movie-title {
    text-decoration: none;
    color: black;
    text-align: left;
  }

  .card-movie-description {
    text-align: left;
    margin-left: 0;
  }
</style>
