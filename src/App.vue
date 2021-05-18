<template>
  <div id="app">
    <div id="nav">
      <!-- 로그인을 한 상태에서 보여줄 화면 -->
      <!-- 아까 전 getters에서 if-else로 분기처리 한 이유가 여기에 있다. -->
      <!-- 로그인을 했다면 디코드한 정보가 들어있고, 안했다면 null이므로 else로 간다. -->
      <div v-if="this.$store.getters.decodedToken">
        <p>{{ this.$store.getters.decodedToken.username }}님 반갑습니다!</p>
        <router-link to="/">Home</router-link> |  
        <!-- .native를 넣는 이유: 안넣으면 기본적으로 a태그가 실행되므로 그걸 막기위해서 -->
        <router-link @click.native="deleteJWT" to="#">Logout</router-link>
      </div>
      <!-- 로그인을 하지 않은 상태에서 보여줄 화면 -->
      <div v-else>
        <router-link :to="{ name: 'Signup' }">Signup</router-link> |
        <router-link :to="{ name: 'Login' }">Login</router-link>
      </div>
      
      
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    deleteJWT: function () {
      this.$store.dispatch('deleteJWT')
      this.$router.push({name: 'Login'})
    }
  },
  created: function () {
    if (!this.$store.getters.decodedToken) {
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
