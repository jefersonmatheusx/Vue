<template>
  <div id="app">
    {{titulo}}
  <button @click="titulo += '##'">alterar</button>
</div>
</template>

<script>
  // objeto que corresponde ao vue instance a ser exportado.
export default {
  data:()=>{ return{titulo:'TEste Data usando Vue.js' }}
}
</script>

<style>
#app{
  background: chocolate;
  color:#fff
}
</style>