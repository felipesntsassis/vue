import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  // render: h => h(App)
  /*render: (createElement) => {
    return createElement('header', {
      'attrs': { 'id': 'elemento' }
    }, [
      createElement('h1', 'Título do Post'),
      createElement('p', 'Conteúdo do Post')
    ])
  }*/
  render: (h) => {
    return (
      <header>
        <h1>Título do Post</h1>
        <p>Conteúdo do Post</p>
      </header>
    )
  }
})
