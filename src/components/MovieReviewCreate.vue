<template>
  <div> 
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#reviewCreateModal" v-if="!isReviewInUser && !isLoading">      
      <span>리뷰작성하기</span>           
    </button>
    <router-link :to="{ name: 'ReviewDetail', params: {movie_id: movie.id, review_id: reviewId, review_username: this.$store.getters.decodedToken.username }}" class="link">
      <button type="button" class="btn btn-primary" v-if="isReviewInUser && !isLoading">
        <span>리뷰수정하기</span>           
      </button>
    </router-link>
    <router-link :to="{ name: 'MovieTrailer', params: {id: this.movie.id} }" class="btn btn-danger ms-5">예고편 보기</router-link>    

    <!-- Modal -->
    <div class="modal fade" id="reviewCreateModal" tabindex="-1" aria-labelledby="reviewCreateModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title m-0" id="reviewCreateModalLabel" style="text-align: left;">'{{ this.movie.title }}' 리뷰 작성</h5>   
            <h5 class="m-0" style="text-align: right;">작성자 : {{this.$store.getters.decodedToken.username}}</h5>         
            <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
          </div>
          <div class="modal-body">
            <textarea name="reviewInput" id="reviewInput" cols="60" rows="15" v-model="reviewInput"></textarea>            
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
            <button @click="createReview" class="btn btn-primary">작성</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieReviewCreate',
  props: {
    movie: Object,
    reviews: Array,
  },
  data: function () {
    return {
      reviewInput: null,
      isReviewInUser: false,
      isLoading: true,
      reviewId: null,
    }
  },
  methods: {
    createReview: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/movies/${this.$route.params.id}/reviews/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`,          
        },
        data: {
          content: this.reviewInput
        }
      })
        .then(()=>{
          // 모달로 작성한 페이지이기 때문에 현재 페이지로 push를 하게되면 navigation duplicated에러가 발생한다.
          // 즉, 내가 현재 있는 페이지에서 같은 현재 페이지로 push는 불가능
          // 그렇기 때문에 아래와 같이 작성해주어야 원하는대로 동작한다(새로고침과 같은기능)
          this.getReviews()
          this.$router.go(this.$router.currentRoute)          
        })
        .catch((error)=>{
          console.log(error)
        })
    },
    getReviews: function () {
      axios({
        method: 'get',
        url: `${SERVER_URL}/api/v1/movies/${this.$props.movie.id}/reviews/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{       
          res.data.forEach(element => {          
            if (element.user === this.$store.getters.decodedToken.username) {
              this.isReviewInUser = true
            }
          })
          this.isLoading = false
        })    
    }
  },
  created: function () {
    this.getReviews()
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/${this.$props.movie.id}/is-review/`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{       
        console.log(res.data)
        this.isReviewInUser = res.data.isWritten
        if (res.data.isWritten) {
          this.reviewId = res.data.reviewInfos.id
        }        
      })    
  }
}
</script>

<style>
  .trailer-modal {
    margin: 0;
    max-height: 968px;
    max-width: 968px;
  }
</style>
