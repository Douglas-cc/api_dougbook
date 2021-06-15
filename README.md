## Desafio Estagio Tributei

## Instruções

Implemente uma API [node.js](https://nodejs.org) no padrão `RESTful` que possibilite a criação e listagem de posts e comentários.
Sendo que cada comentário devem pertencer a um post.

## Tecnologias Usadas:

- Typescript 
- NodeJs
- express
- Typeorm
- Postgresql

## Estrutura do Banco de Dados

<br><br>
![banco](https://nave-challenges.s3.amazonaws.com/Back-End-Interniship/Screenshot.png)

## Execução do Projeto  

1º - Tenha o postgres instalado ou um container Docker

2º - Configure a ormconfig.json que esta na raiz do projeto com username, password, porta do seu banco de dados
em seguida rode as migrations:

-> yarn typeorm migrations:run 

3º - Instale as dependecias do seu projeto:

-> yarn install

4º -  E por fim execute o Projeto 

-> yarn dev

### Referências:

- Documentação do Typeorm: https://typeorm.io/#/
- Review do projeto: https://www.youtube.com/watch?v=EJEMdy-uKdM
