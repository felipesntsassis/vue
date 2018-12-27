<template>
  <div>
    <ul>
      <li v-for="item in lista">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'lv-lista',
    // props: ['lista', 'ordena'],
    props: {
      lista: {
        required: true,
        type: Array,
        default: []
      },
      ordena: null
    },
    created() {
      if (typeof this.ordena != 'undefined') {
        this.lista.sort();
      }
    }
  }
</script>

<style>
  li {
    display: inline;
    list-style-type: none;
    padding-right: 20px;
  }
</style>
