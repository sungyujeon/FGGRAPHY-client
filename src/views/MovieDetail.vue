<template>
  <div class="container mt-5">
    <!-- <p>{{ this.$route.params.id }}출력되는지 확인하기</p> -->
    <MovieDetailInfo :movie="movie"/>
    <MovieDetailReview :reviews="reviews"/> 
    <div v-if="infinityListEndFlag" class="my-4">
      <h3>더 이상 해당영화에 작성된 리뷰가 없습니다.</h3>  
    </div>   
        
  </div>
</template>

<script>
import MovieDetailInfo from '@/components/MovieDetailInfo.vue'
import MovieDetailReview from '@/components/MovieDetailReview.vue'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieDetail',
  components: {
    MovieDetailInfo,
    MovieDetailReview
  },  
  data: function () {
    return {
      movie: null,
      reviews: [],   
      pageNum: 1, 
      bottomCheckFlag: false, 
      infinityListEndFlag: false,
    }
  },
  methods: {
    getReviewsInfinity: function () {      
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/movies/infinite-scroll/reviews/${this.$route.params.id}?page_num=${this.pageNum}`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{
          if (res.data.length === 9) {
            console.log(res)
            this.bottomCheckFlag = false
            this.reviews.push(...res.data)
            this.pageNum += 1
          } else {
            this.reviews.push(...res.data)
            this.infinityListEndFlag = true            
          }
        })
    },
    checkBottom: function () {      
      const {scrollTop, clientHeight, scrollHeight} = document.documentElement            
      if (((scrollHeight - (scrollTop + clientHeight)) < 5) && !this.bottomCheckFlag && !this.infinityListEndFlag) {
        this.getReviewsInfinity()
        this.bottomCheckFlag = true
      }
    }
  },
  created: function () {    
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/${this.$route.params.id}`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        this.movie = res.data
      })
      
    this.getReviewsInfinity()    
  },  
  mounted: function () {
    window.addEventListener('scroll', this.checkBottom)
  }
  
}
</script>

<style>
  
</style>
