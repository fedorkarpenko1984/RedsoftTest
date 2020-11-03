<template>
  <div id="app">
    <appheader></appheader>
    <catalog></catalog>
    <appfooter></appfooter>
  </div>
</template>

<script>
import Header from "./Header"
import Footer from "./Footer"
import Catalog from "./Catalog"

  export default {
    data () {
      return {
        idPic: []
      }
    },
    beforeCreate () {
      this.$store.commit('loadId')

    },
    beforeDestroy() {
    },
    components: {
      appheader: Header,
      appfooter: Footer,
      catalog: Catalog
    },
    methods: {
      }

  }
</script>

<style>
  #app{
    padding: 0;
    margin: 0;
    background: #E5E5E5;
  }
</style>
