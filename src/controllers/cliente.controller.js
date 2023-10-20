import ClienteModel from './../models/cliente.model.js'
import { errorHandler } from './../utils/error.js';

export const criarCliente = async (req, res, next) => {
  try {
    const { email } = req.body
    let cliente = await ClienteModel.findOne({ email })
    if(cliente) return next(errorHandler(404, 'Cliente já cadastrado!'))
    
    const response = await ClienteModel.create(req.body)
    res.status(201).json('Cliente cadastrado com sucesso!',response._id)
  } catch (error) {
    next(errorHandler(404, 'Erro ao criar Cliente!'))
  }
}

export const editarCliente = async (req, res, next) => {
  const listaCliente = await ClienteModel.findById(req.params.id)
  if(!listaCliente){
    return res.status(404).json({message: "Cliente não encontrado"})
  }
  try{
    const rest = await ClienteModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(rest)
  }catch(error){
    res.status(400).json(error.message)
    next(errorHandler(404, 'Erro ao editar cliente!'))
  }
}

export const deletarCliente = async (req, res, next) => {
  try{
    await ClienteModel.findByIdAndDelete(req.params.id)
    res.status(200).json('Cliente deletado com sucesso!')
  }catch(error){
    next(errorHandler(404, 'Erro ao deletar cliente!'))
  }
}

export const buscarTodosOsClientes = async (req, res, next) => {
  try{
    const buscarTodosOsClientes = await ClienteModel.find()
    res.status(200).json(buscarTodosOsClientes)
  }catch(error){
    res.status(400).json(error.message)
    next(errorHandler(404, 'Erro ao buscar todos os clientes!'))
  }
}

export const buscarUmCliente = async (req, res, next) => {
  try{
    const buscarUmCliente = await ClienteModel.findById(req.params.id)
    if(!buscarUmCliente){
      return res.status(404).json({message: "Cliente não encontrado"})
    }
    res.status(200).json(buscarUmCliente)
  }catch(error){
    next(errorHandler(404, 'Erro ao buscar um cliente!'))
  }
}