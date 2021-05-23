<template>
  <div class="container home mt-4">
      <div class="row">
        <div class="col-10 border">
          <HomeLeft/>
        </div>
        <div class="col-2 border">
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
  },
}
</script>
