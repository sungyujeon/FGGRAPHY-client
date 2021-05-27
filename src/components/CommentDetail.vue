<template>
  <div>
    <p class="m-1" v-if="!isClickCommentUpdate">{{ comment.user }} : {{ comment.content }}</p>
    <p class="m-1" v-if="isClickCommentUpdate">{{ comment.user}} :</p>
    <div style="font-size: 8px;" v-if="comment.user === $store.getters.decodedToken.username"> 
      <div v-if="!isClickCommentUpdate">
        <span class="ms-1 cursor-on" @click="clickCommentUpdateBtn(comment)">수정</span> | <span class="cursor-on" @click="clickCommentDeleteBtn(comment)">삭제</span>
      </div>
    </div>
    <div v-if="isClickCommentUpdate">
      <textarea name="" id="" cols="30" rows="5" style="width: 100%;" v-if="isClickCommentUpdate" v-model="commentUpdateInput"></textarea> 
      <div style="float: right;">
        <span class="cursor-on" @click="clickUpdateCommentCompleteBtn(comment)">수정</span> |        
        <span class="cursor-on" @click="clickCreateCommentCancleBtn()">취소</span>
      </div> 
    </div> 
    <hr>      
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'CommentDetail',
  data: function () {
    return {
      isClickCommentUpdate: false,
      commentUpdateInput: '',
    }
  },
  props: {
    comment: Object
  },
  methods: {
    clickCommentUpdateBtn: function (comment) {
      this.isClickCommentUpdate = true
      this.commentUpdateInput = comment.content
    },
    clickUpdateCommentCompleteBtn: function (comment) {
      axios({
        method: 'put',
        url: `${SERVER_URL}/api/v1/movies/comments/${comment.id}/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
        data: {content: this.commentUpdateInput}
      })
        .then((res)=>{     
          console.log(res) 
          this.commentUpdateInput = res.data.content
          this.$router.go(this.$router.currentRoute)
        })      
    },
    clickCreateCommentCancleBtn: function () {
      this.isClickCommentUpdate = false
      this.commentUpdateInput = ''
    },
    clickCommentDeleteBtn: function (comment) {
      axios({
        method: 'delete',
        url: `${SERVER_URL}/api/v1/movies/comments/${comment.id}/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },        
      })
        .then((res)=>{     
          console.log(res)           
          this.$router.go(this.$router.currentRoute)
        })      
    }
  }
}
</script>

<style>

</style>