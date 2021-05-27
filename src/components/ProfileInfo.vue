<template>
  <div class="row my-3 mx-0">   
    <div class="col-2 offset-2">
      <div class="circle">
      <p class="innerCircle">닉네임</p> 
      <p class="innerCircleText">{{ userInfomation[0].username }}</p>
      </div>
    </div> 
    <div class="col-2">      
      <div class="circle">
        <p class="innerCircle">총 리뷰수</p> 
        <p class="innerCircleText">{{ userInfomation[0].review_count }}개</p>
      </div>
    </div>   
    <div class="col-2">      
      <div class="circle">
        <p class="innerCircle">전체 티어</p> 
        <p class="innerCircleText">{{ userInfomation[0].tier }}티어</p>
      </div>
    </div> 
    <div class="col-2">
      <div class="circle">
        <div class="innerCircleFollow" v-if="userInfomation[0].username === this.$store.getters.decodedToken.username">
          <p>팔로우: {{ userInfomation[0].followers_count}}명</p> 
          <p>팔로잉: {{ userInfomation[0].followings_count}}명</p>
        </div>      
      <p v-else class="follow-container"> 
        <font-awesome-icon :icon="['fas','star']" class="cursor-on innerCircle follow-star" v-if="isFollow" @click="clickUserFollowBtn(userInfomation[0].username)"/> 
        <font-awesome-icon :icon="['far','star']" class="cursor-on innerCircle follow-star" v-else @click="clickUserFollowBtn(userInfomation[0].username)"/>
        <span class="innerCircleText follow-count-text">{{ follow_users_count }}</span>
      </p>
      </div>
    </div> 
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'ProfileInfo',
  data: function () {
    return {
      isFollow: false,
      follow_users_count: this.$props.userInfomation[0].followers_count,
    }    
  },
  props: {
    userInfomation: Array,
  },
  mounted: function () {
    console.log(this.$props.userInfomation[0].follow_status)
    if (this.$props.userInfomation[0].follow_status) {
      this.isFollow = true
    }
  },
  methods: {
    clickUserFollowBtn: function (username) {
      console.log('클릭완료')
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/profile/${username}/follow/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        }
      })
        .then((res)=>{
          if (res.data.follow_status) {
            this.isFollow = true
            this.follow_users_count++
          }
          else { 
            this.isFollow = false
            this.follow_users_count--
          }          
        })
    }
  }
}
</script>

<style>
  .follow-star {
    color: #FB637E;
  }

  .follow-container{
    padding-top: 25px;
  }
  .follow-count-text {
    font-size: 2.4rem;
    margin-left: 1rem;
  }

  p {
    margin-bottom: 2px;
  }

  .cursor-on {
    cursor: pointer;
  }

  .circle {
    width: 150px;
    height: 140px;
    border-radius: 22%;
    background: rgb(251, 251, 251); 
    border:3px solid rgb(151, 188, 219);
    /* position: relative; */
    text-align: center;
    padding-top: 18px;
    margin: 0px auto;
  }

  .circle .innerCircle {
    margin-top: 0.3rem;
    font-size: 2rem;
    font-weight: bold;
  }

  .circle .innerCircleText {
    font-size: 1.5rem;
    font-weight: bold;
  }

  .circle .innerCircleFollow {
    font-size: 30px;
    font-weight: bold;
  }
</style>