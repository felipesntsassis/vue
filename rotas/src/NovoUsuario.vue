<template>
    <div>
        <h1>Novo Usuário</h1>
        <button @click="falhou">Falha</button>
        <button @click="beleza">Sucesso</button>
    </div>
</template>

<script>
  export default {
    name: 'lv-usuario-novo',
    methods: {
      falhou() {
        this.$router.replace('/usuarios/erro');
      },
      beleza() {
        this.$router.replace('/usuarios/felipe');
      }
    }
  }
</script>
