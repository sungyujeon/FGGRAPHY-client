<template>
  <div class="row row-col-3 my-3">
    <div class="col-3">
      <p>닉네임 : {{ this.$route.params.username}}</p> 
    </div> 
    <div class="col-3">
      <p>총 리뷰수 : [리뷰 갯수]</p>      
    </div>   
    <div class="col-3">
      <p>평균 평점 : [평균 평점]</p>      
    </div> 
    <div class="col-3">
      <p>로그인한 사람과 프로필의 사람이 다르면 [팔로우버튼]+[팔로우갯수]</p>      
      <p>로그인한 사람과 프로필의 사람이 같으면 [팔로우갯수]</p>
      <p>로그인한 사람과 프로필의 사람이 같으면 [팔로워갯수]</p>
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