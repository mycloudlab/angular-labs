Laboratório para montagem de microfrontends

Quando lidamos com microfrontends é necessário estruturar diversos conceitos:

* como será a integração e compatilhamento de código?
* como será a resolução de dependencias?
* versionamento?
* appshell para montar a ui será como?

A ideia é dar liberdade para os times escolherem a tecnologia. entretanto é necessário uma fundação em algo sólido, pensando em continuidade a fundação deve ser web components.


Questões a serem respondidas:

* **Questão**: É possível carregar diferentes versões do angular em um mesmo aplicativo?
  
  **Ideia:** executar laboratório que cria um projeto que contém 5 subprojetos, dois desenvolvidos em angular 6 expondo webcomponents com tudo compilado dentro (um único bundle) , e outros 2 em angular 7 (um único bundle), e um appshell em html que combine todos os componentes na mesma visualização. No appshell será carregado apenas o polyfill para suporte aos webcomponents

  **Resultados alcançados:** Sim, é possível carregar diversos componentes angular como webcomponentes em versões diferentes.

  **trade-offs:** Os bundles gerados foram muito grandes, pois contém a aplicação inteira com suas dependências no bundle. O angular por exemplo foi carregado 4 vezes, duas vezes a versão 6 e duas vezes a versão 7. Uma possível solução para isso seria introduzir o compartilhamento do bundle gerado de forma que as dependências sejam gerenciadas no frontend de forma otimizada.

* **Questão**: Controle de dependências no frontend.

  **Ideia:**: Tentar combinar o recurso externals do webpack com o que o plugin DllPlugin do webpack. Montar um loader que a partir de uma definição de dependências possa fazer o carregamento correto do webcomponent.

  **Resultados alcançados:** Ainda em execução.

  **Trade-offs:** a catalogar.




