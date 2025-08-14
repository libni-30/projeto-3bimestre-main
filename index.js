import express from 'express'

const app = express()
const PORT = 3000

let usuarios = [];
let contador = 1;

app.use(express.json())

//ROTA DE TESTE
app.get("/status", (req, res) => {
  res.json({message: "API Online"})
})

//ROTA GET Listar todos os itens
app.get("/usuarios", (req,res)=>{
  res.json(usuarios)
});

//ROTA POST Criar novo usuário
app.post("/usuarios",(req,res)=>{
  const {name} =req.body;

  const novoUsuario = {
    id:contador++,
    nome
  };

  usuarios.push(novoUsuario);
  res.status(201).json(novoUsuario);
});

//ROTA PUT Atualiza usuario por ID
app.put("/ub=suarios/:id", (req,res)=>{
  const id = parseInt(req.parames.id)
  const {nome} = req.body

  const usuario = usuarios.find((i) => i.id ===id);

  if(!usuario) {
    return res.status(404).json({ erro: "Usuário não encontrado"});
  }

  usuario.nome = nome;
  res.json(usuario);
});



app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
});