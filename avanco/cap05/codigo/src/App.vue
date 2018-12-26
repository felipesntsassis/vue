<template>
  <div id="app">
    <input type="text" v-model="nome"><br>
    <small>{{ status }}</small>
    <br>
    <button @click="saudacao">Estou pronto</button>

    <div v-if="status === ''">
      <br>
      {{ nome | maiusculo }} tem {{ qtdeCaracteres }} caracteres.
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      nome: '',
      status: 'Digite seu nome acima'
    }
  },
  methods: {
    saudacao () {
      alert(`Olá ${this.nome}!`);
    },
    finalizar() {
      let valor = this.status;

      setTimeout(() => {
        if (valor == this.status)
          this.status = '';
      }, 600);
    }
  },
  watch: {
    nome: function (novoValor, valorAntigo) {
      this.status = 'Recebendo o nome...';
      this.finalizar();
    }
  },
  filters: {
    maiusculo (valor) {
      return valor.toUpperCase();
    }
  },
  computed: {
    qtdeCaracteres: {
      get: function () {
        return this.nome.length;
      }
    }
  }
}
</script>
