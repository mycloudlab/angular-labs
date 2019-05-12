# WebpackDllPlugin

A ideia desse repositório é fazer a experimentação da ddlPlugin, entratanto de uma forma mais avançada, com multiplas bibliotecas que podem ser servidas em outros servidores.

Essa experimentação é para montar uma forma de o webpack extrair bibliotecas de forma facilitada.

No arquivo library.webpack.js a variável libraries, informa que bibliotecas serão colocadas como libraries, a ordem é importante, pois define a sequência das dependências. 

As bibliotecas não são automaticamente adicionadas ao index.html.


## Executando

Para executar o laboratório execute o build das bibliotecas e depois do programa:

```bash
npm run build:library
npm start
```

