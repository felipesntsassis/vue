<template>
  <div>
    <h1>Lendo artigo {{ 'artigo X' | maiusculo }}</h1>
    ................
  </div>
</template>

<script>
  import postagem from './Postagem.js';

  export default {
    name: 'lv-leitor',
    mixins: [postagem]
  }
</script>

<style>
</style>
