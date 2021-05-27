<template>  
  <div>        
    <router-link :to="{ name: 'MovieDetail', params: {id: this.movie.movie.id} }" class="card-movie-title">
      <img :src="posterPath" class="card-img-top" alt="..." style="width: 27vh; height: 35vh;">                   
      <p style="text-align: left;" class="card-movie-description mt-1">{{ movie.movie.title }}</p>   
    </router-link>
    <p style="text-align: left; font-size: 12px;" class="card-movie-description">개봉년도: {{ movie.movie.release_date.substring(0,4) }} | 런타임: {{ movie.movie.runtime }}분</p>
    <p style="text-align: left; font-size: 12px;" class="card-movie-description">평균★{{ movie.movie.rating_average }}</p> 
  </div>  
</template>


<script>

export default {
  name: 'MovieCard',
  data: function () {
    return {
      posterPath: `https://image.tmdb.org/t/p/original${this.movie.movie.poster_path}`
    }
  },  
  props: {
    movie: Object,
  },  
}
</script>

<style scoped>
  .card-movie-title {
    text-decoration: none;
    color: black;
  }

  .card-movie-description {
    margin-left: 23px;
    margin-bottom: 0px;
  }
</style>
