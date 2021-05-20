<template>  
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
  <div class="container-fluid">
    <router-link :to="{ name: 'Home' }" class="nav-link">Home</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav w-100 d-flex justify-content-between">  
        <div class="d-flex">
          <li class="nav-item">
            <router-link :to="{ name: 'Ranking' }" class="nav-link">Ranking</router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Recommendation' }" class="nav-link">Recommendation</router-link>
          </li>   
        </div>
        <div class="d-flex">   
          <!-- getters에서 if-else로 분기처리 한 이유가 여기에 있다. -->
          <!-- 로그인을 했다면 디코드한 정보가 들어있고, 안했다면 null이므로 else로 간다. -->
          <div v-if="this.$store.getters.decodedToken" class="d-flex">
            <p>{{ this.$store.getters.decodedToken.username }}님 반갑습니다!</p>
            <li class="nav-item">
              <!-- .native를 넣는 이유: 안넣으면 기본적으로 a태그가 실행되므로 그걸 막기위해서 -->
              <router-link @click.native="deleteJWT" to="#">Logout</router-link>
            </li>            
          </div>
          <!-- 로그인을 하지 않은 상태에서 보여줄 화면 -->
          <div v-else class="d-flex">
            <li class="nav-item">
              <router-link :to="{ name: 'Signup' }" class="nav-link">Signup</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'Login' }" class="nav-link">Login</router-link>
            </li> 
          </div>
        </div>       
      </ul>
    </div>
  </div>
</nav>
</template>

<script>

export default {
  name: "TheNavbar",  
  data: function () {
    return {
      
    }
  },
  methods: {
    deleteJWT: function () {
      this.$store.dispatch('deleteJWT')
      this.$router.push({name: 'Home'})
    }
  },
}
</script>


<style scoped>
  @media (min-width: 768px) {
    /* 햄버거일때 각 요소 처리해주는 코드 작성하기 */
  }
</style>

