import Vue from 'vue'

import loja from './loja/raiz';

import App from './App.vue';

new Vue({
  el: '#app',
  store: loja,
  render: h => h(App)
})
