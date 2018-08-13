# Desafio Aktienow

## Stack

* nodejs 8+
* typescript 2.6 +
* express
* typeorm
* JWT (Json Web Tokens)
* Angular 4+
* Yarn

## Rodando os sistemas

### backend

Para rodar o backend precisa de instalar o yarn e instalar as dependências:
```
$ npm install -g yarn
$ yarn install
```

em seguida inicalize o sistema, tenha certeza que ele subiu na porta 3000 de localhost, é importante pois o front está com a url hardcoded:
```
$ yarn run watch
```

para rodar o banco configure pelo arquivo ormconfig.json:
```json
{
  "type": "mysql",
  "host": "database",
  "port": 3306,
  "username": "root",
  "password": "root",
  "database": "aktienow",
  "synchronize": true,
  "entities": [
    "src/model/*.ts"
  ]
}
```
atenção, não altera a opção entities.

Não é necessário possuir o schema do banco, pois a opção synchronize = true significa que o schema será criado automáticamente.

### Frontend
O nosso frontend é feito em Angular utilizando o anglular-cli, portanto para rodar é simples:

```
$ npm install
$ npm run start
```

### Endpoints do backend

* POST /login - rota de login do usuario comum
* POST /admin/login - rota de login do admin

* GET /livros - listegem de livros
* POST /livros - cadastro de livros
* GET /avaliacoes - listagem de avaliacoes
* POST /avaliacoes - cadastro de avaliacoes
* GET /avaliacoes - cadastro de avaliacoes
* POST /usuarios - cadastro de usuarios
* GET /livros/:id/estatisticas - estastiticas do livro
* Entre outras, mais informações no arquivo route.ts

### Endpoints frontend
* /
* /avaliacao
* /login
* /admin/login
* /admin

### arquitetura do backend
* rotas restful stateless usando JWT: ao fazer login nas rotas de login o client recebe um token que deve usar nas chamadas subsequentes. Esse token possui informações sobre o usuario de forma cripitografada.
* foram usados os express-jwt e o express-jwt-permissions para fazer autenticação e permissionamento das rotas
* TypeOrm: para garantir a consistencia da base de dado e simplicidade do código, foi usado o orm mais completo do ecosistema NodeJS, também para saber os dados a serem recebidos por cada rota observar as entidades
* Action Domain Responder: o conceito ADR foi utilizado, preferi também devido a simplicidade do problema usar o repositório diretamente nas actions, isso não é uma boa prática, mas no estilo micro serviço é até válido

### Arquitetura frontend
Foi usado angular em sua forma mais básica, com template driven forms e guards para guardar as rotas

### Docker
Existe na raiz do projeto um arquivo docker-compose.yml e um Dockerfile, que foram criados e apesar de não testados, podem ser usados como base para entender como subir o sistema.