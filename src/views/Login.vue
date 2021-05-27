<template>
  <div>
    <div class="question">
      <div class="question-screen" data-anijs="if: answerSuccess, on: $Security, do: rubberBand animated, after: removeAnim">
        <div class="app-title">
          <h2 id="loadajax" class="mb-5">LOGIN</h2>
        </div>

        <div class="question-form">
          <div class="control-group mb-4">
            <p>ID</p>
            <input type="text" class="question-field" id="questionfield" value="" placeholder="ID를 입력해주세요." v-model="credential.username">
            <label class="question-field-icon fui-user" for="question-name"></label>
          </div>

          <div class="control-group">
            <p>PASSWORD</p>
            <input @keyup.enter="getJWT" type="password" class="question-field" value="" placeholder="비밀번호를 입력해주세요" v-model="credential.password">
            <label class="question-field-icon fui-lock" for="question-pass"></label>
          </div>

          <button @click="getJWT" id="questionButton" class="btn btn-primary btn-large btn-block">LOGIN</button>
          <a class="question-link" href="https://anijs.github.io/">FGGRAPHY</a>
        </div>
      </div>
    </div>
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
      this.$store.dispatch('getUserTier', this.credential.username)               
      // $router는 django에서 redirect와 같은 동작을 한다
      // 안에들어가는 name은 router의 routes안의 name으로 이동하는 것
      this.$router.push({name: 'Home'})      
    }
  },
  created: function () {
    if (this.$store.getters.decodedToken) {
      this.$router.push({name: 'Home'})
    }
  },

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
