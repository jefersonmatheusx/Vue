# Multiplas instâncias Vue

* Uma propriedade e uma instância Vue não consegue enxergar a outra, a não ser que declaremos em uma variavel:
  
  ```js
  const vm1 = new Vue({
    el: '#app1',
    data: {
      titulo1: 'TEste 1 '
    },
    methods: {
      altera() {
        // this.titulo1 += '!!!'
        vm2.titulo2 += '???'
      }
    }
  })
  const vm2 = new Vue({
    el: '#app2',
    data: {
      titulo2: 'TEste 2'
    },
    methods: {
      altera() {
         vm1.titulo1 += '!!!'
      }
    }
  })``` 

> dessa forma conseguimos acessar dados uma da outra. 
> 