const tarefas = require("../model/tarefas.json")

exports.get = (req, res) => {
  console.log(req.url)
  res.status(200).send(tarefas)
}

exports.getById = (req, res) => {
  const id = req.params.id

  res.status(200).send(tarefas.find(tarefa => tarefa.id == id))
}

exports.getName = (req, res) => {
  const nome = req.params.nome
  res.status(200).send(tarefas.filter(tarefa => tarefa.nomeColaborador === nome))
}

exports.getConcluido = (req, res) => {
  const concluido = req.params.concluido
  res.status(200).send(tarefas.filter(tarefa => tarefa.concluido === concluido))
}