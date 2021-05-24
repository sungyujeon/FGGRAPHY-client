<template>
  <div class="container">
    <div class="row">
      <div 
        v-for="(genre, idx) in genreGroup"
        :key="idx" 
        class="col-6 col-md-3 d-flex justify-content-center"     
      >        
        <div class="card my-5" style="height: 55vh;">
          <font-awesome-icon :icon="['fas','cog']" class="me-1 cursor-on oneBtn"/>  
          <img src="./static/eks1.jpg" class="card-img-top" alt="..." style="height: 41vh;">
          <div class="card-body">
            <h5 class="card-title">{{ genre.name }}</h5>
            <p class="card-text">[해당 장르의 1등 아이디 출력]</p>
            <a href="#" class="btn btn-primary">[Go [장르]]</a>
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
