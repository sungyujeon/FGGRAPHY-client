<template>
  <div class="container">    
    <VueSlickCarousel :arrows="true" :dots="true">
      <ranking-genres
      v-for="(genre_group, idx) of getGenreGroups"
      :key="idx"
      :genreGroup="genre_group"
      @clickPosterEditBtn="showGenreName"
      >
      </ranking-genres> 
    </VueSlickCarousel>   
    <!-- GenrePosterModal -->    
    <div class="modal fade" id="GenrePosterModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <div>
              <p>{{ genreName }} 메인 영화 고르기</p>
            </div>         
            <input v-model="searchInput" class="form-control form-custom-control" type="text" placeholder="Search" aria-label="Search">                  
          </div>            
          <div class="modal-body">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">취소</button>
            <button type="button" class="btn btn-success" @click="clickpickMovieBtn()">선택</button>
          </div>
        </div>
      </div>
    </div>
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
  data: function () {
    return {
      searchInput: '',
      genreName: ''
    }
  },
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
  },
  methods: {
    showGenreName: function (genre) {      
      this.genreName = genre
    }
  }
}
</script>

<style>

</style>