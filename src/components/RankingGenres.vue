<template>
  <div class="container">    
    <div class="row">
      <div 
        v-for="genre in genreGroup"
        :key="genre.genre.id" 
        class="col-6 col-md-3 d-flex justify-content-center"     
      >
        <div class="card my-5" style="height: 55vh;">
          <div class="me-1 cursor-on oneBtn opacity" data-bs-toggle="modal" data-bs-target="#GenrePosterModal">
            <font-awesome-icon :icon="['fas','cog']" @click="clickPosterEditBtn(genre.genre.name)"/>
          </div>
          <img :src="'https://image.tmdb.org/t/p/original'+genre.movie.poster_path" class="card-img-top" :alt="genre.movie.poster_path" style="height: 41vh;">
          <div class="card-body">
            <h5 class="card-title" style="font-size: 26px;">장르 : {{ genre.genre.name }}</h5>
            <p class="card-text mb-3" style="font-size: 20px;">Ranker : {{ genre.user }}</p>
            <div class="cursor-on" style="font-size: 26px; color: brown;">
              <router-link class="genre-title" :to="{ name: 'GenreDetailHome', params: {genre_id: genre.genre.id, genre_name: genre.genre.name} }">
                <span>{{ genre.genre.name }}Page</span> <font-awesome-icon :icon="['far','folder-open']" class="me-1"/>
              </router-link>
            </div>
          </div>
        </div>  
      </div>                
    </div>
  </div>  
  
</template>


<script>
export default {
  name: 'RankingGenres',   
  props: {    
    genreGroup: Array   
  },   
  methods: {
    clickPosterEditBtn: function (genre) {
      this.$emit('clickPosterEditBtn', genre)
    }
  }
}  
</script>

<style>
  .cursor-on {
    cursor: pointer;
  }

  .oneBtn {
    position: absolute;
    margin-left: 92%;
    margin-top: 2%; 
  }

  .opacity {
    opacity: 0.6;    
  }

  .genre-title {
    text-decoration: none;
    color: black;
  }

  
</style>
