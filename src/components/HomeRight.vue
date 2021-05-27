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
.content {
	font-family: 'Londrina Solid', Arial, Helvetica, sans-serif;
    font-weight: 300;
    width: 100vw;
    height: 100vh;
    display: inline-block;
}
h1 {
    text-align: center;
    font-weight: normal;
    color: #9099b7;
    margin: 1em 0 0.5em;
    font-size: 3.5em;
    font-family: 'Londrina Solid', Arial, Helvetica, sans-serif;
    font-weight: 400;
    text-shadow: 0px -1px 1px #394264;
}
.selector {
    text-align: center;
    margin-bottom: 2em;
}
.selector span {
    background: #394264;
    padding: 0.5em 0.75em;
    display: inline-block;
    text-transform: uppercase;
    border-radius: 2px;
    color: #1f253d;
    text-shadow: 0 0 1px #1f253d;
    cursor: pointer;
    font-family: 'Londrina Solid', Arial, Helvetica, sans-serif; /*'Londrina Solid', cursive*/
	min-width: 65px;
}
.selector span:before {
    display: none;
}
.selector span:hover {
	background: #9099b7;
}
.selector span.active {
	background: #9099b7;
    color: #1f253d!important;
    filter: invert(0);
    text-shadow: 0 0 1px #9099b7;
    font-weight: 400;
}
.ranking {
    max-width: 400px;
    margin: 0 auto;
	position: relative;
}
.ranking ul {
    margin: 0;
    padding: 0;
	position: relative;
}
.ranking ul li {
    background: #394264;
    margin: 1em 0 0;
    padding: 2%;
    list-style: none;
    float: left;
    width: 96%;
    box-shadow: 0px 2px 6px -3px #030306cf;
    border-radius: 5px;
	position: absolute;
	transition: top 0.5s ease 0s;
}
.ranking ul li.one { top: 0; }
.ranking ul li.two { top: 7em; }
.ranking ul li.three { top: 14em; }
.ranking ul li.four  { top: 21em; }
.ranking ul li img {
    display: inline-block;
    width: 20%;
    margin-right: 2%;
    float: left;
    box-sizing: border-box;
    border-radius: 5px;
	transition: all 0.4s ease 0s;
}
.ranking ul li:hover img {
    width: 26%;
    transition: all 0.4s ease 0s;
    margin-left: -6%;
    margin-top: -3%;
    margin-bottom: -3%;
	box-shadow: 3px 3px 5px 0 #1f253d;
}
.ranking ul li:hover .starring {
	color: #9099b7;
	color: #bbbeca;
}
.ranking ul li span {
    display: inline-block;
    width: 78%;
	color: #1d2234;
	font-size: 0.9em;
}
.ranking ul li .starring {
    font-size: 1.5em;
	color: #1f253d;
    font-family: 'Londrina Solid', Arial, Helvetica, sans-serif;
    font-weight: 400;
}
.ranking ul li .film {
    color: #1f253d;
    margin-bottom: 6px;
    font-size: 1em;
    margin-top: 1px;
    text-indent: 1px;
}
.starring:before, .film:before {
    display: none;
}
.premiere:before {
	background: url(https://josetxu.com/demos/img/joker-premiere.png) no-repeat;
}
.performance:before {
	background: url(https://josetxu.com/demos/img/joker-performance.png) no-repeat;
}
.budget:before {
	background: url(https://josetxu.com/demos/img/joker-budget.png) no-repeat;
}
.box-office:before {
	background: url(https://josetxu.com/demos/img/joker-boxoffice.png) no-repeat;
}
span:before {
    height: 20px;
    float: left;
    margin-right: 3px;
    width: 20px;
    content: "";
	opacity: 0.475;
}
.premiere, .performance {
    width: 17% !important;
    line-height: 1.55em;
}
.budget, .box-office {
    width: 20% !important;
    line-height: 1.55em;
}
.premiere:hover, .performance:hover, .budget:hover, .box-office:hover {
	filter: invert(1);
	color: #000;
}
.premiere:hover:before, .performance:hover:before, .budget:hover:before, .box-office:hover:before {
	opacity: 0.8;
}
.active {
    filter: invert(1);
    color: #000 !important;
}
.active:before {
    opacity: 0.8;
}


@media (max-width:400px) {
	h1 {
		font-size: 3.15em;
		margin-top: 0.15em;
	}
	.selector span {
		min-width: 0;
	}
	.ranking {
		max-width: 99%;
	}
	.ranking ul li {
		margin-top: 2px;
	}
}
</style>