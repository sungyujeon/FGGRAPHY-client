<template>
  <div>    
    <div class="content">
      <h1 class="mt-7">전체 랭킹</h1>      
      <div class="ranking">
        <ul>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[0].username} }">
            <li class="one d-flex" id="one">
              <img src="./static/one_tier.svg">
              <p class="starring">{{ rankers[0].username }}</p>                        
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[1].username} }">
            <li class="two d-flex" id="two">
              <img src="./static/two_tier.svg">
              <p class="starring">{{ rankers[1].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[2].username} }">
            <li class="three d-flex" id="three">
              <img src="./static/three_tier.svg">
              <p class="starring">{{ rankers[2].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[3].username} }">
            <li class="four d-flex" id="four">
              <img src="./static/four_tier.svg">
              <p class="starring">{{ rankers[3].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[4].username} }">
            <li class="five d-flex" id="five">
              <img src="./static/five_tier.svg">
              <p class="starring">{{ rankers[4].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[5].username} }">
            <li class="six d-flex" id="six">
              <img src="./static/six_tier.svg">
              <p class="starring">{{ rankers[5].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[6].username} }">
            <li class="seven d-flex" id="seven">
              <img src="./static/seven_tier.svg">
              <p class="starring">{{ rankers[6].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[7].username} }">
            <li class="eight d-flex" id="eight">
              <img src="./static/eight_tier.svg">
              <p class="starring">{{ rankers[7].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[8].username} }">
            <li class="nine d-flex" id="nine">
              <img src="./static/nine_tier.svg">
              <p class="starring">{{ rankers[8].username }}</p>            
            </li>
          </router-link>
          <router-link class="nav-username" :to="{ name: 'Profile', params: {username: rankers[9].username} }">
            <li class="ten d-flex" id="ten">
              <img src="./static/ten_tier.svg">
              <p class="starring">{{ rankers[9].username }}</p>            
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'HomeRight',
  props: {
    rankers: Array
  }
}
</script>

<style scoped>
  .content {	  
    font-weight: 300;  
    width: 13vw;  
    height: 100vh;
    margin-left: 40px;
    display: inline-block;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    margin: 1em 0 0.5em;
    color: rgb(39, 38, 38);    
    text-shadow: 0px -1px 1px #b4b7c2;
  }

  .ranking {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
  }

  .ranking ul {
    margin: 0;
    padding: 0;
    position: relative;
  }
  .ranking ul li {
    background: rgb(255, 255, 255);
    margin: 1em 0 0;
    padding: 2%;
    list-style: none;
    float: left;
    width: 100%;
    box-shadow: 0px 2px 6px -3px #030306cf;
    border-radius: 15px;
    position: absolute;
    transition: top 0.5s ease 0s;
  }
  .ranking ul li.one { top: 0; }
  .ranking ul li.two { top: 5.5em; }
  .ranking ul li.three { top: 11em; }
  .ranking ul li.four  { top: 16.5em; }
  .ranking ul li.five  { top: 22em; }
  .ranking ul li.six  { top: 27.5em; }
  .ranking ul li.seven  { top: 33em; }
  .ranking ul li.eight  { top: 38.5em; }
  .ranking ul li.nine  { top: 44em; }
  .ranking ul li.ten  { top: 49.5em; }
  .ranking ul li img {
    display: block;
    width: 20%;
    margin-right: 1rem;
    box-sizing: border-box;
    border-radius: 5px;
    transition: all 0.4s ease 0s;
  }

  .starring {
    vertical-align: middle;
  }

  .ranking ul li:hover img {
    width: 30%;
    transition: all 0.4s ease 0s;
    margin-left: -3%;
    margin-top: -2%;
    margin-bottom: -2%;
    
  }
  .ranking ul li:hover .starring {
    color: #787e7e;
    color: #080c14;
  }
  .ranking ul li p {
    /* width: 78%; */
    
    color: #535662;
    font-size: 0.9em;
  }
  .ranking ul li .starring {
    font-size: 1.5em;
    color: #5a5f74;
    /* font-family: 'Londrina Solid', Arial, Helvetica, sans-serif; */
    font-weight: 400;
    align-self: center;
  } 
</style>