<template>
  <div class="container home mt-4">
      <div class="row">
        <div class="col-10 border">
          <HomeLeft :oneMovieList="oneMovieList" :twoMovieList="twoMovieList" :threeMovieList="threeMovieList"/>
        </div>
        <div class="col-2 border">
          <HomeRight :rankers="rankers"/>
        </div>
      </div>
    </div>
</template>

<script>
import HomeLeft from '@/components/HomeLeft.vue'
import HomeRight from '@/components/HomeRight.vue'
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Home',
  data: function () {
    return {
      rankers: [],
      oneMovieList: [],
      twoMovieList: [],
      threeMovieList: []    
    }
  },
  components: {
    HomeLeft,
    HomeRight
  },
  created: function () {
    axios({
      method: 'get',
      url: `${SERVER_URL}/accounts/top-ranked/?user_num=10`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{              
        this.rankers = res.data

        axios({
          method: 'get',
          url: `${SERVER_URL}/api/v1/movies/users/${this.rankers[0].username}/top-rated/?movie_count=10`,
          headers: {
            Authorization: `JWT ${this.$store.state.userToken}`
          }
        })
          .then((res)=>{            
            const result = res.data.filter(element => {
              return element.poster_path !== null              
            });
            
            result.forEach(element => {
              this.oneMovieList.push(element)
            }) 
          })
        
        axios({
          method: 'get',
          url: `${SERVER_URL}/api/v1/movies/users/${this.rankers[1].username}/top-rated/?movie_count=10`,
          headers: {
            Authorization: `JWT ${this.$store.state.userToken}`
          }
        })
          .then((res)=>{            
            const result = res.data.filter(element => {
              return element.poster_path !== null              
            });
            
            result.forEach(element => {
              this.twoMovieList.push(element)
            }) 
          })

        axios({
          method: 'get',
          url: `${SERVER_URL}/api/v1/movies/users/${this.rankers[2].username}/top-rated/?movie_count=10`,
          headers: {
            Authorization: `JWT ${this.$store.state.userToken}`
          }
        })
          .then((res)=>{            
            const result = res.data.filter(element => {
              return element.poster_path !== null              
            });
            
            result.forEach(element => {
              this.threeMovieList.push(element)
            })            
          })
      })
  }
}
</script>
