<!--
<template>
  <div>
    <h3>{{ article.title }}</h3>
    <p>{{ article.content }}</p>
    <p>{{ article.created_at }}</p>
    <hr>
    <p v-for="comment in article.comment_set" :key="comment.id">
      {{ comment.content }}
    </p>
  </div>
</template>

<script>
import axios from 'axios'

const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Detail',
  data: function () {
    return {
      article: null
    }
  },
  created: function () {
    // console.log(this.$route)
    axios({
      method: 'get',
      url: `${SERVER_URL}/api/v1/articles/${this.$route.params.id}`,
      headers: {
        Authorization: `JWT ${this.$store.state.userToken}`
      }
    })
      .then((res)=>{
        this.article = res.data
      })
  }
}
</script>

<style>

</style>
-->