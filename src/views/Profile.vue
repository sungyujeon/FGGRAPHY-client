<template>
  <div class="container">
    <ProfileInfo/>
    <ProfileGenre/>
    <ProfileMovie/>
    <ProfileCollection/>    
  </div>
</template>

<script>
import ProfileInfo from '@/components/ProfileInfo.vue'
import ProfileGenre from '@/components/ProfileGenre.vue'
import ProfileCollection from '@/components/ProfileCollection.vue'
import ProfileMovie from '@/components/ProfileMovie.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'Profile',
  components: {
    ProfileInfo,
    ProfileGenre,  
    ProfileMovie,
    ProfileCollection  
  },
  computed: {
    ...mapGetters([
      'getGenreGroups'
    ])
  }
}
</script>

<style>

</style>