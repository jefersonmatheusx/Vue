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

## Vue e DOM 

O Vue cria um DOM virtual que será replicado para o verdadeiro DOM, por isso se alterarmos o DOM ele não é passado para o DOM virtual e as alterações não serão de fato reais para o Vue. 

## Ciclo de vida do Vue

* instancia o Vue

* **beforeCreated:** é chamado antes de criar a própria instancia do Vue.
  * Logo após isso, o Vue é iniciado fazendo as injeções de dependência e reatividade   
* **created:** faz verificações para montar nossa instância (verifica se tem $evl: salva o template, $template e chamar o $mount etc.)
  * _Se tem template_ ele compila o template e chã a funço deã renderização
  * _Se não tem template_ Compila os $el's do html de fora como um template 
* **beforeMount:** antes de aplicar o template na DOM (antes de montar na DOM - mount) 
* **mounted:** Processo de montar o DOM, aplicar o template na DOM 
* **ciclo de atualização:** Sempre que for necessário atualizar um dado da DOM irá verificar 
  * **beforeUpdate**:quando os dados mudam 
  * **updated**: foi atualizado

### vm.$destroy - ciclo de vida

Função que irá destruir a instância impedindo que haja modificações de forma reativa

* **beforeDestroy:** antes de destruir todas as funcionalidades do Vue
* **destroyed:** o template fica na forma que foi deixado antes de apagar, mas não existe mais instância do vue.

> pode ser chamado no html 
>  ```html
>  <button @click="$destroy()">Destruir</button>
> ```
> '   

