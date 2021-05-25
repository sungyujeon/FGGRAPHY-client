<template>
  <div>
    <div class="question">
      <div class="question-screen" data-anijs="if: answerSuccess, on: $Security, do: rubberBand animated, after: removeAnim">
        <div class="app-title">
          <h2 id="loadajax" class="mb-5">SIGN UP</h2>
        </div>

        <div class="question-form">
          <div class="control-group mb-4">
            <p>ID</p>
            <label class="question-field-icon fui-user" for="username"></label>
            <input type="text" class="question-field" id="username" value="" placeholder="ID를 입력해주세요." v-model="credential.username">
          </div>

          <div class="control-group">
            <p>PASSWORD</p>
            <div class="mb-3">
              <input type="password" id="password" class="question-field" placeholder="비밀번호를 입력해주세요" v-model="credential.password">
              <label class="question-field-icon fui-lock" for="password"></label>
            </div>
            <div>
              <input @keyup.enter="signup" type="password" id="passwordConfirmation" class="password" placeholder="비밀번호를 다시 입력해주세요" v-model="credential.passwordConfirmation">
              <label class="question-field-icon fui-lock" for="passwordConfirmation"></label>
            </div>
          </div>

          <button @click="signup" id="questionButton" class="btn btn-primary btn-large btn-block">SIGN UP</button>
        </div>
      </div>
    </div>
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

<style scoped>
  .bad {
    -webkit-animation-name: color_change;
    animation-name: color_change;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  @-webkit-keyframes color_change {
    from { border-color: white; color: #FF6530;}
    to { border-color: #FF6530; color: #FF6530;}
  }

  @-moz-keyframes color_change {
    from { border-color: white; color: #FF6530;}
    to { border-color: #FF6530; color: #FF6530;}
  }
  @-o-keyframes color_change {
    from { border-color: white; color: #FF6530;}
    to { border-color: #FF6530; color: #FF6530;}
  }
  @keyframes color_change {
    from { border-color: white; color: #FF6530;}
    to { border-color: #FF6530; color: #FF6530;}
  }


  * {
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  }

  *:focus {
    outline: none;
  }
  body {
    font-family: Arial;
    background-color: #3498DB;
    padding: 50px;
  }
  .question {
    margin: 20px auto;
    width: 300px;
  }
  .question-screen {
    background-color: #FFF;
    padding: 20px;
    border-radius: 5px
  }

  .app-title {
    text-align: center;
    color: #777;
  }

  .question-form {
    text-align: center;
  }
  .control-group {
    margin-bottom: 10px;
  }

  input {
    text-align: center;
    background-color: #ECF0F1;
    border: 2px solid transparent;
    border-radius: 3px;
    font-size: 16px;
    font-weight: 200;
    padding: 10px 0;
    width: 250px;
    -webkit-transition: border .5s;
    transition: border .5s;
  }

  input:focus {
    border: 2px solid #3498DB;
    box-shadow: none;
  }

  .btn {
    border: 2px solid transparent;
    background: #3498DB;
    color: #ffffff;
    font-size: 16px;
    line-height: 25px;
    padding: 10px 0;
    text-decoration: none;
    text-shadow: none;
    border-radius: 3px;
    box-shadow: none;
    -webkit-transition: 0.25s;
    transition: 0.25s;
    display: block;
    width: 250px;
    margin: 0 auto;
  }

  .btn:hover {
    background-color: #2980B9;
  }

  .question-link {
    font-size: 12px;
    color: #444;
    display: block;
    margin-top: 12px;
  }
</style>