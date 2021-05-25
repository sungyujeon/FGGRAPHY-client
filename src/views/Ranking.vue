<template>
  <div class="container">
    <VueSlickCarousel :arrows="true" :dots="true">
      <ranking-genres
      v-for="(genre_group, idx) of getGenreGroups"
      :key="idx"
      :genreGroup="genre_group"
      >
      </ranking-genres> 
    </VueSlickCarousel>   
  </div>
</template>

<script>
import RankingGenres from '@/components/RankingGenres.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
import { mapGetters } from 'vuex'

export default {
  name: 'Ranking',
  components: {
    RankingGenres,
    VueSlickCarousel,   
  },    
  created: function () {
    this.$store.dispatch('getGenreRanking')
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