<template>
  <div>
    <lv-postagem></lv-postagem>
    <lv-postagem></lv-postagem>
    <lv-postagem></lv-postagem>
    <lv-postagem></lv-postagem>
  </div>
</template>

<script>
  import lvPostagem from './LVPostagem.vue';

  export default {
    name: 'lv-feed',
    components: {lvPostagem}
  }
</script>

<style>
</style>
