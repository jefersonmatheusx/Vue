# Vue

* **Iniciando O Vue**

 ```js
new Vue({})
 ```

* **Estrutura do Vue**

```js
new Vue({
    el: '#id' ,//elemento 
    data:{// objeto de dados para o html 
        foo: "bar"
    },
    computed:{
        // metodos que não são chamados como função em sem html 
        // Usado para qualquer lógica mais complexa dentro do template
    }
    methods:{//metodos que serão executados
        foo2(){// ou foo2: function()
            return bar
        }
    }
})
```

>obs: não é aceito nomes duplicados de data para uma função em methods por exemplo (não pode haver conflitos):

```js
 data:{
        titulo: "bar"
    },
    methods:{
        titulo(){
            return bar
        }
    }
```


* **Computed** 

Dados computados ou computed properties no inglês, traduzidos como “dados” pois, durante a utilização em templates, se parecem efetivamente com propriedades definidas em data)

Dá para se pensar em Computed Properties como propriedades onde se definem apenas os getters (e opcionalmente, setters) para algo. Não há um valor registrado na propriedade, e sim uma função getter que pode ou não busca o valor desejado em outros lugares. Uma das vantagens de usar Computed Properties no Vue.JS é que o Vue faz cache do resultado do getter, e invalida a cache caso as dependências do getter sejam alteradas.

> **Minhas considerações sobre:**  Quando acontece qualquer mudança no template, existindo um bind {{funcaoX()}} no html, mesmo que a mudança não afete a funcaoX, a funcaoX será executada. 

* **Cache de computed vs. Métodos**
Podemos sempre obter o mesmo resultado chamando um método ao ivés de um computado. No entanto a diferença é que dados computados são cacheados de acordo com suas dependências reativas.

Um dado computado somente será reavaliado quando alguma de suas dependências for alterada.

* **Interpolaçao**

> Interpolação são variaveis dentro de  de \{{}} (double mustache) interpretadas pelo html.

* `<p>{{titulo}}</p>`: é interpretado o texto.  
* `<p>{{doThing()}}</p>`: é interpretado o função que **retorna string** (deve retornar string).
obs: acontece uma conversão para string nesse caso
* `<p>{{contador * 2}}</p>` : Pode acontecer calculos e processamentos simples de dados dentro de um bind, até mesmo condicional `<p>{{contador > 0 ? "maior": "menor"}}</p>`

* Interpolação não costuma funcionar dentro de atributos de tags, como por exemplo o **href** de uma tag `<a>`. Para isso deve ser utilizado o **v-bind:href=**.
* **Usando o _this_**

O **this** no contexto do Vue.js representa a própria instância do Bue

 Para acessar um dado de **data** dentro do **methods** por exemplo, será necessário o uso do **this**:

```js
this.foo; // não precisa utilizar o data
```

## Manipulação do DOM

### Diretivas  

> Diretivas são acessadas em nosso html pelo Vue, normalmente começam com a letra *V-*. Cada uma tem uma respectiva utilidade.

* **v-once:** O valor interpolado será lido uma única vez, e não irá ser monitorado em caso de alteração deste dado.

* **v-html:** Utilizado para interpretar variaveis que possuam um html. (é até uma medida de segurança do vue não permitir que elementos html seja introduzidos ao código sem essa diretiva )

  
```html
<p v-html="linkHtml"></p>
```

> Existe um ataque: chamado **XSS (cROSS-SITE sCRIPTING)**, que é quando um usuário insere um script malicioso dentro de um campo de entrada e o site interpreta e executa esse código.

* **v-bind:[propriedade]=:**  Utilizado para fazer o bind do Vue criando uma propriedade dentro de alguma tag html.

  
```html
<a v-bind:href="link">Google</a>
```  

Ou  

```html
<a v-bind:teste="link">Google</a>
```

* **v-on:[evento]:**  Representa um evento específico, espera um evento (como click, hover, keypress etc.)
 
```html
 <button v-on:click="somar">Somar 1</button>
```

> Todo evento envia um parametro de evento. Por exemplo no clique existe o MouseEvent sendo enviado. Bem como você pode passar seus próprios parametros, isso fará com que o evento não seja passado automaticamente, logo você deve passar o evento **$event** para que o Vue interprete esse parâmetro.
>
> ```html
> <button v-on:click="somar(5,$event)">Somar 1</button>
>  ```

#### Eventos e seus modificadore

alguns eventos utilizados no **v-on** podem ser modificados facilmente no próprio html. 

- mouse
  - .stop: impede a propagação do movimento;
- click
  - .prevent: age como o preventDefault
- keyUp
  - .[tecla] : .enter por exemplo
    - .[tecla].[tecla] :  concatenar várias teclas, enter.alt por exemplo alt+enter

* **v-model:** Faz o "Two Way Data Bind" 
  
  ```html
  <!-- EM VEZ DISSO... <input type="text" v-bind:value="titulo"
        v-on:input='titulo = $event.target.value'> 
        FAZEMOS ISSO -->
    <input type="text" v-model="titulo"/>
  ```