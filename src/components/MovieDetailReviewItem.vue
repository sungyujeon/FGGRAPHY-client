<template>
  <div class="border my-2 d-flex flex-column justify-content-between" style="max-height: 40vh; min-height: 40vh;">    
    <router-link :to="{ name: 'ReviewDetail', params: {movie_id: review.movie, review_id: review.id, like_users: review.like_users, like_users_count: review.like_users_count }}" class="link">
      <div class="px-3">         
        <p>작성자 : {{ review.user }}</p>
        <p>리뷰내용 : {{ review.content }}</p>
      </div>
    </router-link>
    <div class="ms-2 mb-2" style="text-align: left">  
      <font-awesome-icon :icon="['fas','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review, $event)" v-if="isLiked"/>  
      <font-awesome-icon :icon="['far','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review, $event)" v-else/><span>{{ like_users_count }}</span>        
      <font-awesome-icon :icon="['fas','comment-dots']" class="ms-2 me-1" v-if="isComment"/>
      <font-awesome-icon :icon="['far','comment-dots']" class="ms-2 me-1" v-else/>{{ comment_count }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { exec } from '@/scripts/like.js'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'MovieDetailReviewItem',
  data: function () {
    return {
      isLiked: false,
      like_users_count: 0,
      isComment: false,
      comment_count: 0,
    }
  },
  props: {
    review: Object
  },
  mounted: function () {
    const user = this.$store.getters.decodedToken.user_id    
    if (this.$props.review.like_users.includes(user)) {
      this.isLiked = true      
    }
    
    if (this.$props.review.like_users_count !== 0) {
      this.like_users_count = this.$props.review.like_users_count
    }

    axios({      
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/reviews/${this.$props.review.id}/comments/`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        this.comment_count = res.data.length   
        
        res.data.forEach(element => {
          if (element.user === user) {
            this.isComment = true
          }
        });
        
      })    
  },
  methods: {
    clickLikeBtn: function (review, event) {
      exec(event)
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/movies/${review.movie}/reviews/${review.id}/like/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{
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