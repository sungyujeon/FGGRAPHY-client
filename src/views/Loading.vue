<template>
  <div class="loading-container container-fluid d-flex flex-column">
    <div class="align-self-center typed-container">
      <vue-typed-js :strings="[
        'FGGRAPHY',
        '랭킹으로 즐기는 영화 커뮤니티',
        '평범한 회사원인 내가 알고보니 영화도사?!',
        '영화에 대한 나의 열정을 마음껏 뽑내볼 수 있다니!',
        '추천받은 로맨스 영화로 여자친구를 만들었어요. -OO님',
        '랭커로 활동하시는 분들의 추천영화들 덕분에 좋은 영화들을 많이 알게되었어요. -OO님',
        '헤어진 여자친구가 적극 추천했던 영화 평점이 2점인거보니 역시 잘 헤어진거 같아요. -OO님',
        '나만의 영화 아이덴티티를 자유롭게 보여줄 수 있는 FGGRAPHY로 어서오세요!',
      ]">
        <h1 class="typing"></h1>
      </vue-typed-js>
      
    </div>
    <div class="loading-btn-container m-5">
      <button data-anijs="if: mouseover, do: bounceIn animated" class="entrance-btn">ENTER</button>
    </div>
  </div>
</template>

<script>
// import Typed from 'typed.js'
import { exec } from '@/scripts/loading.js'
export default {
  name: 'Loading',
  mounted: function () {
    exec()
  },
}
</script>

<style scoped>

  .typed-container {
    color: #fff;
    margin-top: 15rem;
  }

  .loading-container {
    text-align: center;
    width: 100wh;
    height: 100vh;
    background-color: #0e141f;
  }

  .loading-btn-container {
    position: absolute;
    left: 40%;
    top: 50%;
  }

  .entrance-btn {
    width: 200px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 0px 0px 43px 31px rgba(255,255,255,0.41); 
    box-shadow: 0px 10px 13px -7px #000000, 0px 0px 43px 31px rgba(255,255,255,0.41);
    border: 10px solid transparent;
    border-radius: 12px 12px 12px 12px;
    background-color: transparent;
    color: #fff;
    letter-spacing: 3px;
    transition: 0.3s;
    opacity: 0.6;
  }
  .entrance-btn:hover {
    opacity: 1;

  }

  .loading-btn {
  }
</style>