<template>
  <div class="container home">
      <div class="row">
        <div class="col-9 border">
          <HomeLeft/>
        </div>
        <div class="col-3 border">
          <HomeRight/>
        </div>
      </div>
    </div>
</template>

<script>
import HomeLeft from '@/components/HomeLeft.vue'
import HomeRight from '@/components/HomeRight.vue'

export default {
  name: 'Home',
  components: {
    HomeLeft,
    HomeRight
  }
}
</script>
