## Componente dinâmico

renderizar determinado componente de forma dinâmica

- usa-se o elemento component acompanhado do `:is="[componente]"`
  - o compoente referenciado deve ter sido importado no arquivo

```html
<component :is="componente" />
```

- como o componente é sempre renderizado ele sempre será criado novamente (do estado inicial) ao entrar
  - metodos: created (quando criado) ou destroyed(quando sair)

### keep-alive

- para mudar o comportamento de renderização você deve envolver o elemento **component** com o elemento **keep-alive**

  ```html
  <keep-alive>
    <component :is="componente" />
  </keep-alive>
  ```

### Ciclo de vida de um componente dinâmico

de acordo com o que for passado o ciclo de vida do componente será diferente, se aplicando para os filhos deste componente dinâmico também

- **com keep-alive** :
  - activated
  - deactivated
- **sem keep-alive**
  - created
  - destroyed
