<template>
  <div class="container my-3" style="width: 50vw;" v-if="review !== null">
    <div class="card" style="text-align: left;" >
      <div class="card-header d-flex justify-content-between">        
        <div class="mb-0">[{{ review.movie }}] : {{ review.user }}님의 review</div>
        <div>
          <font-awesome-icon :icon="['fas','pencil-alt']" class="me-1 cursor-on" @click="clickEditBtn(review)"/><span class="cursor-on">수정</span> |
          <font-awesome-icon :icon="['fas','trash-alt']" class="me-1 cursor-on" data-bs-toggle="modal" data-bs-target="#deleteModal"/><span class="cursor-on" data-bs-toggle="modal" data-bs-target="#deleteModal">삭제</span>
        </div> 
      </div>
      <div class="card-body d-flex flex-column justify-content-between" style="height: 40vh;">
        <div>     
          <div>
            <p class="card-text">{{ review.content }}</p> 
          </div>
          <textarea name="reviewInput" id="" cols="45" rows="15" style="width: 45vw;" v-model="reviewInput"></textarea>
          <button>수정</button>
        </div>   
        <div style="text-align: left;"> 
          <font-awesome-icon :icon="['fas','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review)" v-if="isLiked"/>  
          <font-awesome-icon :icon="['far','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review)" v-else/><span>{{ like_users_count }}</span>       
          <font-awesome-icon :icon="['fas','comment-dots']" class="ms-2 me-1" v-if="isCommented"/>
          <font-awesome-icon :icon="['far','comment-dots']" class="ms-2 me-1" v-else/><span>{{ comment_count }}</span>   
        </div>   
      </div>
      <div class="card-footer text-muted" v-for="comment in this.comments" :key="comment.id"> 
        <p>{{ comment.user }} : {{ comment.content }}</p>                
      </div>      

      <!-- deleteModal -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">정말 해당 리뷰를 삭제할까요?</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>            
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
              <button type="button" class="btn btn-danger" @click="clickDeleteBtn(review)">삭제</button>
            </div>
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
  name: 'ReviewDetail',
  data: function () {
    return {
      review: null,
      reviewInput: '',
      isLiked: false,
      like_users_count: 0,
      isCommented: false,
      comment_count: 0,
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
        if (res.data.like_users.includes(this.$store.getters.decodedToken.user_id)) {
          this.isLiked = true
        }
        this.like_users_count = res.data.like_users_count
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
        this.comment_count = res.data.length

        res.data.forEach(element => {
          if (element.user === this.$store.getters.decodedToken.user_id) {
            this.isCommented = true
          }
        });
        
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
          if (res.data.like_status) {
            this.isLiked = true
            this.like_users_count++
          }
          else { 
            this.isLiked = false
            this.like_users_count--
          }
        })
    },
    clickDeleteBtn: function (review) {
      axios({
        method: 'delete',
        url: `${SERVER_URL}/api/v1/movies/reviews/${review.id}/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then(()=>{     
          this.$router.push({name: 'MovieDetail', params: {id: review.movie}})
          this.$router.go(this.$router.currentRoute) 
        })
    },
    clickEditBtn: function (review) {
      this.reviewInput = review.content
      // axios({
      //   method: 'put',
      //   url: `${SERVER_URL}/api/v1/movies/reviews/${review.id}/`,
      //   headers: {
      //     Authorization: `JWT ${this.$store.state.userToken}`
      //   },
      //   data: {content: this.reviewInput}
      // })
      //   .then(()=>{     
      //     this.$router.push({name: 'MovieDetail', params: {id: review.movie}})
      //     this.$router.go(this.$router.currentRoute) 
      //   })
    }

  },
}
</script>

<style>

</style>