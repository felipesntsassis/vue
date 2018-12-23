<template>
  <div id="app">
    <h1 v-once v-text="titulo"></h1>
    <h2>{{ subtitulo }}</h2>
    <p>
      <input type="text" :disabled="tarefas.length <= 0" v-model="subtitulo" placeholder="Descrição">
    </p>
    <div v-if="tarefas.length <= 0">
      Não há tarefas.
    </div>
    <div v-if="tarefas.length > 0">
      Existem {{ tarefas.length }} tarefas.
    </div>
    <ul>
      <li v-for="tarefa in tarefas">{{ tarefa }}</li>
    </ul>
    <p>
      <button type="button" @click="tarefas = []">Limpar</button>
    </p>

  </div>
</template>

<script>
export default {
  name: 'lv-tarefas',
  data () {
    return {
      titulo: 'Listagem de Tarefas',
      subtitulo: 'Defina uma descrição',
      tarefas: []
    }
  },
  mounted() {
    setTimeout(() => {
      this.tarefas = ['Aprender HTML', 'Aprender JavaScript', 'Voar com Vue JS!'];
    }, 3000);
  }
}
</script>

<style lang="scss">
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
} */
</style>
