<template>
  <div class="container my-3" style="width: 40vw;">
    <div class="card text-center" >
      <div class="card-header">
        {{ review }}
        {{ comment }}

        {{ review.user }}
      </div>
      <div class="card-body">        
        <p class="card-text">{{ review.content }}</p> 
        <div style="text-align: left;"> 
          <font-awesome-icon :icon="['fas','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(this.review)" v-if="isLiked"/>  
          <font-awesome-icon :icon="['far','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(this.review)" v-else/>       
          <font-awesome-icon :icon="['far','comment-dots']" class="ms-2 me-1"/><span>댓글달기</span>   
        </div>   
      </div>
      <div class="card-footer text-muted">        
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ReviewDetail',
  data: function () {
    return {
      review: null,
      comment: null,    
      isLiked: false,
      like_users_count: 0,  
    }
  },
  created: function (){
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/reviews/${this.$route.params.review_id}/`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        this.review = res.data
      })

    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/reviews/${this.$route.params.review_id}/comments/`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        this.comment = res.data
      })
  },
  // computed: {
  //   isLike: function () {
  //     const isLike = false
  //     if (this.review.like_users.includes(this.$store.getters.decodedToken.username))
  //     return 0
  //   }
  // },
  methods: {
    clickLikeBtn: function (review) {
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/movies/${review.movie}/reviews/${review.id}/like/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{
          console.log(`${review.id}에 좋아요 눌렀어요`)          
          console.log(res.data.like_status)   
          
          if (res.data.like_status) {
            this.isLiked = true
            this.like_users_count++
          }
          else { 
            this.isLiked = false
            this.like_users_count--
          }
        })
    }
  },
}
</script>

<style>

</style>