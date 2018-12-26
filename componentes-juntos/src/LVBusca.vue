<template>
  <div>
    <h3>Buscando Rivais</h3>
    <label>Time:</label>
    <input type="text" v-model="busca">
    <p>Rival: {{ rival(busca) }}</p>
  </div>
</template>

<script>
  export default {
    name: 'lv-busca',
    data() {
      return {
        busca: ''
      }
    },
    methods: {
      rival(time) {
        switch (time.toLowerCase()) {
          case 'corinthians':
            return 'Palmeiras';
          case 'santos':
            return 'São Paulo';
          case 'flamengo':
            return 'Vasco';
          case 'cruzeiro':
            return 'Em minas é marmelada';
          default:
            return 'Não encontrado';
        }
      }
    }
  }
</script>
