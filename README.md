# 📚 CRUD de Livros e Autores

Este projeto de front-end para desenvolver um **CRUD de livros e autores** utilizando React, Vite e TypeScript. O sistema permite a criação, visualização e exclusão de livros e autores. Ele utiliza o **JSON-Server** para simular uma API RESTful e armazena os dados em um arquivo JSON mockado (`DadosMock.json`).

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construir interfaces de usuário.
- **Vite**: Ferramenta de build rápida e moderna para projetos front-end.
- **TypeScript**: Superset do JavaScript, adicionando tipagem estática ao código.
- **Styled Components**: Biblioteca para escrever CSS dentro do JavaScript, permitindo criar componentes estilizados.
- **React Hook Form**: Biblioteca para facilitar o gerenciamento de formulários.
- **JSON-Server**: Simula uma API RESTful utilizando um arquivo JSON como banco de dados.

---

## ✨ Funcionalidades

- **CRUD para Livros**: Permite criar, listar e excluir livros.
- **CRUD para Autores**: Permite criar, listar e excluir autores.
- **Interface Responsiva**: O projeto é responsivo e funciona bem em dispositivos móveis.
- **Formulários com Validação**: Utiliza React Hook Form para gerenciar e validar os formulários.
- **Armazenamento de Dados**: Os dados são armazenados em um arquivo `DadosMock.json` utilizando o JSON-Server.

---

## 📋 Pré-requisitos

Antes de rodar o projeto, você precisa ter as seguintes ferramentas instaladas na sua máquina:

- **Node.js**: Para rodar o ambiente de desenvolvimento.
- **npm** ou **yarn**: Gerenciadores de pacotes.

---

## 🚀 Como Rodar o Projeto

Siga as etapas abaixo para rodar o projeto localmente.

### 1. Clone o Repositório

git clone https://github.com/Joao1799/Crud-livros-autores


### 2. Instale as Dependências
Navegue até a pasta do projeto e instale as dependências necessárias com o npm ou yarn:

cd Crud-livros-autores 

npm install

Ou, caso esteja usando o yarn:

yarn install
### 3. Inicie o JSON-Server
O JSON-Server é utilizado para simular uma API. Para rodá-lo, execute o comando abaixo, que irá iniciar um servidor local em http://localhost:3001:

json-server --watch DadosMock.json --port 3001

Esse comando irá "assistir" o arquivo DadosMock.json e simular um servidor com as rotas RESTful para os dados de livros e autores.

### 4. Inicie o Projeto React
Agora, inicie o projeto React com Vite:

npm run dev

Ou, caso esteja usando o yarn:

yarn dev

Após isso, abra o navegador e acesse http://localhost:3000 para visualizar o projeto em funcionamento.

### 5. Acesse a API
A API mockada criada pelo JSON-Server estará disponível em http://localhost:3001. Ela expõe as seguintes rotas:

GET /livros: Lista todos os livros.

POST /livros: Cria um novo livro.

DELETE /livros/{id}: Exclui um livro.

GET /autores: Lista todos os autores.

POST /autores: Cria um novo autor.

DELETE /autores/{id}: Exclui um autor.


### 🤝 Contribuições
Contribuições são bem-vindas! Se você quiser contribuir com este projeto, siga as etapas abaixo:

Faça um fork deste repositório.

Crie uma nova branch (git checkout -b master).

Faça suas alterações.

Faça o commit das suas alterações (git commit -am 'Adiciona nova funcionalidade').

Faça o push da sua branch (git push origin master).

Abra um Pull Request.

### 📜 Licença
Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.