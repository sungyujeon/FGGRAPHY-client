<template>
  <div>
    <div v-for="(ranker, idx) in rankers" :key="idx" class="mt-5">
      {{idx+1}}: {{ ranker }}
    </div>
  </div>  
</template>

<script>
export default {
  name: 'GenreDetailHomeRight',
  props: {
    rankers: Array
  }  
}
</script>

<style>

</style>