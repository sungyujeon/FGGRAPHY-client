<template>
  <div class="container my-3" style="width: 40vw;">
    <div class="card text-center" >
      <div class="card-header">
        [작성자] | [별점]
      </div>
      <div class="card-body">        
        <p class="card-text">[리뷰내용]</p>        
      </div>
      <div class="card-footer text-muted">
        <font-awesome-icon :icon="['fas','thumbs-up']" class="me-1 cursor-on"/>  
        <font-awesome-icon :icon="['far','thumbs-up']" class="me-1 cursor-on"/>       
        <font-awesome-icon :icon="['far','comment-dots']" class="ms-2 me-1 cursor-on"/><span class="cursor-on">댓글달기</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ReviewDetail'
}
</script>

<style>

</style>