<template>
  <div id="app">
    <lv-busca></lv-busca>
    <hr>
    <lv-perfil></lv-perfil>
  </div>
</template>

<script>
  import lvBusca from './LVBusca.vue';
  import lvPerfil from './LVPerfil.vue';

  export default {
    name: 'app',
    components: {lvBusca, lvPerfil}
  }
</script>
