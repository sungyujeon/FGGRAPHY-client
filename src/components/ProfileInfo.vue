<template>
  <div class="row row-col-6 my-3">
    <div class="col-6">
      무언가 사진..비슷한걸 넣자
    </div> 
    <div class="col-6">
      <p>아이디 : {{ this.$route.params.username}}</p>      
    </div>   
  </div>
</template>

<script>
export default {
  name: 'ProfileInfo'
}
</script>

<style>

</style>