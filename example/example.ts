import Vue from 'vue'
import App from './App'

// mount
new Vue({
  el: '#app',
  render: h => h(App, {
    props: { propMessage: 'World' }
  })
})