# Vite-Calculator

Este projeto foi realizado com o intuito de compreender melhor os conceitos de desenvolvimento web em JavaScript, utilizando React.js para criar o frontend e Express.js com Node.js para criar o backend.

## Pré-requisitos
 - Node.js (versão X ou superior) - Download Node.js
 - npm ou yarn (vem junto com o Node.js) 

## Instalação
 - Clonar este repositório: git clone https://github.com/abiliaframboesa/Vite-calculator.git
 - Navegar até ao diretório do projeto: *cd Vite-calculator*
 - Instalar as dependências necessárias na pasta *client*: *npm install*, *npm i cors*
 - Instalar as dependências necessárias na pasta *server*: *npm init -y*, *npm i express*, *npm i nodemon -D*, *npm install axios*

## Uso 
### Backend
Iniciar o servidor backend (pasta server): *npm run dev*
  - Abrir o navegador e aceder: `http://localhost:8080/api`
### Frontent
Navegar até ao diretório do frontend (pasta client) e iniciar frontend: *npm run dev*
  - Abrir o navegador e aceder: `http://localhost:5173`.
### Backend + Frontend
- Certificar de que o backend e o frontend estão a correr simultaneamente.
- Aceder ao frontend pelo navegador em `http://localhost:5173`.
- O frontend comunicará automaticamente com o backend (API) em `http://localhost:8080/api`.

## Estrutura do Projeto

├── server/
│   ├── server.js         # Código do servidor
│   ├── package.json      # Dependências do backend
│
├── client/
│   ├── src/
│   │   ├── App.jsx       # Componente principal do React
│   │   ├── App.css       # Estrutura da App
│   │   ├── main.jsx      # Rotas
│   │   ├── router.jsx    # Caminhos para todos os componentes e páginas
│   │   ├── components/   # Componentes principais da aplicação: Calculator e BMICalculator com os respetivos ficheiros .jsx e .css
│   │   ├── routes/       # Estruturação dos componentes e respetivos links 
│   │   └── images/       # Imagens para caracterizar cada BMI
│   ├── .gitignore
│   └── package.json      # Dependências do frontend
│
└── README.md             # Este arquivo

## Dependências
 - Vite: Criação do frontend.
 - React: Criação do frontend.
 - Express: Framework para criar APIs.
 - Nodemon: Para fazer alterações automáticas no server.
 - CORS: Para permitir o acesso do frontend ao backend.
 - Axios: Biblioteca para requisições HTTP.

## Exemplo de Funcionamento
![HomePage](./client/src/images/homepage.jpg)
![BMI Calculator](./client/src/images/BMI.jpg)
![Calculator](./client/src/images/calculator.jpg)
