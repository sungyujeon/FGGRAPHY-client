<template>
  <div class="youtube-container">
    <div class="back-to-movie-detail">
      <button @click="back" class="btn btn-primary">&#60;</button>
    </div>
    <div id="container"></div>
    <div id="blocker"></div>
  </div>
</template>

<script>
import { exec } from '@/scripts/youtube.js'
import axios from 'axios'

const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY
const API_URL = 'https://www.googleapis.com/youtube/v3/search'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Trailer',
  data: function () {
    return {
      title: null,
      videos: null,
    }
  },
  methods: {
    back: function () {
      this.$router.go(-1)
    }
  },
  created: function () {
    const get_youtubes = function (title, videos) {
      let tmp_videos = videos
      const params = {
        key: API_KEY,
        part: 'snippet',
        type: 'video',
        q: title,
      }

      axios({
        method: 'get',
        url: API_URL,
        params,
      })
        .then((res) => {
          tmp_videos = res.data.items
          exec(tmp_videos)
        })
        .catch((err) => {
          console.log(err)
        })
    }

    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/movies/${this.$route.params.id}/`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`,          
      },
    })
      .then((res) => {
        this.title = res.data.title + ' trailer'
        get_youtubes(this.title, this.videos)
      })
      .catch((err) => {
        console.log(err)
      })
    
    
  },
}
</script>

<style>
  .youtube-container {
    width: 100vh;
    height: 100vh;
  }

  .back-to-movie-detail {
    margin: 3px 0 0 3px;
    display: flex;
  }
</style>