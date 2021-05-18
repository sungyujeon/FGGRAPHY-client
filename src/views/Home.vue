<template>
  <div class="home">    
    <!-- <h5 v-for="article in this.$store.state.articles" :key="article.id">
      {{ article.title }}
      <router-link :to="{name: 'Detail', params: {id: article.id}}">
        {{article.id}}번글보기
      </router-link>
    </h5> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
  // created: function () {
  //   this.$store.dispatch('getArticles')
  // }
}
</script>
