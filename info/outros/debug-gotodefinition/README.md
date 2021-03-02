# go to definition e reconhecer o Alias @

Os arquivos importantes são:

- settings.json
- .eslintrc.js
- babel.config.js
- jsconfig.json ou tsconfig.json

1.  instale o vetur
2.  instale o vue VS code Extension (da sarah.drasner)
3.  Mova os arquivos desta pasta para a raiz do projeto (bem como o .vscode) ou substitua as partes que estão nos mesmos (para não perder suas configurações prévias)
4.  Nas configurações do vscode procure pelas configurações e modifique para (também presentes em .vscode/settings.json:
    "debug.javascript.usePreview": false,
    "vetur.experimental.templateInterpolationService": true,

5.  instale
    "eslint-import-resolver-alias": "^1.1.2",
    "eslint-plugin-import": "^2.22.1",

        normalmente o go to definition para outros arquivos .vue necessita que não se omita o .vue ao importar (graças ao vetur)

        ```js
        // import TaskGrid from "@/components/TaskGrid"; não funciona com o vetur
        import TaskGrid from "@/components/TaskGrid.vue";

        ```
        Porém podemos instalar o plugin do vscode
        **peek definition**

6.  instale o plugin **peek-definition**

# função de debug

1. Instale o DEBUG FOR CHROME ou DEBUG FOR FIREFOX
   copie (ou adapte) os arquivos ao seu projeto vue:

- launch.json
- vue.config.js


> Após fazer o processo, reinicie seu projeto  
> * Você também pode instalar uma instenção chamada Reload, que faz isso para você ela só restarta seu vscode. 