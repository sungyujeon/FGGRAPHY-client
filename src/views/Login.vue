<template>
  <div>
    <p>ID</p>
    <input type="text" v-model="credential.username">
    <p>PW</p>
    <input type="password" v-model="credential.password">
    <p></p>
    <button @click="getJWT">login</button>    
  </div>
  
</template>

<script>
export default {
  name: 'Login',
  data: function () {
    return {
      credential: {
        username: '',
        password: '',
      }
    }
  },
  methods: {
    getJWT: function () {
      this.$store.dispatch('getJWT', this.credential)      
      // $router는 django에서 redirect와 같은 동작을 한다
      // 안에들어가는 name은 router의 routes안의 name으로 이동하는 것
      this.$router.push({name: 'Home'})          
    }
  },
  created: function () {
    if (this.$store.getters.decodedToken) {
      this.$router.push({name: 'Home'})
    }
  }

}
</script>

<style>

</style>
