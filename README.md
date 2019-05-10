Laboratório para montagem de microfrontends


a ideia é usar um appshell para montar a ui em tempo real

entretanto dando liberdade para o time escolher a tecnologia, desde que fundamentada em web components.


entretanto para os pacotes serem pequenos , faremos o pacote sem as bibliotecas dependentes. usamos  o recurso de externals do webpack para produzir um bundle sem as dependencias, deverá ser criado um manifesto que contém as dependencias da library, de forma que antes do webcomponent ser carregado teremos um loader que resolve as dependencias e importa o pacote.

trata-se de uma versão inicial 



Questões a serem respondidas:

- É possível carregar diferentes versões do angular em um mesmo aplicativo?
    proposta de laboratório, criar um projeto que contém 5 subprojetos, dois desenvolvidos em angular 6 expondo webcomponents com tudo compilado dentro, e outros 2 em angular 7, e um appshell que combine todos os componentes ao mesmo tempo, no appshell deve haver carregado apenas o polyfill para suporte aos webcomponents


