<template>
  <div class="cartao">
    <h2>{{ titulo }}</h2>
    <!-- <p v-html="conteudo"></p> -->
    <slot></slot>
    <hr>
    <slot name="rodape"></slot>
  </div>
</template>

<script>
  export default {
    name: 'lv-cartao',
    props: [ 'titulo', 'conteudo' ]
  }
</script>

<style>
  .cartao {
    border: 1px solid #DDD;
    padding: 10px;
  }
</style>

