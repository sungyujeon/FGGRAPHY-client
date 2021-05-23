<template>
  <div>
    <h1>Signup</h1>
    <div>
      <label for="username">사용자 이름: </label>
      <input type="text" id="username" v-model="credential.username">
    </div>
    <div>
      <label for="password">비밀번호: </label>
      <input type="password" id="password" v-model="credential.password">
    </div>
    <div>
      <label for="passwordConfirmation">비밀번호 확인: </label>
      <input @keyup.enter="signup" type="password" id="passwordConfirmation" v-model="credential.passwordConfirmation">
    </div>
    <button @click="signup">회원가입</button>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Signup',
  data: function () {
    return {
      credential: {
        username: '',
        password: '',
        passwordConfirmation: '',
      },
    }
  },
  methods: {
    signup: function () {
      axios({
        method: 'post',
        url: `${SERVER_URL}/accounts/signup/`,
        data: this.credential
      })
        .then(()=>{
          // console.log(res)
          // 회원가입 후 자동으로 로그인 및 Home화면으로 보내기
          this.$store.dispatch('getJWT', {username: this.credential.username, password: this.credential.password})
          this.$router.push({name: 'Home'})
        })
        .catch((err)=>{
          console.log(err)
        })
    }
  }
}
</script>
