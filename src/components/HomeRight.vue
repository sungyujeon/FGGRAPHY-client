<template>
  <div>
    <!-- <div v-for="(ranker, idx) in rankers" :key="idx" class="mt-5">
      {{idx+1}}: {{ ranker.username }}
    </div> -->
    <div class="content">
      <h1>Joker Leaderboard</h1>
      <div class="selector">
        <span id="byPremiere" class="active">Premiere</span> 
        <span id="byPerformance">Performance</span> 
        <span id="byBudget">Budget</span> 
        <span id="byBoxOffice">Box-Office</span> 
      </div>
      <div class="ranking">
        <ul>
          <li class="one" id="jack">
            <img src="https://josetxu.com/demos/img/joker-jack.jpg">
            <span class="starring">Jack Nicholson</span>
            <span class="film">Batman</span>
            <span class="premiere">1989</span>
            <span class="performance">9.5</span>
            <span class="budget">$35 M</span>
            <span class="box-office">$411 M</span>
          </li>
          <li class="two" id="heath">
            <img src="https://josetxu.com/demos/img/joker-heath.jpg">
            <span class="starring">Heath Ledger</span>
            <span class="film">The Dark Knight</span>
            <span class="premiere">2008</span>
            <span class="performance">9.8</span>
            <span class="budget">$185 M</span>
            <span class="box-office">$1004 M</span>
          </li>
          <li class="three" id="jared">
            <img src="https://josetxu.com/demos/img/joker-jared.jpg">
            <span class="starring">Jared Leto</span>
            <span class="film">Suicide Squad</span>
            <span class="premiere">2016</span>
            <span class="performance">4.7</span>
            <span class="budget">$175 M</span>
            <span class="box-office">$747 M</span>
          </li>
          <li class="four" id="joaquin">
            <img src="https://josetxu.com/demos/img/joker-joaquin.jpg">
            <span class="starring">Joaquin Phoenix</span>
            <span class="film">Joker</span>
            <span class="premiere">2019</span>
            <span class="performance">9.2</span>
            <span class="budget">$55 M</span>
            <span class="box-office">$1074 M</span>
          </li>
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

</style>