# Componentes revisão

- Componentes podem ser reutilizado várias vezes em vários locais da aplicação.

  - html é case sensitive, então tanto faz as letras maiúsculas ou minusculas.
  - Para instanciar mais de um item em uma tela a Vue Instance pega o primeiro componente com aquele nome e só enxerga ele

  > então: criar mais de uma div com a classe **app** e mudar o **el:** para **.app** não dará certo.

Será necessário criar um componente.

**Existem 2 formas de criar componentes:**

- Globais
- Registro

## Requisitos para componentização

- data é transformado em função que retorna o objeto com os datas
- o componente precisa retornar apenas **UM** elemento e não mais de um
  - dica: você pode colocar os itens dentro de uma div ou section.
- Os dados não podem ser compartilhados de uma variavel só, pois mesmo que dupliquemos um componente os dados serão compartilhados entre os componentes assim como seu valor.

  - ex:

    ```js
    const dados: {contador: 0}

      [...]

    data(){
      return dados
    }
    ```

## Componentes de registro global

- Utilizam o `Vue.component()`, vai usar independente das instâncias.

```html
<div id="app">
  <!-- html é case sensitive -->
  <contador></contador>
  <CONTADOR></CONTADOR>
  [...]
</div>
```

```js
Vue.component('nome_componente',{
  template:``// onde ficará de fato seu componente.
data(){ // data é transformado em função retornando os dados
return //...
}
})
```

### Em instâncias Vue

Após criar o componente e exporta-lo como default, você precisa importar em main.js e em seguida utilizar o `Vue.component()` com o seu componente

```js
// main.js
import Contador from './Contador.vue'
Vue.component('app-contador', Contador) // registro global do contador
```

Em seguida você estará habil para utiliza-lo em seu projeto usando sua tag, por que ele está sendo declarado pela mesma instância do vue que o **App.vue** então também qualquer outro componente que esteja dentro da aplicação principal terá acesso ao componente global .

```html
<app-contador></app-contador>
```

## Componentes registro local

Dado que temos 2 áreas de template **#app1** e **#app2**

e quisermos utilizar duas instâncias do componente, utilizamos o parametro **components** que declara os componentes naquela instância Vue.

- obs: utilizar aspas simples quando o nome contiver '-'

  ```html
  <div id="app1">
    <contador1></contador1>
    <contador1></contador1>
    <contador1></contador1>
  </div>
  <hr />
  <div id="app2">
    <app-contador></app-contador>
    <app-contador></app-contador>
    <app-contador></app-contador>
  </div>
  ```

```js
import contador from 'bla'

new Vue({
  el: '#app1',
  components: {
    contador1: contador,
  },
})
new Vue({
  el: '#app2',
  components: {
    'app-contador': contador,
  },
})
```

### Outra forma de digitar o nome dos componentes 

- Se você importar um componente com CammelCase (iniciado por app) o vue ainda poderá chamar o componente usando o ífem 

  ```html
  <div id="app2">
    <app-contador></app-contador>
  </div>
  ```

```js
import contador from 'bla'

new Vue({
  el: '#app1',
  components: {
    appContador: contador,
  },
})
```

### Em instâncias Vue

Quando for necessário importar um componente individualmente dentro do projeto, poderá apenas importar o componente e declarar o nome da sua tag.

```vue
<template>
  <div class='contadores'>
     <app-contador />
  </div>
</template>

<script>
  import Contador from './Contador'
  export default {
    components: {
      'app-contador':Contador,
    },
  }
</script>
```

# Scoped

**scoped** é uma propriedade de estilo inserida na tag style que diz que aquelas propriedades css serão aplicadas apenas dentro daquele componente. Dentro do código ela gera uma propriedade só daquele componente para identificar onde serão feitas as modificações. ele atribui um código como **data-v-[hash]**

```vue 
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

```

>obs: esse escopo passa para os elementos filhos.