<template>
  <div class="mt-5">
    <h1>Review</h1>
    <div class="row row-cols-3 my-1">    
      <movie-detail-review-item v-for="review in reviews" :key="review.id" :review="review" class="col">        
        
      </movie-detail-review-item>
    </div>
  </div>
</template>

<script>
import MovieDetailReviewItem from './MovieDetailReviewItem.vue'

export default {
  name: 'MovieDetailReview', 
  components: { 
    MovieDetailReviewItem 
  },
  props: {
    reviews: Array
  },  
}
</script>

<style>
  .cursor-on {
    cursor: pointer;
  }
  
  .link {
    text-decoration: none;
    color: black;
  }
</style>