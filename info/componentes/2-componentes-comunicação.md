# Componentes comunicação

## Pai para filho

A comunicação entre elemento pai e elemento filho se dá através das propriedades ('props')

E para informar essas propriedades podemos criar da seguinte forma

- **Array de strings**

```html
<!-- Pai -->
<componente :nome="variavel"></componente>
```

```js
// filho
export default {****
props: ['nome']
}
```

- **Objeto da propriedade**

  - tipo começa com letra maiuscula
  - a propriedade pode ter mais de um tipo esperado utilizando um array, (caso seja só um formato não é necessário um array)
  - muito importante para manter a organização do tipo esperado, gera uma falha quando o tipo passado for diferente

  ```js
  export default {
    props: { nome: [String, Array] },
    computed: {
      inverterNome() {
        return this.nome.split('').reverse().join('')
      }
    }
  }
  ```

- **Parametros aceitos na prop**

  - props também pode aceitar vários parametros como

    - type: tipo da variavel. Obriga a passar o tipo correto (Fuction, Array, String,Boolean)
    - required: o torna obrigatório. Obriga a informar a variável
    - default : não funciona muito com o required. Atribui um valor em caso de omissão do parametro

      - default também pode ser uma função

        ````js
        default: function(){
        return Array(10).fill(0).join(',')
        }
              ```
        ````

  ```js
   props: { nome: {
     type: String,
      required: true,
      default:"Bla"
       } } ,

  ```

## Filho para pai

O componente filho poderá enviar a modificação através de um evento que emite o resultado

- filho - usa o \$emit

  ```js
  this.$emit('[nome_do_envento]', this.variavelAlterada)
  // or
  this.$emit('[nome_do_envento]', { objA: 'a', objB: 'b' }) // pode ser um objeto
  ```

- pais - usa o @[nome_do_evento]

```js
<app-compoennte :nome="nome" @[nome_do_evento]="nome = $event" />

```

## Comunicação por CallBack

- O pai pode enviar uma função como parâmetro que faz algo do lado dele e não do filho que será chamada no filho
  - função callback
  - no filho deve existir uma prop: com seu devido nome do tipo Function

```js
// pai
methods:{
  reiniciarNome(){
    this.nome = 'Pedro'
  }
}
// [...]
```

```html
<!-- pai -->
<componente :nome="nome" :reiniciarFn="reiniciarNome"></componente>
```

```js
// filho

props: {
  reiniciarFn: Function
}
```

```html
<!-- filho -->
<button @click="reiniciarFn()"></button>
```

## Comunicação entre irmãos (event buss/ barramento de eventos)

- Irmãos podem se comunicar passando informação para o pai que passa para o outro componente filho .
- quando isso não for viável precisamos encontrar uma alternativa melhor
- **obs:** procurar por **Vuex** que é um administrador de estado para esse caso

- cria-se uma instância do vue de barramento no qual é compartilhado o evento enviado
  - esta instância será importada pelo usuárioInfo e pelo Usuário Editar
- através da propriedade $on('nome',callbackFunction) é possível um componente ter acesso aos dados emitidos por um irmão .
- também é possível chamar o evento e ouvi-lo dentro do próprio barramento compartilhado entre os componentes
  ```js
  // barramento
  import Vue from 'vue'
  export default new Vue({
    methods: {
      alterarIdade(idade) {
        this.$emit('idadeMudou', idade)
      },
      quandoIdadeMudar(callback) {
        this.$on('idadeMudou', callback)
      }
    }
  })
  ```

## Observações

- propriedades são case sensitive entre o html e o js
  - se props: ['Nome'] ..... :nome="variável" **não será aceito**
    -se uma prop for um array isso significa que ela foi passada por referência (string e numbers são passadas por valor), logo uma alteração nesse array irá impactar no componente pai (arrays são passados por referência ) agindo de forma destrutiva.
    > você pode passar o array com spread `:usuarios =[...usuarios]`
  - tente não mexer na referência

## DENTRO DO CORPO DO COMPONENTE - SLOT

- **sem nomear:** qualquer elemento será mostrado como slot

```html
<!-- componente pai -->
<Citacao>
  <h1>{{citacoes[indice].autor}}</h1>
  <p>{{citacoes[indice].texto}}</p>
  <h6>{{citacoes[indice].fonte}}</h6></Citacao
>
```

```html
<!-- componente filho -->
<template>
  <div class="citacao">
    <slot></slot>
  </div>
</template>
```

- **nomeado**: você nomeia cada item que irá aparecer no slot

```html
<!-- componente pai -->
<Citacao>
  <h1 slot="autor">{{citacoes[indice].autor}}</h1>
  <p slot="texto">{{citacoes[indice].texto}}</p>
  <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
</Citacao>
```

```html
<!-- componente filho -->
<template>
  <div class="citacao">
    <slot name="autor"></slot>
    <slot name="texto"></slot>
    <slot name="fonte"></slot>
  </div>
</template>
```

- **misto**: slot padrão com nomeados

```html
<!-- filho  -->
<template>
  <div class="citacao">
    <slot name="autor"></slot>
    <slot></slot>
    <slot name="fonte"></slot>
  </div>
</template>
```

- **duplicado**: dois slots nomeados iguais ou dois slots padrões

```html
<Citacao>
  <h1 slot="autor">Autor</h1>
  <h1 slot="autor">{{citacoes[indice].autor}}</h1>
  <p>Citação</p>
  <!--  slot sem nome -->
  <p>{{citacoes[indice].texto}}</p>
  <h6 slot="fonte">{{citacoes[indice].fonte}}</h6>
</Citacao>
```

## Evitar propagação pelo click

- muitas vezes podemos ter a situação de um evento de click dentro de um elemento que já tem um elemento de click como um span dentro de uma div
- utilizamos o **@click.stop** para evitar que isso ocorra

```html
<div class="task" :class="stateClass" @click="$emit('taskStateChanged',task)">
  <span @click.stop="$emit('taskDeleted',task)" class="close">x</span>
  <!--@click.stop serve para que não propague o evento para o taskStateChanged pois ele iria tentar mudar o status de um item que já foi excluido  -->
</div>
```
