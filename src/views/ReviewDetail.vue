<template>
  <div class="container my-3" style="width: 50vw;" v-if="review !== null">
    <div class="card" style="text-align: left;" >
      <div class="card-header d-flex justify-content-between">                
        <div class="mb-0">[{{ review.movie.title }}] : {{ review.user }}님의 리뷰</div>
        <div v-if="review.user === this.$store.getters.decodedToken.username">        
          <font-awesome-icon :icon="['fas','pencil-alt']" class="me-1 cursor-on" @click="clickEditBtn(review)"/><span class="cursor-on" @click="clickEditBtn(review)">수정</span> |
          <font-awesome-icon :icon="['fas','trash-alt']" class="me-1 cursor-on" data-bs-toggle="modal" data-bs-target="#deleteModal"/><span class="cursor-on" data-bs-toggle="modal" data-bs-target="#deleteModal">삭제</span>
        </div> 
      </div>
      <div class="card-body d-flex flex-column justify-content-between" style="height: 40vh;">
        <div>     
          <div v-if="isUpdate">
            <p class="card-text">{{ review.content }}</p> 
          </div>
          <div v-else>
            <textarea name="reviewInput" id="" cols="45" rows="12" style="width: 100%" v-model="reviewInput"></textarea>
            <button style="float: right;" @click="clickEditCompleteBtn(review)">수정</button>
          </div>
        </div>   
        <div class="d-flex justify-content-between" >
          <div>
            <font-awesome-icon :icon="['fas','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review, $event)" v-if="isLiked"/>  
            <font-awesome-icon :icon="['far','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review, $event)" v-else/><span>{{ like_users_count }}</span>       
            <font-awesome-icon :icon="['fas','comment-dots']" class="ms-2 me-1" v-if="isCommented"/>
            <font-awesome-icon :icon="['far','comment-dots']" class="ms-2 me-1" v-else/><span>{{ comment_count }}</span>  
          </div>
          <div>
            <font-awesome-icon :icon="['fas','pen-square']" class="me-1 cursor-on" v-if="!isNoComment" @click="isClickCommentCreateBtn"/><span v-if="!isNoComment" class="cursor-on" style="float: right;" @click="isClickCommentCreateBtn">댓글작성</span>   
          </div>        
        </div>   
      </div>
      <div class="card-footer" v-if="isNoComment">
        <p>아직 작성된 댓글이 없어요! <span class="cursor-on" style="color: skyblue;" @click="clickCreateCommentBtn">첫 댓글</span>을 작성해보세요!</p>
        <div v-if="isFirstCommentClick">
          {{this.$store.getters.decodedToken.username}} : <textarea name="" id="" cols="60" rows="5" style="width: 100%" v-model="commentInput"></textarea>
          <div style="float: right;">
            <span class="cursor-on" @click="clickCreateCommentCompleteBtn(review)">작성</span> |        
            <span class="cursor-on" @click="clickCreateCommentCancleBtn()">취소</span>
          </div>
        </div>
      </div>      
      <div class="card-footer text-muted" v-else>
        <div v-if="isClickCommentCreate">
          {{this.$store.getters.decodedToken.username}} : <textarea name="" id="" cols="60" rows="5" style="width: 100%" v-model="commentInput"></textarea>
          <div style="float: right;">
            <span class="cursor-on" @click="clickCreateCommentCompleteBtn(review)">작성</span> |        
            <span class="cursor-on" @click="clickCreateCommentCancleBtn()">취소</span>
          </div>
          <br>
          <br>
          <hr>                   
        </div>
          <comment-detail v-for="comment in this.comments" :key="comment.id" :comment="comment">
          </comment-detail>
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
import CommentDetail from '../components/CommentDetail.vue'
import { exec } from '@/scripts/like.js'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  components: { CommentDetail },
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
      isUpdate: true, 
      isNoComment: true,
      isFirstCommentClick: false,
      isClickCommentCreate: false, 
      commentInput: '',          
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

        if (this.comment_count !== 0) {
          this.isNoComment = false
        }

        res.data.forEach(element => {
          if (element.user === this.$store.getters.decodedToken.user_id) {
            this.isCommented = true
          }
        });
        
      })
  },  
  methods: {
    clickLikeBtn: function (review, event) {
      exec(event)
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/movies/${review.movie.id}/reviews/${review.id}/like/`,
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
          this.$router.push({name: 'MovieDetail', params: {id: review.movie.id}})
          this.$router.go(this.$router.currentRoute) 
        })
    },
    clickEditBtn: function (review) {
      if (this.isUpdate) {
        this.reviewInput = review.content,
        this.isUpdate = false
      } else {
        this.isUpdate = true
      }
      
    },
    clickEditCompleteBtn: function (review) {
      axios({
        method: 'put',
        url: `${SERVER_URL}/api/v1/movies/reviews/${review.id}/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
        data: {content: this.reviewInput}
      })
        .then((res)=>{     
          console.log(res) 
          this.reviewInput = res.data.content
          this.$router.go(this.$router.currentRoute)
        })      
    },
    clickCreateCommentBtn: function () {
      if (this.isFirstCommentClick) {
        this.isFirstCommentClick = false
      } else {
        this.isFirstCommentClick = true
      }      
    },
    clickCreateCommentCompleteBtn: function (review) {
      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/movies/reviews/${review.id}/comments/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
        data: {content: this.commentInput}
      })
        .then((res)=>{  
          this.isNoComment = false
          this.comments.push(res.data.content)     
          this.$router.go(this.$router.currentRoute)     
        })      
    },
    clickCreateCommentCancleBtn: function () {
      if (this.isClickCommentCreate) {
        this.isClickCommentCreate = false
      } 
      this.commentInput = ''
    },
    isClickCommentCreateBtn: function () {
      if (!this.isClickCommentCreate) {
        this.isClickCommentCreate = true
      } else {
         this.isClickCommentCreate = false
      }      
    },    
  },
}
</script>

<style>

</style>