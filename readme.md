# Doa Já

<!-- # Parte do Neres -->


# Objetivo do Projeto

**Doa Já** é uma plataforma web de doação de objetos desenvolvida como
projeto acadêmico. O objetivo do sistema é facilitar a conexão entre
pessoas que desejam doar itens que não utilizam mais e pessoas que
precisam desses itens.

A aplicação permite que usuários publiquem objetos para doação,
visualizem itens disponíveis e manifestem interesse em receber
determinados itens.


<!-- # Parte do Neres -->
------------------------------------------------------------------------

# Tecnologias Utilizadas

O sistema foi desenvolvido utilizando uma stack simples para facilitar a
compreensão da arquitetura e do funcionamento da aplicação.

## Backend

-   Python

## Banco de Dados

-   SQLite

## Frontend

-   HTML
-   CSS
-   JavaScript

------------------------------------------------------------------------

# Estrutura do Projeto

    doa-ja/
    │
    ├── app/
    │   ├── main.py
    │   │
    │   ├── routes/
    │   │   ├── home_routes.py
    │   │   ├── auth_routes.py
    │   │   ├── item_routes.py
    │   │   ├── request_routes.py
    │   │   └── admin_routes.py
    │   │
    │   ├── controllers/
    │   │   ├── auth_controller.py
    │   │   ├── item_controller.py
    │   │   ├── request_controller.py
    │   │   └── admin_controller.py
    │   │
    │   ├── models/
    │   │   ├── user_model.py
    │   │   ├── item_model.py
    │   │   ├── donation_request_model.py
    │   │   └── admin_model.py
    │   │
    │   ├── services/
    │   │   ├── auth_service.py
    │   │   ├── item_service.py
    │   │   ├── request_service.py
    │   │   └── admin_service.py
    │   │
    │   ├── database/
    │   │   ├── connection.py
    │   │   └── doa_ja.db
    │   │
    │   ├── templates/
    │   │   ├── base.html
    │   │   ├── index.html
    │   │   ├── login.html
    │   │   ├── register.html
    │   │   ├── dashboard.html
    │   │   ├── create_item.html
    │   │   ├── item_list.html
    │   │   ├── item_detail.html
    │   │   ├── my_items.html
    │   │   ├── my_requests.html
    │   │   │
    │   │   └── admin/
    │   │       ├── admin_dashboard.html
    │   │       ├── admin_users.html
    │   │       ├── admin_items.html
    │   │       └── admin_requests.html
    │   │
    │   ├── static/
    │   │   ├── css/
    │   │   ├── js/
    │   │   └── img/
    │   │
    │   └── utils/
    │       ├── validators.py
    │       ├── helpers.py
    │       └── security.py
    │
    ├── docs/
    │   ├── fluxo-do-sistema.md
    │   ├── regras-de-negocio.md
    │   └── diagramas.md
    │
    ├── requirements.txt
    ├── run.py
    └── README.md

------------------------------------------------------------------------

# Funcionalidades Principais

## Usuário

-   Cadastro de conta
-   Login no sistema
-   Visualização de itens disponíveis
-   Solicitação de interesse em um item

## Doador

-   Publicação de itens para doação
-   Edição de itens publicados
-   Remoção de itens
-   Visualização de solicitações recebidas

## Sistema

-   Listagem de itens disponíveis
-   Filtro por categoria
-   Visualização de detalhes do item
-   Gerenciamento de status da doação

Status possíveis de um item:

-   Disponível
-   Reservado
-   Doado

------------------------------------------------------------------------

# Painel Administrativo

O sistema possui um painel administrativo simples que permite acompanhar
o funcionamento da plataforma.

Funcionalidades do administrador:

-   Visualizar usuários cadastrados
-   Visualizar itens publicados
-   Gerenciar anúncios
-   Acompanhar solicitações de doação
-   Visualizar estatísticas gerais da plataforma

------------------------------------------------------------------------

# Fluxo Básico do Sistema

1.  Usuário cria uma conta.
2.  Usuário faz login.
3.  Usuário publica um item para doação.
4.  Outros usuários visualizam os itens disponíveis.
5.  Um usuário demonstra interesse no item.
6.  O doador analisa as solicitações.
7.  O doador aceita ou recusa o pedido.
8.  Após a entrega do item, a doação é marcada como concluída.

------------------------------------------------------------------------

# Possíveis Evoluções do Sistema

Para versões futuras do projeto, podem ser implementadas melhorias como:

-   Sistema de mensagens entre usuários
-   Upload de múltiplas imagens por item
-   Sistema de notificações
-   Busca por localização
-   Aplicação mobile

------------------------------------------------------------------------

# Observação

Este projeto foi desenvolvido com fins educacionais, com foco na
compreensão da arquitetura de sistemas web, organização de código e
implementação de funcionalidades básicas de uma aplicação completa.
