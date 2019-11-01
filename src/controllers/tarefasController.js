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
  //req.params.concluido se refere ao nome da rota definida em tarefasRoute
  const tarefasConcluidas = req.params.concluido
  //tarefas.concluido se refere à chave "concluido" definido na API tarefas.json
  res.status(200).send(tarefas.filter(tarefa => tarefa.concluido === tarefasConcluidas))
}

exports.getDataInclusao = (req, res) => {
  
  // const data = tarefas.dataInclusa
  const data = tarefas.sort(function(a, b){
    let aa = a.dataInclusao.split('/').reverse().join(),
        bb = b.dataInclusao.split('/').reverse().join();
    return (aa < bb ? -1 : (aa > bb ? 1 : 0));
})
res.status(200).send(data)
}
