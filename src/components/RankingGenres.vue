<template>
  <div class="container">
    <div class="row">
      <div 
        v-for="genre in genreGroup"
        :key="genre.genre.id" 
        class="col-6 col-md-3 d-flex justify-content-center"     
      > 
        {{ genre.poster_path }}
        <div class="card my-5" style="height: 55vh;">
          <font-awesome-icon :icon="['fas','cog']" class="me-1 cursor-on oneBtn"/>  
          <img src="posterPath" class="card-img-top" alt="..." style="height: 41vh;">
          <div class="card-body">
            <h5 class="card-title">{{ genre.name }}</h5>
            <p class="card-text">{{ genre.user }}</p>
            <a href="#" class="btn btn-primary">Go {{ genre.genre.name }}</a>
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
  created: function () {
    console.log(this.props.genreGroup)
  }
  // data: function () {
    
  // },
  // computed: {
  //   posterPath: function () {
  //     console.log(this.genre)
  //     return `https://image.tmdb.org/t/p/original${this.genre.poster_path}`
  //   }     
  // },
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
</style>
