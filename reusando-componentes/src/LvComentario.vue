<template>
  <div>
    <h4>Comentários de {{ 'artigo X' | maiusculo }}</h4>
  </div>
</template>

<script>
  import postagem from './Postagem.js';

  export default {
    name: 'lv-comentario',
    mixins: [postagem]
  }
</script>

<style>
</style>
