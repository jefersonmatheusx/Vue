# Instâncias Vue

## Multiplas instâncias Vue

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
> obs: vm = view model

## Propriedades reativas 

* Uma propridade é responsiva quando ela está presente no objeto do vue quando ele é criado, referenciado na instância. 

>  **vm.novaInfo = 'Teste'** --> não seria reativo se o parametro novaInfo não tenha sido referenciado no objeto vm anteriormente.

## Padrao Observer 

* Padrão de projeto mais utilizado da web



## $

* Muitos elementos internos do Vue começam com **$**
  
  ``` js
  $el: (...)
  $data: Object
      titulo: (...)
  ```

> obs : **vm.nome** ou **vm.$data.nome** mostra o mesmo valor

* **$ref** - pode referenciar algum item do html, não precisa usar o (:) para bindar e é uma propridade do vue.