<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      NOme do Usuário: <strong>{{ inverterNome }}</strong>
    </p>
    <button @click="reinicializarNome">Reiniciar Nome</button>
  </div>
</template>

<script>
  export default {
    props: {
      nome: {
        type: String,
        required: true,
        default: 'anônimo'
        // default: function(){
        //     return Array(10).fill(0).join(',')
        // }
      }
    },
    data:()=>{
        return {
        _nome:this.nome
    }},
    methods:{
        reinicializarNome(){
          this._nome = "Pedro" 
          this.$emit('nomeMudou',this._nome)
      }
    },
    computed: {
      inverterNome() {
        return this.nome
          .split('')
          .reverse()
          .join('')
      },
      
    }
  }
</script>

<style scoped>
  .componente {
    flex: 1;
    background-color: #ec485f;
    color: #fff;
  }
</style>
