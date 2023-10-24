import express from 'express'
import { autenticarPorEmail, buscarTodosOsLogins, buscarUmLogin, criarLogin, deletarLogin, editarLogin } from '../controllers/login.controller.js'
const router = express.Router()

router.get('/',buscarTodosOsLogins)
router.get('/:id', buscarUmLogin)
router.post('/criar', criarLogin)
router.put('/editar:id', editarLogin)
router.delete('/delete/:id', deletarLogin)
router.post('/', autenticarPorEmail)

export default router


