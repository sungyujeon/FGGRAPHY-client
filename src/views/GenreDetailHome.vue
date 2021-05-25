<template>
  <div class="containermt-4">
    <div class="row">
      <div class="col-10">
        <GenreDetailHomeLeft/>
      </div>
      <div class="col-2">
        <div class="mt-5" style="font-size: 20px; font-weight: bold;">{{ this.$route.params.genre_name }}랭킹</div>
        <GenreDetailHomeRight/>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'GenreDetailHome',
  created: function () {
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/genres/top-ranked/?ranker_nums=10`,
      headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        console.log(res)
      })
  }
}
</script>

<style>

</style>