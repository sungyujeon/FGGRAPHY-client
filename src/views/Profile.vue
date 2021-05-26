<template>
  <div class="container">
    <ProfileAdmin/>
    <ProfileInfo v-if="userInfomation.length" :userInfomation="userInfomation"/>
    <ProfileGenre v-if="userInfomation.length" :userInfomation="userInfomation"/>
    <ProfileMovie v-if="highStarMovies.length && latelyReviews.length" :highStarMovies="highStarMovies" :latelyReviews="latelyReviews" :latelyReviewer="latelyReviewer"/>
    <ProfileCollection/>    
  </div>
</template>

<script>
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileGenre from '@/components/ProfileGenre.vue'
import ProfileCollection from '@/components/ProfileCollection.vue'
import ProfileMovie from '@/components/ProfileMovie.vue'
import ProfileAdmin from '@/components/ProfileAdmin.vue'
import { mapGetters } from 'vuex'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Profile',
  data: function () {
    return {
      highStarMovies: [],
      latelyReviews: [],
      userInfomation: [],
      latelyReviewer: this.$route.params.username
    }
  },
  components: {
    ProfileInfo,
    ProfileGenre,  
    ProfileMovie,
    ProfileCollection,
    ProfileAdmin,
  },
  computed: {
    ...mapGetters([
      'getGenreGroups'
    ])
  },
  created: function () {
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/users/${this.$route.params.username}/top-rated/?movie_count=5` ,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{  
        this.highStarMovies.push(...res.data)
      })

    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/reviews/${this.$route.params.username}/latest/?review_num=5`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{  
        console.log(res.data)
        this.latelyReviews.push(...res.data)  
      })

    axios({
      method: 'get',
      url: `${SERVER_URL}/accounts/profile/${this.$route.params.username}/`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{        
        this.userInfomation.push(res.data)
      })
  }

}
</script>

<style>

</style>