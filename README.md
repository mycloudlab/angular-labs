# Laboratório para montagem de microfrontends

Quando lidamos com microfrontends é necessário estruturar diversos conceitos:

* como será a integração e compatilhamento de código?
* como será a resolução de dependencias?
* versionamento?
* appshell para montar a ui será como?

A ideia é dar liberdade para os times escolherem a tecnologia. entretanto é necessário uma fundação em algo sólido, pensando em continuidade a fundação deve ser web components.


## Questões a serem respondidas:

* **Questão**: É possível carregar diferentes versões do angular em um mesmo aplicativo?
  
  **Ideia:** executar laboratório que cria um projeto que contém 5 subprojetos, dois desenvolvidos em angular 6 expondo webcomponents com tudo compilado dentro (um único bundle) , e outros 2 em angular 7 (um único bundle), e um appshell em html que combine todos os componentes na mesma visualização. No appshell será carregado apenas o polyfill para suporte aos webcomponents

  **Resultados alcançados:** Sim, no projeto [mixed-webcomponents](mixed-webcomponents) é demonstrado a ideia. Lá podemos ver que é possível carregar diversos componentes angular como webcomponentes em versões diferentes.

  **trade-offs:** Os bundles gerados foram muito grandes, pois contém a aplicação inteira com suas dependências no bundle. O angular por exemplo foi carregado 4 vezes, duas vezes a versão 6 e duas vezes a versão 7. Uma possível solução para isso seria introduzir o compartilhamento do bundle gerado de forma que as dependências sejam gerenciadas no frontend de forma otimizada.

* **Questão**: Controle de dependências no frontend.

  **Ideia:** Tentar combinar o recurso externals do webpack com o que o plugin DllPlugin do webpack. Montar um loader que a partir de uma definição de dependências possa fazer o carregamento correto do webcomponent.

  **Resultados alcançados:** Foi possivel usar o dll-plugin, isso otimizou o tempo de build e a aplicação funcionou como se fosse uma dll, o modulo é carregado e é possivel compartilhar entre aplicações, o experimento foi feito nos projetos [webpack-dll-plugin](webpack-dll-plugin) e [webpack-dll-plugin-angular-elements](webpack-dll-plugin-angular-elements). 

  **Trade-offs:** o problema é fazer o carregamento unificado, não foi possível combinar em um unico source o bundle.

  * **Questão:** é possível usar a tecnologia de webcomponents para o carregamento de microfrontends?
  
    **Ideia:** demonstrar o uso do carregamento de mini aplicações com diversas versões do angular e um appshell, nesse experimento tentar demonstrar como pode ser feito o empacotamento e building de aplicações juntamente com o controle das dependências compartilhadas.

    **Resultados alcançados:** A definir

    **trade-offs:** A definir





## Links Úteis

https://www.youtube.com/watch?v=BuRB3djraeM

