import express from 'express'
import { criarContrato, buscarTodosOsContratos, buscarUmContrato, editarContrato, deletarContrato } from '../controllers/contrato.controller.js'

const router = express.Router()

//rotas do usuário
router.get('/',buscarTodosOsContratos)
router.get('/:id', buscarUmContrato)
router.post('/criar', criarContrato)
router.put('/editar/:id', editarContrato)
router.delete('/delete/:id', deletarContrato)

export default router