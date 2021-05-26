<template>
  <div class="container">
    <!-- GenrePosterModal -->
    <div class="modal fade" id="GenrePosterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <input v-model="searchInput" @keyup.enter="onSearch" class="form-control me-2 form-custom-control nav-link" type="search" placeholder="Search" aria-label="Search">                  
          </div>            
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-success" @click="clickpickMovieBtn()">선택</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div 
        v-for="genre in genreGroup"
        :key="genre.genre.id" 
        class="col-6 col-md-3 d-flex justify-content-center"     
      >
        <div class="card my-5" style="height: 55vh;">
          <div class="me-1 cursor-on oneBtn opacity" data-bs-toggle="modal" data-bs-target="#GenrePosterModal">
            <font-awesome-icon :icon="['fas','cog']"/>
          </div>
          <img :src="'https://image.tmdb.org/t/p/original'+genre.movie.poster_path" class="card-img-top" :alt="genre.movie.poster_path" style="height: 41vh;">
          <div class="card-body">
            <h5 class="card-title">장르 : {{ genre.genre.name }}</h5>
            <p class="card-text">ranker : {{ genre.user }}</p>
            <div class="cursor-on">
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
  data: function () {
    return {
      searchInput: ''
    }
  },
  props: {    
    genreGroup: Array   
  },   
  methods: {
    
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
