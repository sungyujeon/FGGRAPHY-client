<template>
  <div class="row row-col border">
    <div class="col-1 border" v-for="genre in userInfomation[0].genres" :key="genre.id">      
      <h5 class="mt-2">{{ genre.genre }}</h5>    
      <span class="mb-3">{{ genre.tier }}티어/({{ genre.ranking }}등)</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProfileGenre',
  props: {
    userInfomation: Array
  }
}
</script>

<style>

</style>