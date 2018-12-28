<template>
  <div id="app">
    <p>{{ nome }}</p>
    <lv-add-tarefa></lv-add-tarefa>
    <lv-tarefas></lv-tarefas>
    <lv-busca></lv-busca>
  </div>
</template>

<script>
  import {mapState} from 'vuex';

  import LvAddTarefa from './LvAddTarefa.vue';
  import LvBusca from './LvBusca.vue';
  import LvTarefas from './LvTarefas.vue';

  export default {
    name: 'app',
    components: {LvAddTarefa, LvBusca, LvTarefas},
    mounted() {
      setTimeout(() => {
        this.$store.state.nome = 'Novo Nome';
      }, 1500);
    },
    computed: {
     ...mapState(['nome'])
    }
  }
</script>

<style>
</style>
