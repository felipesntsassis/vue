<template>
  <div>
    <h1>Postagem {{ id }}</h1>
    <router-link to="/postagens/comentarios">Comentarios</router-link>
  </div>
</template>

<script>
  export default {
    name: 'app-postagem',
    props: ['id']
  }
</script>
