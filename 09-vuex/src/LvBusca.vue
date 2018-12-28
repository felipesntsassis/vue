<template>
  <div>
    <label for="txt-busca">Buscar por</label>
    <input type="text" id="txt-busca" v-model="termo">
    <ul>
      <li v-for="tarefa in resultado(termo)">{{ tarefa }}</li>
    </ul>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  export default {
    name: 'lv-busca',
    data() { return { termo: '' } },
    computed: {
      ...mapGetters({
        resultado: 'buscarTarefas'
      })
    }
  }
</script>
