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
* **$mount([elemento])** - monta um elemento
  
``` js
  vm.$mount('#app')
  //ou  
  vm.$mount() // desde de que você tenha um template 
  document.querySelector('#app').appendChild(vm.$el) // ele já monta o $el
```


## template 
Montar um template dentro da instância Vue, mas ele deve possuir apenas um elemento, (podendo ter vários dependentes dentro deste elemento)

``` html
<div id="app">
  <!-- VAI MONTAR O TEMPLATE AQUI DENTRO -->
</div>

<script>
  const vm = new Vue({
    // el: '#app',
    template: `
    <div>
      <h2 >
      {{aula}} 
      </h2>
      <h2>
        {{modulo}}
      </h2>
      <button @click="alterarAula">Alterar aula</button>
      <button @click="alterarModulo">Alterar Módulo</button>
    </div>
    `,
    data: {
      //  ...
    },
    methods: {
      // ...
    }
  })
  vm.$mount('#app') // --se não houver o $mount deve se habilitaor o $el
```


## Componentização

para se criar um componente independente que pode ser inserido na view quantas vezes for necessário nós utilizamos 

```html
<div id="app">
  <comp></comp>
  <comp></comp>
  <comp></comp>
  <comp></comp>
</div>

<script>
Vue.component('comp',{
     template:'<h1>Componente</h1>',
     data: () => {
      return {
        aula: 'Aula: Montando Instância Vue',
        modulo: 'Módulo: Instância do Vue'
      }
    },
    methods: {
      alterarAula() {
        this.aula += '#'
      },
      alterarModulo() {
        this.modulo += '#'
      }
    }
   })
</script>
```

> Diferente da implementação da instância do Vue, o parametro **data** dentro do componente deixa de ser um parametro e vira uma função com retorno de um objeto literal.