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

* **Interpolaçao**

> Interpolação são variaveis dentro de  de \{{}} (double mustache) interpretadas pelo html.

* `<p>{{titulo}}</p>`: é interpretado o texto.  
* `<p>{{doThing()}}</p>`: é interpretado o função que **retorna string** (deve retornar string).
obs: acontece uma conversão para string nesse caso

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
