<template>
  <div class="row row-col-3 my-3">        
    <div class="col-3">
      <p>닉네임 : {{ userInfomation[0].username }}</p> 
    </div> 
    <div class="col-3">
      <p>총 리뷰수 : {{ userInfomation[0].review_count }}</p>      
    </div>   
    <div class="col-3">
      <p>평균 평점 : {{ userInfomation[0].review_average }}</p>      
    </div> 
    <div class="col-3">
      <p v-if="userInfomation[0].username === this.$store.getters.decodedToken.username">팔로우: {{ userInfomation[0].followers_count}} | 팔로잉: {{ userInfomation[0].followings_count}}</p>      
      <p v-else> 
        <font-awesome-icon :icon="['fas','star']" class="cursor-on" v-if="isFollow" @click="clickUserFollowBtn(userInfomation[0].username)"/> 
        <font-awesome-icon :icon="['far','star']" class="cursor-on" v-else @click="clickUserFollowBtn(userInfomation[0].username)"/> <span>{{ userInfomation[0].followers_count}}</span>
      </p>
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
      follow_users_count: 0,
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
  p {
    margin-bottom: 2px;
  }

  .cursor-on {
    cursor: pointer;
  }
</style>