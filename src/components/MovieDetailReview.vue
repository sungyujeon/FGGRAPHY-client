<template>
  <div class="mt-5">
    <h1>Review</h1>
    <div class="row row-cols-3 my-1">    
      <div v-for="(review, idx) in reviews" :key="idx" class="col">        
        <div class="border my-2 d-flex flex-column justify-content-between" style="max-height: 40vh; min-height: 40vh;">
          <router-link :to="{ name: 'ReviewDetail', params: {movie_id: review.movie, review_id: review.id}}" class="link">
            <div class="px-3">  
              {{ review }}
              <p>작성자 : {{ review.user }}</p>
              <p>리뷰내용 : {{ review.content }}</p>
            </div>
          </router-link>
          <div class="ms-2 mb-2" style="text-align: left">  
            <font-awesome-icon :icon="['fas','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review)" v-if="isLiked[idx]"/>  
            <font-awesome-icon :icon="['far','thumbs-up']" class="me-1 cursor-on" @click="clickLikeBtn(review)" v-else/><span>{{ review.like_users_count }}</span>        
            <font-awesome-icon :icon="['far','comment-dots']" class="ms-2 me-1"/>[댓글갯수]
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
  name: 'MovieDetailReview', 
  props: {
    reviews: Array
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
          this.isLiked[review.id] = res.data.like_status

          const lenLikeUsers = review.like_users.length          
          console.log(lenLikeUsers)
          const likeCount = document.querySelector('span')
          likeCount.innerText = lenLikeUsers
          console.log(this.isLiked)
        })
    }
  },
  computed : {
    isLiked: function () {
      const arr = this.reviews.map((review) => {
        return review.like_users.includes(this.$store.getters.decodedToken.user_id)
      })
      // arr = [true, false, false, true] 리뷰를 앞에서부터 하나씩 봤을 때 내가 like_users에 포함되어있나 확인하는거
      return arr
    }    
  }  
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