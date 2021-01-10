
# Vue Client

- Ambiemte de Dev e Build Configurados
- Compila os componentes em um único arquivo
- Pré-processadores - ex: sass
- plugins e dependências
- servidor local
- entre outras vantagens

## Fluxo inicial do Vue - comandos básicos 
 instalação (get start)
- **vue create [nome_do_projeto]**
  - Usar preset ou usar uma configuração personalizada (adicionando plugins ) podendo salva-lo como preset e usar ele outra vez.
- Desenvolvimento e Build
- Adicionar Plugins
  -** vue add @vue/nome-plugin**
- Rodar projeto 
  - **npm run serve**

## Estrutura

### pasta index.html

- É a unica pasta **html** no projeto e é nela que será injetado toda a aplicação

### main.js

- Nela é instanciado o objeto Vue

```js
new Vue({
  render: (h) => h(App),
}).$mount('#app')
```

> poderia ser feito também como abaixo

```js
new Vue({
  el: '#app',
  render: (h) => h(App),
})
```

## utilização de pastas 

--src
  |__components
  | |_templates --> funcionalidades associadas ao template geral da aplicação
  | |_widgets --> itens que podem ser usadas em várias funcionalidades 
  | |_user --> components relacionados a usuário
  |__views --> telas completas que utilizam componentes 
  |__plugins --> plugins utilizados

## Caminho global (Alias)

- o **@** sgnifica **src**  que é o nosso caminho global 
  - utilizado para nossas importações para não precisar utilizar a referencia de pontos (., ..)

## Documentações

[sobre o arquivo ".vue"](https://br.vuejs.org/v2/guide/single-file-components.html)

[sobre o método render()](https://br.vuejs.org/v2/guide/render-function.html)

[Vue CLI](https://cli.vuejs.org/)
