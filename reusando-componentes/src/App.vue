<template>
  <div id="app">
    <h4>Lista um</h4>
    <lv-lista :lista="['feijão', 'arroz', 'carne']"></lv-lista>
    <br>
    <lv-lista :lista="['feijão', 'arroz', 'carne']" ordena></lv-lista>
    <br>
    <h4>Lista dois</h4>
    <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']" ordena></lv-lista>
    <br>
    <lv-lista :lista="['leite', 'biscoito', 'bombom', 'aveia']"></lv-lista>
    <br>
    <!-- <lv-cartao
      titulo="Preço"
      conteudo="Aqui você encontra preços <strong>baixos</strong>">
    </lv-cartao> -->
    <lv-cartao titulo="Preço">
      Aqui você encontra preços <strong>baixos</strong>
      <div slot="rodape">
        Conteúdo do rodapé aqui...
      </div>
    </lv-cartao>
    <br>
    <lv-cartao titulo="Qualidade">
      Temos os produtos com mais <strong>qualidade</strong> no mercado.
    </lv-cartao>
    <br>
    <lv-leitor></lv-leitor>
    <br>
    <lv-comentario></lv-comentario>
    <br>
    <lv-usuario nome="Filomena" @novaMsg="escrever"></lv-usuario>
    <lv-usuario nome="Amarildo" @novaMsg="escrever"></lv-usuario>
   <br>
   <div v-html="chat"></div>
  </div>
</template>

<script>
  import lvLista from './LvLista.vue';
  import lvCartao from './LvCartao.vue';
  import lvLeitor from './LvLeitor.vue';
  import lvComentario from './LvComentario.vue';
  import lvUsuario from './LvUsuario.vue';

  export default {
    name: 'app',
    components: {lvLista, lvCartao, lvLeitor, lvComentario, lvUsuario},
    data() {
      return {
        chat: ''
      }
    },
    methods: {
      escrever(mensagem) {
        this.chat = mensagem + '<hr>' + this.chat
      }
    }
  }
</script>

<style>
</style>
