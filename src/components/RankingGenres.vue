<template>
  <div class="container">
    <div class="row">
      <div 
        v-for="(genre, idx) in genreGroup"
        :key="idx" 
        class="col-6 col-md-3 d-flex justify-content-center"     
      >        
        <div class="card my-2" style="height: 50vh;">
          <img src="./static/eks1.jpg" class="card-img-top" alt="..." style="height: 30vh;">
          <div class="card-body">
            <h5 class="card-title">{{ genre.name }}</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
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
       
    }  
  },
  props: {
    genreGroup: Array   
  },  
}  
</script>

<style>

</style>
