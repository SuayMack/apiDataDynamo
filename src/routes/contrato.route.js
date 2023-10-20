import express from 'express'
import { criarContrato, buscarTodosOsContratos, buscarUmContrato, editarContrato, deletarContrato } from '../controllers/contrato.controller.js'

const router = express.Router()

//rotas do usuário
router.post('/', criarContrato)
router.get('/',buscarTodosOsContratos)
router.get('/:id', buscarUmContrato)
router.patch('/:id', editarContrato)
router.delete('/:id', deletarContrato)

export default router