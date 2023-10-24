import express from 'express'
import { criarCliente, buscarTodosOsClientes, buscarUmCliente, editarCliente, deletarCliente} from '../controllers/cliente.controller.js'

const router = express.Router()

//rotas do usuário
router.get('/',buscarTodosOsClientes)
router.get('/:id', buscarUmCliente)
router.post('/criar', criarCliente)
router.put('/edit/:id', editarCliente)
router.delete('/delete/:id', deletarCliente)

export default router