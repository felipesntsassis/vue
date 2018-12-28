<template>
  <div>
    <input type="text" v-model="tarefa">
    <button @click="submeterTarefa()">Adicionar</button>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    name: 'lv-add-tarefa',
    data () { return { tarefa: '' } },
    methods: {
      ...mapActions({
        adicionar: 'adicionarTarefa'
      }),
      submeterTarefa() {
        if (this.tarefa !== '') {
          this.adicionar(this.tarefa);
          this.tarefa = '';
        }
      }
      /* adicionar() {
        if (this.tarefa !== '') {
          this.$store.dispatch('adicionarTarefa', this.tarefa);
          this.tarefa = '';
        }
      } */
    }
  }
</script>
