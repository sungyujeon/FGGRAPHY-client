<template>
  <div class="container mt-5">
    <p class="recommend-p">FGGRAPHY 평점 상위 영화 TOP 8</p>
    <div class="tmp">

    </div>
    <div id="drag-container">
      <div id="spin-container">
        <!-- Add your images (or video) here -->
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[0].poster_path" alt="" @click="clickImg(movies[0].id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[1].poster_path" alt="" @click="clickImg(movies[1].id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[2].poster_path" alt="" @click="clickImg(movies[2].id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[3].poster_path" alt="" @click="clickImg(movies[3].id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[4].poster_path" alt="" @click="clickImg(movies[4].id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[5].poster_path" alt="" @click="clickImg(movies[5].id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[6].poster_path" alt="" @click="clickImg(movies[6].id)">
        <img :src="'https://image.tmdb.org/t/p/original/' + movies[7].poster_path" alt="" @click="clickImg(movies[7].id)">

        <!-- Text at center of ground -->
        <p>3D Tiktok Carousel</p>
      </div>
      <div id="ground"></div>
    </div>

  </div>
</template>

<script>
import { exec } from '@/scripts/recommend.js'

export default {
  name: 'Recommendation',
  data: function () {
    return {
      movies: this.$store.state.top_rated_movies
    }
  },
  mounted: function () {
    exec()
  },
  methods: {
    clickImg: function (id) {
      this.$router.push( { name: 'MovieDetail', params: {id: id} })
    }
  },
}
</script>

<style scoped>
  .tmp {
    margin-top: 11rem;
  }
  img {
    cursor: pointer;
  }
  .recommend-p {
    text-align: left;
    font-weight: bold;
    font-size: 30px;
    margin-left: 1.5rem;
  }

  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    /* for touch screen */
    touch-action: none; 
  }

  body {
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    background: #111;
    -webkit-perspective: 1000px;
            perspective: 1000px;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
  }

  #drag-container, #spin-container {
    left: 7rem;
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin: auto;
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    -webkit-transform: rotateX(-10deg);
            transform: rotateX(-10deg);
  }

  #drag-container img, #drag-container video {
    -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    line-height: 200px;
    font-size: 50px;
    text-align: center;
    -webkit-box-shadow: 0 0 8px #fff;
            box-shadow: 0 0 8px #fff;
    -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
  }

  #drag-container img:hover, #drag-container video:hover {
    -webkit-box-shadow: 0 0 15px #fffd;
            box-shadow: 0 0 15px #fffd;
    -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
  }

  #drag-container p {
    font-family: Serif;
    position: absolute;
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%) rotateX(90deg);
            transform: translate(-50%,-50%) rotateX(90deg);
    color: #fff;
  }

  #ground {
    width: 900px;
    height: 900px;
    position: absolute;
    top: 100%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%) rotateX(90deg);
            transform: translate(-50%,-50%) rotateX(90deg);
    background: -webkit-radial-gradient(center center, farthest-side , #9993, transparent);
  }

  #music-container {
    position: absolute;
    top: 0;
    left: 0;
  }

  @-webkit-keyframes spin {
    from{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    } to{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    }
  }

  @keyframes spin {
    from{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    } to{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    }
  }
  @-webkit-keyframes spinRevert {
    from{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    } to{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    }
  }
  @keyframes spinRevert {
    from{
      -webkit-transform: rotateY(360deg);
              transform: rotateY(360deg);
    } to{
      -webkit-transform: rotateY(0deg);
              transform: rotateY(0deg);
    }
  }
</style>