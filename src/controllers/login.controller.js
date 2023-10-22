
import LoginModel from "../models/login.model.js"
import { errorHandler } from "../utils/error.js"

export const criarLogin = async (req, res, next) => {
  try {
    const response = await LoginModel.create(req.body)
    res.status(201).json('Login criado com sucesso!')
    console.log(response)
  }catch (error) {
    res.status(400).json(error.message)
    next(errorHandler(404, 'Erro ao criar Login!'))
  }
}
export const editarLogin = async (req, res, next) => {
    try {
        const rest = await LoginModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(rest)
    } catch (error) {
        res.status(400).json(error.message)
        next(errorHandler(404, 'Erro ao editar Login!'))
    }
}
export const deletarLogin = async (req, res, next) => {
  try {
      const deletarLogin = await LoginModel.findByIdAndDelete(req.params.id)
      res.status(200).json(deletarLogin)
  }catch (error) {
      res.status(400).json(error.message)
      next(errorHandler(404, 'Erro ao deletar Login!'))
  }
}

export const buscarTodosOsLogins = async (req, res, next) => {
  try {
      const buscarTodosOsLogins = await LoginModel.find()
      res.status(200).json(buscarTodosOsLogins)
  }catch (error) {
      res.status(400).json(error.message)
      next(errorHandler(404, 'Erro ao buscar todos os logins!'))
  }
}

export const buscarUmLogin = async (req, res, next) => {
  try {
      const buscarUmLogin = await LoginModel.findById(req.params.id)
      res.status(200).json(buscarUmLogin)
  }catch (error) {
      res.status(400).json(error.message)
      next(errorHandler(404, 'Erro ao buscar um login!'))
  }
}