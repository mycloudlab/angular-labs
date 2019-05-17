# CRUD microservice

Este projeto tem a finalidade de expor um serviço no formato crud básico, o sistema permite criar de forma configurável na inicialização.

A ideia para a demo é suportar operações crud para 4 entidades: discentes, bolsas, producao, informacoes-financeiras.

O projeto cria endpoints rest para crud:

* GET /<entity> - retorna uma lista da entidade, é permitido a filtragem pela passagem do parametro where. exemplo: /<entity>?where={"id": { "$eq": "1"}}
* POST /<entity> - efetua o salvamento da entidade
* GET /<entity>/:id - recupera uma entidade pelo ID
* PUT /<entity>/:id - atualiza a entidade pelo ID
* DELETE /<entity>/:id - remove uma entidade pelo ID


# iniciando o projeto
