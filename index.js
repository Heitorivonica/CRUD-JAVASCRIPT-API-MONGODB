// Importa o framework Express para criar o servidor HTTP e gerenciar rotas
import express from 'express'

// Importa o cliente do Prisma para interagir com o banco de dados
import { PrismaClient } from '@prisma/client'

// Cria uma nova instância do cliente Prisma para fazer operações no banco de dados
const prisma = new PrismaClient()

// Cria a aplicação Express
const app = express()

// Middleware para parsear o corpo das requisições como JSON
app.use(express.json())


// Rota POST para criar um novo usuário
app.post('/users', async (req, res) => {
      // Cria um novo registro na tabela 'user' do banco de dados
      await  prisma.user.create({
            data:{
                email: req.body.email,        // Pega o email do corpo da requisição
                name: req.body.name,          // Pega o nome do corpo da requisição
                age: parseInt(req.body.age)   // Converte a idade para número inteiro
            }

        })
        // Retorna status 201 (Created) e os dados enviados na requisição
        res.status(201).json(req.body)

})



// Rota GET para listar todos os usuários
app.get('/users', async (req, res) => {
    // Busca todos os registros da tabela 'user'
    const users = await prisma.user.findMany()

    // Retorna status 200 (OK) com a lista de usuários em JSON
    res.status(200).json(users)
})

// Rota PUT para atualizar um usuário existente pelo ID
app.put('/users/:id', async (req, res) => {
     // Atualiza o registro com o ID especificado na URL
     await  prisma.user.update({
        where: {
            id: req.params.id      // Pega o ID dos parâmetros da URL
        },
            data:{
               email: req.body.email,      // Novo email do corpo da requisição
                name: req.body.name,       // Novo nome do corpo da requisição
                age: parseInt(req.body.age) // Nova idade convertida para inteiro
           }

       })

   // Retorna status 201 (Created) e os dados atualizados enviados na requisição
   res.status(201).json(req.body)

})

// Rota DELETE para remover um usuário pelo ID
app.delete('/users/:id', async(req, res) => {
    // Deleta o registro com o ID especificado na URL
    await prisma.user.delete({
        where: {
            id: req.params.id      // Pega o ID dos parâmetros da URL
        }
    })
    // Retorna status 200 (OK) com uma mensagem de confirmação
    res.status(200).json({message: "usuario deletado!"})
}),

// Inicia o servidor na porta 3000
app.listen(3000)