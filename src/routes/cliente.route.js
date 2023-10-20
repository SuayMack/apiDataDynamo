import express from 'express'
import { criarCliente, buscarTodosOsClientes, buscarUmCliente, editarCliente, deletarCliente } from '../controllers/cliente.controller.js'

const router = express.Router()

//rotas do usuário
router.post('/', criarCliente)
router.get('/',buscarTodosOsClientes)
router.get('/:id', buscarUmCliente)
router.patch('/:id', editarCliente)
router.delete('/:id', deletarCliente)

export default router