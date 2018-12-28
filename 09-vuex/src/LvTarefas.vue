<template>
  <div>
    <ul v-if="tarefas.length > 0">
      <li v-for="tarefa in tarefas">
        <lv-del-tarefa :tarefa="tarefa"></lv-del-tarefa>
        {{ tarefa }}
      </li>
    </ul>
    <p v-if="tarefas.length === 0">
      <em>Nenhuma tarefa foi adicionada.</em>
    </p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';

  import LvDelTarefa from './LvDelTarefa.vue';
  export default {
    name: 'lv-tarefas',
    components: {LvDelTarefa},
    computed: {
      ...mapGetters({
        tarefas: 'listarTarefas'
      })
    }
  }
</script>
