<template>
  <div class="painel">
    <h3> {{ titulo }}</h3>
    <slot></slot>
    <button @click="fechar">Fechar</button>
  </div>
</template>

<script>
  import mixin from './mixin.js';

  export default {
    name: 'app-painel',
    props: {
      titulo: {
        required: true,
        type: String
      }
    },
    mixins: [mixin],
    methods: {
      fechar() {
        this.$emit('fechar');
      }
    },
  }
</script>

<style>
  .painel {
    border: 1px solid #DDD;
    border-radius: 4px;
    padding: 15px;
  }
</style>

