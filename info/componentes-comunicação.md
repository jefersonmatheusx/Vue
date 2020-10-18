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
    - type: tipo da variavel. Obriga a passar o tipo correto
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

## Observações

- propriedades são case sensitive entre o html e o js
  - se props: ['Nome'] ..... :nome="variável" **não será aceito**
