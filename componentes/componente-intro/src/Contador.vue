<template>
  <div class='contador'>
    <span> {{contador}} </span>
    <button @click="adicionar">+</button>
    <button @click="subtrair">-</button>
  </div>
</template>

<script>
  export default {
    data: () => ({
      contador: 0,
    }),
    methods:{
      adicionar(){
        this.contador++
      },
      subtrair(){
        this.contador--
      }
    }
  }
</script>

<style lang="scss" scoped>
span {
  border-bottom: 1px solid #CCC
  }

button{
   height: 30px; 
   width: 30px; 
   border-radius: 15px;
   background-color:coral;
   color:#fff;
   outline: none  
  }
  </style>
