<template>
  <div class="containermt-4">
    <div class="row">
      <div class="col-10">
        <GenreDetailHomeLeft/>
      </div>
      <div class="col-2">
        <div class="mt-5" style="font-size: 20px; font-weight: bold;">{{ this.$route.params }}랭킹</div>
        <GenreDetailHomeRight/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GenreDetailHome'
}
</script>

<style>

</style>