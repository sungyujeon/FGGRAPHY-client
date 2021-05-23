<template>
  <div class="container my-3" style="width: 40vw;">
    <div class="card text-center" >
      <div class="card-header">
        {{ comments }}
        <p>[{{ review.movie}}] : {{ review.user }}님의 review</p>        
      </div>
      <div class="card-body d-flex flex-column justify-content-between" style="height: 40vh;">
        <div>     
          <p class="card-text">{{ review.content }}</p> 
        </div>   
        <div style="text-align: left;"> 
          <font-awesome-icon :icon="['fas','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(this.review)" />  
          <font-awesome-icon :icon="['far','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(this.review)" />       
          <font-awesome-icon :icon="['far','comment-dots']" class="ms-2 me-1"/><span>[댓글갯수]</span>   
        </div>   
      </div>
      <div class="card-footer text-muted" v-for="comment in this.comments" :key="comment.id"> 
        <p>{{ comment.user }} : {{ comment.content }}</p>       
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
      comments: null,            
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
        this.comments = res.data
      })
  },  
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
            // this.isLiked = true
            // this.like_users_count++
          }
          else { 
            // this.isLiked = false
            // this.like_users_count--
          }
        })
    }
  },
}
</script>

<style>

</style>