<template>
  <div id="app">
    <div>
      <TheNavbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import TheNavbar from '@/components/TheNavbar.vue'

export default {
  name: 'App',
  components: {
    TheNavbar,
  }  
}
</script>

<style>
/* 폰트설정하기 */
@font-face {
  font-family: 'NanumBarunpen';
  src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumBarunpen.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  font-family: 'NanumBarunpen';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
