import Vue from 'vue'
import VueRouter from 'vue-router';

import App from './App.vue';
import Comentarios from './Comentarios.vue';
import Home from './Home.vue';
import Lista from './Lista.vue';
import Postagem from './Postagem.vue';


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    {
      path: '/postagens',
      component: Lista,
      children: [
        { path: 'comentarios', component: Comentarios },
        { path: ':id', component: Postagem, props: true }
      ]
    }
  ]
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
