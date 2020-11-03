import Vue from 'vue'
import App from './App'
import store from './store/index'


new Vue({
  el: '#app',
  data () {
    return {

    }
  },
  store,
  render: h => h(App)
})
