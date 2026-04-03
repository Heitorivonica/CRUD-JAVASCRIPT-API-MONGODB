# 🚀 API de Usuários - CRUD completo com Node.js + Prisma + MongoDB

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

## 📖 O que é este projeto?

Este é um projeto **didático** que ensina como criar uma **API REST** completa para gerenciar usuários. 
Uma API é como um "garçom" que recebe pedidos (requisições) e traz respostas do servidor.

### O que significa CRUD?
**C**reate - Criar (cadastrar usuário)  
**R**ead - Ler (listar usuários)  
**U**pdate - Atualizar (editar usuário)  
**D**elete - Deletar (remover usuário)

## 🎯 Para que serve cada tecnologia?

| Tecnologia | O que faz? | Por que usamos? |
|------------|------------|-----------------|
| **Node.js** | Executa JavaScript no servidor | Permite criar backend com JavaScript |
| **Express** | Framework para Node.js | Facilita criar rotas e lidar com requisições |
| **Prisma** | ORM (Object Relational Mapping) | Conecta e gerencia o banco de dados de forma simples |
| **MongoDB** | Banco de dados NoSQL | Onde os dados dos usuários ficam salvos |

## 📋 Funcionalidades (explicadas)

### 1️⃣ Criar usuário (`POST /users`)
- **O que faz?** Cadastra um novo usuário no sistema
- **Precisa enviar:** Nome, email e idade
- **Exemplo:** Cadastrar "João" no sistema

### 2️⃣ Listar usuários (`GET /users`)
- **O que faz?** Mostra todos os usuários cadastrados
- **Precisa enviar:** Nada
- **Exemplo:** Ver todos os usuários do sistema

### 3️⃣ Atualizar usuário (`PUT /users/:id`)
- **O que faz?** Altera os dados de um usuário existente
- **Precisa enviar:** ID do usuário + novos dados
- **Exemplo:** Mudar a idade do João de 25 para 26

### 4️⃣ Deletar usuário (`DELETE /users/:id`)
- **O que faz?** Remove um usuário do sistema
- **Precisa enviar:** ID do usuário
- **Exemplo:** Apagar o cadastro do João

## 🛠️ Passo a passo para rodar o projeto

### 📌 Pré-requisitos (o que você precisa ter instalado)

```bash
# 1. Instalar Node.js (versão 14 ou superior)
👉 Acesse: https://nodejs.org/
👉 Baixe a versão LTS (recomendada para a maioria)

# 2. Instalar um editor de código (recomendo VSCode)
👉 Acesse: https://code.visualstudio.com/

# 3. Criar conta no MongoDB Atlas (banco de dados na nuvem)
👉 Acesse: https://www.mongodb.com/cloud/atlas
👉 Crie uma conta gratuita
👉 Crie um cluster (leva 1-2 minutos)
👉 Pegue a string de conexão (DATABASE_URL)

# 4. Instalar e configurar o Prisma (ORM para conectar ao banco)
👉 O Prisma é uma ferramenta que facilita a comunicação com o banco de dados
👉 Ele gera queries automaticamente sem precisar escrever SQL
# Instalar o Prisma
npm install prisma --save-dev

# Inicializar o Prisma no projeto
npx prisma init

# Isso cria duas coisas:
# - pasta prisma/ com arquivo schema.prisma (onde definimos os modelos)
# - arquivo .env (onde colocamos a DATABASE_URL)
