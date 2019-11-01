const express = require("express")
const router = express.Router()
const controller = require("../controllers/tarefasController")

router.get("/", controller.get)
router.get("/:id", controller.getById)
router.get("/tarefas/:nome/buscar", controller.getName)
router.get("/tarefas/:concluido/filtrar", controller.getConcluido)
router.get("/tarefas/filtrar/dataInclusao/buscar", controller.getDataInclusao)

module.exports = router