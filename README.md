# 🏥 Passagem de Plantão

Sistema web desenvolvido para facilitar o **registro, organização e consulta de informações durante a passagem de plantão**, centralizando os dados em uma aplicação moderna e de fácil utilização.

A aplicação possui uma arquitetura separada entre **frontend** e **backend**, permitindo maior organização, manutenção e escalabilidade do projeto.

## ✨ Funcionalidades

* 🔐 Autenticação e controle de acesso
* 👤 Gerenciamento de usuários
* 📋 Registro de informações de plantão
* 🔎 Consulta e organização dos registros
* 🔒 Rotas protegidas por autenticação
* 📄 Geração de documentos em PDF
* 🌐 Comunicação entre frontend e API REST
* 🗄️ Persistência de dados em banco de dados
* 📱 Interface web responsiva

## 🛠️ Tecnologias utilizadas

### Frontend

* [React](https://react.dev/)
* React Router
* Material UI (MUI)
* React Hook Form
* Yup
* Axios
* PDFMake
* JavaScript

O frontend está localizado em:

```text
front/passagem-plantao/
```

A estrutura utiliza componentes, páginas, contextos, rotas, serviços e utilitários, facilitando a separação de responsabilidades.

### Backend

* Node.js
* Express
* Sequelize
* JWT
* Bcrypt
* CORS
* Dotenv
* PostgreSQL
* MySQL

O backend está localizado em:

```text
back/
```

A API possui uma organização baseada em:

```text
back/
├── config/
├── controllers/
├── middlewares/
├── migrations/
├── models/
├── routes/
├── seeders/
└── index.js
```

Essa estrutura separa responsabilidades entre configuração, regras de negócio, autenticação, modelos, rotas e banco de dados.

## 🏗️ Arquitetura

```text
┌──────────────────────────────┐
│           Frontend           │
│        React + MUI           │
│                              │
│ Components / Pages / Routes  │
│ Context / Services / Utils   │
└──────────────┬───────────────┘
               │
               │ HTTP / REST API
               ▼
┌──────────────────────────────┐
│           Backend            │
│       Node.js + Express      │
│                              │
│ Routes / Controllers         │
│ Middleware / Models          │
└──────────────┬───────────────┘
               │
               │ Sequelize
               ▼
┌──────────────────────────────┐
│          Database            │
│       PostgreSQL/MySQL       │
└──────────────────────────────┘
```

O backend utiliza Express para disponibilizar a API e possui rotas públicas e privadas. As rotas privadas são protegidas por middleware de validação de token.

## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

* Node.js
* npm
* PostgreSQL ou MySQL
* Git

### 1. Clone o repositório

```bash
git clone https://github.com/Erick-Garantizado/passagem-plantao.git
```

Entre na pasta:

```bash
cd passagem-plantao
```

---

## ⚙️ Configurando o Backend

Entre na pasta do backend:

```bash
cd back
```

Instale as dependências:

```bash
npm install
```

Crie o arquivo `.env` baseado no exemplo disponível:

```bash
cp .env.example .env
```

Configure no `.env` as informações necessárias para conexão com o banco de dados e demais variáveis utilizadas pela aplicação.

Depois, execute as migrations:

```bash
npx sequelize-cli db:migrate
```

Caso o projeto utilize seeders:

```bash
npx sequelize-cli db:seed:all
```

Para iniciar o servidor em desenvolvimento:

```bash
npm run dev
```

Ou, para iniciar normalmente:

```bash
npm start
```

Por padrão, a API utiliza a porta `3001`, podendo ser alterada através da variável `PORT`.

---

## 💻 Configurando o Frontend

Em outro terminal, entre na pasta:

```bash
cd front/passagem-plantao
```

Instale as dependências:

```bash
npm install
```

Configure o arquivo `.env` conforme o `.env.example` disponível no projeto.

Execute a aplicação:

```bash
npm start
```

O frontend será iniciado pelo Create React App e ficará disponível localmente para acesso pelo navegador.

## 📁 Estrutura do projeto

```text
passagem-plantao/
│
├── back/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── migrations/
│   ├── models/
│   ├── routes/
│   ├── seeders/
│   ├── .env.example
│   ├── index.js
│   └── package.json
│
├── front/
│   └── passagem-plantao/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── context/
│       │   ├── pages/
│       │   ├── routes/
│       │   ├── services/
│       │   ├── utils/
│       │   ├── index.css
│       │   └── index.js
│       ├── .env.example
│       └── package.json
│
└── .gitignore
```

## 🔐 Autenticação

A aplicação utiliza **JSON Web Token (JWT)** para autenticação.

O fluxo funciona de forma semelhante a:

```text
Usuário
   │
   │ Login
   ▼
API
   │
   │ Validação das credenciais
   ▼
JWT
   │
   │ Token enviado nas requisições
   ▼
Middleware de autenticação
   │
   ├── Token válido ──► Acesso à rota
   │
   └── Token inválido ─► Acesso negado
```

As rotas relacionadas ao plantão são protegidas por middleware de validação de token no backend.

## 📄 Geração de PDF

O frontend possui integração com **PDFMake**, permitindo a geração de documentos PDF a partir das informações cadastradas no sistema.

## 🧪 Testes

Para executar os testes do frontend:

```bash
npm test
```

O projeto possui configuração para testes utilizando Testing Library.

No backend, atualmente o script de teste padrão ainda não possui testes automatizados implementados.

## 🔧 Scripts disponíveis

### Backend

```bash
npm run dev
```

Inicia o servidor utilizando Nodemon.

```bash
npm start
```

Inicia o servidor normalmente.

```bash
npm run prod
```

Executa o servidor utilizando a configuração de produção definida no projeto.

### Frontend

```bash
npm start
```

Inicia o ambiente de desenvolvimento.

```bash
npm run build
```

Gera a versão de produção.

```bash
npm test
```

Executa os testes.

## 🌐 Deploy

O backend foi estruturado para funcionar como uma API independente do frontend.

O frontend pode ser hospedado separadamente em serviços de hospedagem para aplicações React.

A configuração atual do backend já contempla comunicação com ambiente local e com uma aplicação frontend hospedada na Vercel.

## 📌 Status do projeto

🚧 **Em desenvolvimento**

O projeto continua em evolução e pode receber novas funcionalidades, melhorias de interface, otimizações e novos recursos para gerenciamento dos plantões.

## 🤝 Contribuindo

Contribuições são bem-vindas!

Para contribuir:

```bash
# Faça um fork do projeto

# Clone seu fork
git clone https://github.com/SEU-USUARIO/passagem-plantao.git

# Crie uma branch
git checkout -b minha-feature

# Faça suas alterações

# Commit
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Envie para o GitHub
git push origin minha-feature
```

Depois, abra uma **Pull Request** no GitHub.

O fluxo de fork, branch e Pull Request é o fluxo recomendado pelo GitHub para colaboração em projetos.


## 👨‍💻 Autor

**Erick Garantizado**
