<template>
  <div id="app">
    <p>{{ total }}</p>

    <button @click="calcula('-')"> - </button>
    <button @click="calcula('+')"> + </button>

    <p>Nome Iniciado: {{ nome }}</p>
    <p>Nome Filtrado: {{ nome | formataNome }}</p>
    <p>Nome Computado: {{ nomeFormatado }}</p>
    <label>Input a computar</label>
    <input type="text" v-model="nomeFormatado">
    <br>
    <label>Input a observar</label>
    <input type="text" v-model="busca">
    <p v-text="resultado"></p>
  </div>
</template>

<script>
export default {
  name: 'lv-contador',
  data () {
    return {
      total: 10,
      nome: 'jose antonio',
      resultado: '',
      busca: ''
    }
  },
  methods: {
    calcula(sinal) {
      this.total = (sinal === '-') ? this.total - 1 : this.total + 1
    }
  },
  filters: {
    formataNome(valor) {
      console.log('Executando filter');
      valor = valor.toLowerCase();
      let corta = valor.split(' ');
      let resultado = '';
      for (let nome of corta)
        resultado += nome.charAt(0).toUpperCase() + nome.slice(1) + ' ';

      return resultado;
    }
  },
  computed: {
    /* nomeFormatado() {
      console.log('Executando computed');
      return this.nome.toUpperCase();
    } */
    nomeFormatado: {
      get: function () {
        console.log('Executando computed');
        return this.nome.toUpperCase();
      },
      set: function (novoValor) {
        this.nome = novoValor.substring(0, 3);
      }
    }
  },
  watch: {
    busca: function (novoValor, valorAntigo) {
      this.resultado = 'Aguardando o término da digitação...';
      this.recolheResposta();
    }
  },
  methods: {
    recolheResposta() {
      let valor = this.busca;
      setTimeout(() => {
        if (valor === this.busca)
          this.resultado = 'Terminou de digitar...';
      }, 2000);
    }
  }
}
</script>
