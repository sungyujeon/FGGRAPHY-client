<template>
  <!-- <div class="row row-col border">
    <div class="col-1 border periodic-element .two-tier" v-for="genre in userInfomation[0].genres" :key="genre.id">      
      <h5 class="mt-2">{{ genre.genre.name }}</h5>    
      <span class="mb-3 .periodic-element-inner">{{ genre.tier }}티어/({{ genre.ranking }}등)</span>
    </div>
  </div> -->
  <div class="body">    
    <h1>'{{this.$route.params.username}}'님의 장르별 티어표</h1>    
    <div class="periodic-table">      
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[0].tier === 0, 'one-tier': userInfomation[0].genres[0].tier === 1, 'two-tier': userInfomation[0].genres[0].tier === 2, 'three-tier': userInfomation[0].genres[0].tier === 3, 'four-tier': userInfomation[0].genres[0].tier === 4, 'five-tier': userInfomation[0].genres[0].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">모험</div>
          <div class="description">티어: {{userInfomation[0].genres[0].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[0].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[1].tier === 0, 'one-tier': userInfomation[0].genres[1].tier === 1, 'two-tier': userInfomation[0].genres[1].tier === 2, 'three-tier': userInfomation[0].genres[1].tier === 3, 'four-tier': userInfomation[0].genres[1].tier === 4, 'five-tier': userInfomation[0].genres[1].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">판타지</div>
          <div class="description">티어: {{userInfomation[0].genres[1].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[1].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[2].tier === 0, 'one-tier': userInfomation[0].genres[2].tier === 1, 'two-tier': userInfomation[0].genres[2].tier === 2, 'three-tier': userInfomation[0].genres[2].tier === 3, 'four-tier': userInfomation[0].genres[2].tier === 4, 'five-tier': userInfomation[0].genres[2].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">애니메이션</div>
          <div class="description">티어: {{userInfomation[0].genres[2].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[2].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[3].tier === 0, 'one-tier': userInfomation[0].genres[3].tier === 1, 'two-tier': userInfomation[0].genres[3].tier === 2, 'three-tier': userInfomation[0].genres[3].tier === 3, 'four-tier': userInfomation[0].genres[3].tier === 4, 'five-tier': userInfomation[0].genres[3].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">드라마</div>
          <div class="description">티어: {{userInfomation[0].genres[3].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[3].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[4].tier === 0, 'one-tier': userInfomation[0].genres[4].tier === 1, 'two-tier': userInfomation[0].genres[4].tier === 2, 'three-tier': userInfomation[0].genres[4].tier === 3, 'four-tier': userInfomation[0].genres[4].tier === 4, 'five-tier': userInfomation[0].genres[4].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">공포</div>
          <div class="description">티어: {{userInfomation[0].genres[4].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[4].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[5].tier === 0, 'one-tier': userInfomation[0].genres[5].tier === 1, 'two-tier': userInfomation[0].genres[5].tier === 2, 'three-tier': userInfomation[0].genres[5].tier === 3, 'four-tier': userInfomation[0].genres[5].tier === 4, 'five-tier': userInfomation[0].genres[5].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">액션</div>
          <div class="description">티어: {{userInfomation[0].genres[5].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[5].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[6].tier === 0, 'one-tier': userInfomation[0].genres[6].tier === 1, 'two-tier': userInfomation[0].genres[6].tier === 2, 'three-tier': userInfomation[0].genres[6].tier === 3, 'four-tier': userInfomation[0].genres[6].tier === 4, 'five-tier': userInfomation[0].genres[6].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">코미디</div>
          <div class="description">티어: {{userInfomation[0].genres[6].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[6].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[7].tier === 0, 'one-tier': userInfomation[0].genres[7].tier === 1, 'two-tier': userInfomation[0].genres[7].tier === 2, 'three-tier': userInfomation[0].genres[7].tier === 3, 'four-tier': userInfomation[0].genres[7].tier === 4, 'five-tier': userInfomation[0].genres[7].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">역사</div>
          <div class="description">티어: {{userInfomation[0].genres[7].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[7].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[8].tier === 0, 'one-tier': userInfomation[0].genres[8].tier === 1, 'two-tier': userInfomation[0].genres[8].tier === 2, 'three-tier': userInfomation[0].genres[8].tier === 3, 'four-tier': userInfomation[0].genres[8].tier === 4, 'five-tier': userInfomation[0].genres[8].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">서부</div>
          <div class="description">티어: {{userInfomation[0].genres[8].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[8].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[9].tier === 0, 'one-tier': userInfomation[0].genres[9].tier === 1, 'two-tier': userInfomation[0].genres[9].tier === 2, 'three-tier': userInfomation[0].genres[9].tier === 3, 'four-tier': userInfomation[0].genres[9].tier === 4, 'five-tier': userInfomation[0].genres[9].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">스릴러</div>
          <div class="description">티어: {{userInfomation[0].genres[9].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[9].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[10].tier === 0, 'one-tier': userInfomation[0].genres[10].tier === 1, 'two-tier': userInfomation[0].genres[10].tier === 2, 'three-tier': userInfomation[0].genres[10].tier === 3, 'four-tier': userInfomation[0].genres[10].tier === 4, 'five-tier': userInfomation[0].genres[10].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">범죄</div>
          <div class="description">티어: {{userInfomation[0].genres[10].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[10].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[11].tier === 0, 'one-tier': userInfomation[0].genres[11].tier === 1, 'two-tier': userInfomation[0].genres[11].tier === 2, 'three-tier': userInfomation[0].genres[11].tier === 3, 'four-tier': userInfomation[0].genres[11].tier === 4, 'five-tier': userInfomation[0].genres[11].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">다큐멘터리</div>
          <div class="description">티어: {{userInfomation[0].genres[11].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[11].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[12].tier === 0, 'one-tier': userInfomation[0].genres[12].tier === 1, 'two-tier': userInfomation[0].genres[12].tier === 2, 'three-tier': userInfomation[0].genres[12].tier === 3, 'four-tier': userInfomation[0].genres[12].tier === 4, 'five-tier': userInfomation[0].genres[12].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">SF</div>
          <div class="description">티어: {{userInfomation[0].genres[12].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[12].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[13].tier === 0, 'one-tier': userInfomation[0].genres[13].tier === 1, 'two-tier': userInfomation[0].genres[13].tier === 2, 'three-tier': userInfomation[0].genres[13].tier === 3, 'four-tier': userInfomation[0].genres[13].tier === 4, 'five-tier': userInfomation[0].genres[13].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">미스터리</div>
          <div class="description">티어: {{userInfomation[0].genres[13].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[13].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[14].tier === 0, 'one-tier': userInfomation[0].genres[14].tier === 1, 'two-tier': userInfomation[0].genres[14].tier === 2, 'three-tier': userInfomation[0].genres[14].tier === 3, 'four-tier': userInfomation[0].genres[14].tier === 4, 'five-tier': userInfomation[0].genres[14].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">음악</div>
          <div class="description">티어: {{userInfomation[0].genres[14].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[14].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[15].tier === 0, 'one-tier': userInfomation[0].genres[15].tier === 1, 'two-tier': userInfomation[0].genres[15].tier === 2, 'three-tier': userInfomation[0].genres[15].tier === 3, 'four-tier': userInfomation[0].genres[15].tier === 4, 'five-tier': userInfomation[0].genres[15].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">로맨스</div>
          <div class="description">티어: {{userInfomation[0].genres[15].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[15].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[16].tier === 0, 'one-tier': userInfomation[0].genres[16].tier === 1, 'two-tier': userInfomation[0].genres[16].tier === 2, 'three-tier': userInfomation[0].genres[16].tier === 3, 'four-tier': userInfomation[0].genres[16].tier === 4, 'five-tier': userInfomation[0].genres[16].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">가족</div>
          <div class="description">티어: {{userInfomation[0].genres[16].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[16].point}}</div>
        </div>
      </div>
      <div class="periodic-element" :class="{'zero-tier': userInfomation[0].genres[17].tier === 0, 'one-tier': userInfomation[0].genres[17].tier === 1, 'two-tier': userInfomation[0].genres[17].tier === 2, 'three-tier': userInfomation[0].genres[17].tier === 3, 'four-tier': userInfomation[0].genres[17].tier === 4, 'five-tier': userInfomation[0].genres[17].tier === 5 }">      
        <div class="periodic-element-inner">
          <div class="title">전쟁</div>
          <div class="description">티어: {{userInfomation[0].genres[17].tier}}</div>
          <div class="description">포인트: {{userInfomation[0].genres[17].point}}</div>
        </div>
      </div>
    </div>
    <div class="legend-table">
      <div class="legend-table__wrapper"><span class="legend-table__marker zero-tier"></span><span class="legend-table__text zero-tier-text">Zero-tier</span><span class="legend-table__marker one-tier"></span><span class="legend-table__text one-tier-text">One-tier</span><span class="legend-table__marker two-tier"></span><span class="legend-table__text two-tier-text">Two-tier</span><span class="legend-table__marker three-tier"></span><span class="legend-table__text three-tier-text">Three-Tier</span><span class="legend-table__marker four-tier"></span><span class="legend-table__text four-tier-text">Four-tier</span><span class="legend-table__marker five-tier"></span><span class="legend-table__text five-tier-text">Five-tier</span><br/>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: 'ProfileGenre',
  props: {
    userInfomation: Array
  }
}
</script>

<style scoped> 
  h1 {
    margin: 1em auto 0;
    margin-bottom: 15px;
    font: 700 3em;
    color: black;
    text-align: center;
    font-weight: bold;
  }

  h5 {
    margin: 0 auto 2em;
    font: 400 1.3em;
    color: black;
    text-align: center;
  }

  a {
    text-decoration: none;
  }  

  .periodic-table {
    display: grid;
    grid-template-columns: repeat(6, 150px);
    grid-template-rows: repeat(3, 130px);
    grid-gap: 10px;
    margin: auto;
    max-width: 1400px;
    justify-content: center;
  }

  .periodic-element {
    padding: 4px;
    position: relative;
    z-index: 1;
    cursor: default;
    transition: all 0.3s ease;
  }

  .periodic-element .periodic-element-inner {
    background: rgb(251, 251, 251);
    padding: 10px 15px;
    width: calc(100%);
    height: calc(100%);
    transition: inherit;
  }
  .periodic-element .title {
    font-size: 28px;
    margin-right: 0.05em;
    margin-top: 0.25em;
    margin-bottom: 0.05em;
    transition: 0.8s ease 600ms;
    font-weight: bold;
  }
  .periodic-element .description {
    font-size: 17px;
    margin-top: -0.2em;
    font-weight: bold;
  }  

  .zero-tier {
    /* animation: changeColorBack 12s infinite alternate; */
    background: #cd85fd;
  }
  .zero-tier .title,
  .zero-tier .description {
    /* animation: changeColor 12s infinite alternate; */
    background: -webkit-linear-gradient(#cd85fd, #561669);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .one-tier {
    background: #faa1a8;
  }
  .one-tier .title,
  .one-tier .description {
    background: -webkit-linear-gradient(#ff616d, #ffc171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .two-tier {
    background: #facc6a;
  }
  .two-tier .title,
  .two-tier .description {    
    background: -webkit-linear-gradient(#facc6a, #ffc171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .three-tier {
    background:  #80aafd;
  }
  .three-tier .title,
  .three-tier .description {
    background: -webkit-linear-gradient(#37cfdc, #5a88e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .four-tier {
    background:  #77cf4e;
  }
  .four-tier .title,
  .four-tier .description {
    background: -webkit-linear-gradient(#58ac30, #a7df62);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .five-tier {
    background:  #8c898d;
  }
  .five-tier .title,
  .five-tier .description {
    background: -webkit-linear-gradient(#c0c2bf, #636461);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .legend-table {
    padding: 15px;    
    margin: 1em auto 0;
  }
  .legend-table__marker {
    width: 25px;
    height: 25px;
    margin: 5px 5px 10px;
    display: inline-block;
    vertical-align: middle;
    box-shadow: 0.5px 1px rgba(0, 0, 0, 0.15);
  }
  .legend-table__text {
    display: inline-block;
    vertical-align: middle;
    margin: 0 25px 5px 5px;    
  }

  .zero-tier-text {
    background: -webkit-linear-gradient(#cd85fd, #561669);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;   
    font-weight: bold;
  }
  /* @keyframes changeColor {
    0% {      
      color: #fbc2eb;
    }
    25% {
      color: #a18cd1;
    }
    50% {
      color: #fbc2eb;
    }
    100% {      
      color: #a6c1ee;
    }
  } */

/* background-image: linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%); */
  /* @keyframes changeColorBack {
    0% {      
      background: #fbc2eb;
    }
    25% {
      background: #a18cd1;
    }
    50% {
      background: #fbc2eb;
    }
    100% {      
      background: #a6c1ee;
    }
  }  */
  
  .one-tier-text {
    background: -webkit-linear-gradient(#ff616d, #ffc171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .two-tier-text {
    background: -webkit-linear-gradient(#facc6a, #ffc171);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .three-tier-text {
    background: -webkit-linear-gradient(#37cfdc, #5a88e5);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
  }

  .four-tier-text {
    background: -webkit-linear-gradient(#58ac30, #a7df62);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    font-weight: bold;
  }

  .five-tier-text {
    background: -webkit-linear-gradient(#c0c2bf, #636461);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    font-weight: bold;
  }
  .legend-table__direction {
    display: inline-block;
    margin: 10px 15px 10px 10px;
    background: -webkit-linear-gradient(#ccc, #eee);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }  
</style>