<template>
  <div id="app">
    <app-painel v-if="!fechado" titulo="Olá" @fechar="confirmar">
      Conteúdo do <strong>painel</strong>
    </app-painel>
    <p v-if="fechado">
      {{ 'Painel foi fechado!' | reverso }}
    </p>
  </div>
</template>

<script>
  import appPainel from './Painel.vue';
  import mixin from './mixin.js';

  export default {
    name: 'app',
    components: {appPainel},
    data() {
      return {
        fechado: false
      }
    },
    mixins: [mixin],
    methods: {
      confirmar() {
        this.fechado = true;
      }
    },
  }
</script>

<style lang="scss">
</style>
