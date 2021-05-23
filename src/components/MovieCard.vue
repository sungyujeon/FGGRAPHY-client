<template>  
  <div id="MovieCard">        
    <img :src="posterPath" class="card-img-top" alt="...">    
    <router-link :to="{ name: 'MovieDetail', params: {id: this.movie.id} }">
      <p>{{ movie.title }}</p>   
    </router-link>
    <p>{{ movie.vote_average }}</p> 
  </div>  
</template>


<script>

export default {
  name: 'MovieCard',
  data: function () {
    return {
      posterPath: `https://image.tmdb.org/t/p/original${this.movie.poster_path}`
    }
  },
  components: {    
    
  },
  props: {
    movie: Object,
  },  
}
</script>

<style>

</style>
