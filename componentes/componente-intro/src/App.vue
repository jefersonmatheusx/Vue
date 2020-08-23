<template>
 <div id="app">
   <h1>Contadores</h1>
   <app-contadores></app-contadores>
   <button>botão fora do scoped</button>
 </div>
</template>

<script>
  export default {
    data:()=>({
        contador:0
    })
  }
</script>

<style lang="scss" scoped>

</style>