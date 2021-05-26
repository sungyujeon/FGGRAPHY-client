<template>
  <div id="half-stars-example">
    <div class="rating-group">
        <label aria-label="0 stars" class="rating__label rating__label--none" for="rating-0"></label>
        <input class="rating__input rating__input--none" name="rating-0" id="rating-0" value="0" type="radio">
        <label aria-label="0.5 stars" class="rating__label rating__label--half" for="rating-0-half"><font-awesome-icon :icon="['fas','star-half']" class="rating__icon rating__icon--star"/></label>
        <input class="rating__input" name="rating" id="rating-0-half" value="0.5" type="radio" @click="onRating(0.5)">
        <label aria-label="1 star" class="rating__label" for="rating-1"><font-awesome-icon :icon="['fas','star']" class="rating__icon rating__icon--star me-1"/></label>
        <input class="rating__input" name="rating" id="rating-1" value="1.0" type="radio" @click="onRating(1.0)">
        <label aria-label="1.5 stars" class="rating__label rating__label--half" for="rating-1-half"><font-awesome-icon :icon="['fas','star-half']" class="rating__icon rating__icon--star"/></label>
        <input class="rating__input" name="rating" id="rating-1-half" value="1.5" type="radio" @click="onRating(1.5)">
        <label aria-label="2 stars" class="rating__label" for="rating-2"><font-awesome-icon :icon="['fas','star']" class="rating__icon rating__icon--star me-1"/></label>
        <input class="rating__input" name="rating" id="rating-2" value="2.0" type="radio" @click="onRating(2.0)">
        <label aria-label="2.5 stars" class="rating__label rating__label--half" for="rating-2-half"><font-awesome-icon :icon="['fas','star-half']" class="rating__icon rating__icon--star"/></label>
        <input class="rating__input" name="rating" id="rating-2-half" value="2.5" type="radio" @click="onRating(2.5)">
        <label aria-label="3 stars" class="rating__label" for="rating-3"><font-awesome-icon :icon="['fas','star']" class="rating__icon rating__icon--star me-1"/></label>
        <input class="rating__input" name="rating" id="rating-3" value="3.0" type="radio" @click="onRating(3.0)">
        <label aria-label="3.5 stars" class="rating__label rating__label--half" for="rating-3-half"><font-awesome-icon :icon="['fas','star-half']" class="rating__icon rating__icon--star"/></label>
        <input class="rating__input" name="rating" id="rating-3-half" value="3.5" type="radio" @click="onRating(3.5)">
        <label aria-label="4 stars" class="rating__label" for="rating-4"><font-awesome-icon :icon="['fas','star']" class="rating__icon rating__icon--star me-1"/></label>
        <input class="rating__input" name="rating" id="rating-4" value="4.0" type="radio" @click="onRating(4.0)">
        <label aria-label="4.5 stars" class="rating__label rating__label--half" for="rating-4-half"><font-awesome-icon :icon="['fas','star-half']" class="rating__icon rating__icon--star"/></label>
        <input class="rating__input" name="rating" id="rating-4-half" value="4.5" type="radio" @click="onRating(4.5)">
        <label aria-label="5 stars" class="rating__label" for="rating-5"><font-awesome-icon :icon="['fas','star']" class="rating__icon rating__icon--star"/></label>
        <input class="rating__input" name="rating" id="rating-5" value="5.0" type="radio" @click="onRating(5.0)">
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const SERVER_URL = process.env.VUE_APP_SERVER_URL

export default {
  name: 'Star',
  props: {
    movie: Object,
    rating: Number,
  },
  data: function () {
    return {
      user_rating: 0,
    }
  },
  methods: {
    onRating: function (rating_num) {
      let curr_rating = rating_num
      if (this.user_rating == rating_num) {
        if (curr_rating % 1 !== 0) {
          curr_rating -= 0.5
          let inputEle = document.querySelector(`#rating-${curr_rating}-half`)
          inputEle.setAttribute('checked', false)
        } else {
          let inputEle = document.querySelector(`#rating-${curr_rating}`)
          inputEle.setAttribute('checked', false)
        }

        this.user_rating = 0
      } else {
        this.user_rating = rating_num
        let zeroInputEle = document.querySelector(`#rating-0`)
        if (zeroInputEle['checked'] === true) {
          zeroInputEle.setAttribute('checked', false)
        }

      axios({
        method: 'post',
        url: `${SERVER_URL}/api/v1/movies/${this.$props.movie.id}/rating/`,
        headers: {
          Authorization: `JWT ${this.$store.state.userToken}`
        },
        data: {
          rating: rating_num,
        },
      })
        .then(()=>{
          
        })
        .catch((err) => {
          console.log(err)
        })
      return null
      }
    },
  },
  watch: {
    rating: function () {
      // this.user_rating = this.$props.rating
      // let curr_rating = this.user_rating
      // if (curr_rating % 1 !== 0) {
        // curr_rating -= 0.5
        // let inputEle = document.querySelector(`#rating-${curr_rating}-half`)
        // inputEle.setAttribute('checked', true)
      // } else {
        // let inputEle = document.querySelector(`#rating-${curr_rating}`)
        // inputEle.setAttribute('checked', true)
      // }

    }
  },
}
</script>

<style>
  /* add padding and positioning to half star labels */
  .rating-group {
    display: inline-flex;
  }
  
  /* make hover effect work properly in IE */
  .rating__icon {
    pointer-events: none;
  }
  
  /* hide radio inputs */
  .rating__input {
  position: absolute !important;
  left: -9999px !important;
  }

  /* set icon padding and size */
  .rating__label {
    cursor: pointer;
    /* if you change the left/right padding, update the margin-right property of .rating__label--half as well. */
    padding: 0 0.1em;
    font-size: 2rem;
  }

  /* add padding and positioning to half star labels */
  .rating__label--half {
    max-width: 23px;
    overflow: hidden;
    padding-right: 0;
    margin-right: -1.45rem;
    z-index: 2;
  }
  
  /* set default star color */
  .rating__icon--star {
    color: orange;
  }
  
  /* set color of none icon when unchecked */
  .rating__icon--none {
    /* color: #eee; */
  }

  /* if none icon is checked, make it red */
  .rating__input--none:checked + .rating__label .rating__icon--none {
    color: red;
  }

  /* if any input is checked, make its following siblings grey */
  .rating__input:checked ~ .rating__label .rating__icon--star {
    color: #ddd;
  }
  
  /* make all stars orange on rating group hover */
  .rating-group:hover .rating__label .rating__icon--star,
  .rating-group:hover .rating__label--half .rating__icon--star {
    color: orange;
  }

  /* make hovered input's following siblings grey on hover */
  .rating__input:hover ~ .rating__label .rating__icon--star,
  .rating__input:hover ~ .rating__label--half .rating__icon--star {
    color: #ddd;
  }
  
  /* make none icon grey on rating group hover */
  .rating-group:hover .rating__input--none:not(:hover) + .rating__label .rating__icon--none {
    color: #eee;
  }

  /* make none icon red on hover */
  .rating__input--none:hover + .rating__label .rating__icon--none {
    color: red;
  }
</style>