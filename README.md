<div align="center">
  <h1>Blogs-Api</h1>
</div>

## Descrição

Este projeto é uma aplicação backend desenvolvida em arquitetura em camadas, para gerenciar blogs e seus posts com operações CRUD (Criar, Ler, Atualizar, Excluir).

### 📐 Arquitetura baseada em camadas

Dentro do contexto de uma API REST com uma arquitetura em camadas, cada componente desempenha um papel crucial para garantir a organização, manutenção e escalabilidade do aplicativo.

Camadas desenvolvidas:

* Routes:
Rotas definem URLs e métodos HTTP para acessar recursos na API. Cada rota está vinculada a uma função controladora que processa as solicitações.

* Middlewares:
Middlewares são funções intermediárias que processam solicitações HTTP antes de chegarem às funções controladoras. Eles podem lidar com tarefas como autenticação, validação e pré-processamento.

* Controllers:
Controladores gerenciam a lógica de negócios da API. Eles recebem solicitações, interagem com serviços e enviam respostas aos clientes, geralmente chamando serviços para operações CRUD.

* Services:
Serviços encapsulam a lógica de negócios da aplicação, realizando operações específicas relacionadas a recursos. Eles abstraem o acesso a dados e processamento, mantendo os controladores mais enxutos.

* Model:
Modelos definem a estrutura dos dados da aplicação e são frequentemente usados com ORM para acessar o banco de dados. Eles fornecem uma camada de abstração para garantir a consistência dos dados.

## ORM
O uso do ORM Sequelize simplifica a interação com bancos de dados relacionais de forma mais segura e performática, abstraindo a complexidade do SQL em aplicativos Node.js.

## 💻 Tecnologias usadas

  * NodeJS

  * Express
    
  * Sequelize

  * Nodemon

  * JavaScript

  * MYSQL

  * Docker

## 🐋 Rodando o projeto com Docker
Para rodar o projeto utilizando docker, no diretório da aplicação execute o comando:

`docker-compose up -d`

