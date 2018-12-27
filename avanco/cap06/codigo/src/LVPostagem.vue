<template>
  <div>
    <a href="#" @click="mostrar = !mostrar">{{ titulo }}</a>
    <div v-if="mostrar === true">
      <small>{{ conteudo }}</small>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    name: 'lv-postagem',
    data() {
      return {
        titulo: 'Minha postagem',
        conteudo: 'Conteúdo da página',
        mostrar: false
      }
    }
  }
</script>
