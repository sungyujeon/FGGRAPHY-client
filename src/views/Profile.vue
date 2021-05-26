<template>
  <div class="container">
    <ProfileAdmin/>
    <ProfileInfo/>
    <ProfileGenre/>
    <ProfileMovie :highStarMovies="highStarMovies"/>
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
      latelyReviewMovies: [],
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
      url: `${SERVER_URL}/api/v1/movies/reviews/${this.$route.params.username}/latest/?review_num=10`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{        
        res.data.forEach(element => {
          console.log(element.movie)
        });
      })
  }

}
</script>

<style>

</style>