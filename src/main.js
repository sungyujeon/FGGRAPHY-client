import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faThumbsUp as fasThumbsUp, faCommentDots as fasCommentDots } from '@fortawesome/free-solid-svg-icons'
import { faThumbsUp as farThumbsUp, faCommentDots as farCommentDots } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(  
  fasThumbsUp,
  farThumbsUp,
  fasCommentDots,
  farCommentDots
)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

Vue.use(VueGlide)

new Vue({  
  router,
  store,   
  el: '#app',
  render: h => h(App)
}).$mount('#app')
