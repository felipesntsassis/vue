<template>
  <div>
    <br>
    <router-link to="/postagens/1" class="item-lista">Postagem 1</router-link>
    <router-link to="/postagens/2" class="item-lista">Postagem 2</router-link>
    <router-link to="/postagens/3" class="item-lista">Postagem 3</router-link>
    <router-link to="/postagens/4" class="item-lista">Postagem 4</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app-lista'
  }
</script>

<style>
  a.item-lista {
    margin-right: 20px;
  }
</style>
