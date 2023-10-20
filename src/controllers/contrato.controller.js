import ContratoModel from "../models/contrato.model.js"
import { errorHandler } from "../utils/error.js"

export const criarContrato = async (req, res, next) => {
    try {
      const response = await ContratoModel.create(req.body)
      res.status(201).json(response)
      console.log(response)
    } catch (error) {
      res.status(400).json(error.message)
      next(errorHandler(404, 'Erro ao criar Contrato!'))
    }
}

export const editarContrato = async (req, res, next) => {
    const listaContrato = await ContratoModel.findById(req.params.id)
    if(!listaContrato){
      return res.status(404).json({message: "Contrato não encontrado"})
    }
    try {
        const rest = await ContratoModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(rest)    
    } catch (error) {
        res.status(400).json(error.message)
        next(errorHandler(404, 'Erro ao editar Contrato!'))
    }    
}

export const deletarContrato = async (req, res, next) => {
    try {
        const deletarContrato = await ContratoModel.findByIdAndDelete(req.params.id)
        res.status(200).json(deletarContrato)
    } catch (error) {
        res.status(400).json(error.message)
        next(errorHandler(404, 'Erro ao deletar Contrato!'))
    }
}

export const buscarTodosOsContratos = async (req, res, next) => {
    try {
        const buscarTodosOsContratos = await ContratoModel.find()
        res.status(200).json(buscarTodosOsContratos)
    } catch (error) {
        res.status(400).json(error.message)
        next(errorHandler(404, 'Erro ao buscar todos os contratos!'))
    }
}

export const buscarUmContrato = async (req, res, next) => {
    try {
        const buscarUmContrato = await ContratoModel.findById(req.params.id)
        res.status(200).json(buscarUmContrato)
    } catch (error) {
        res.status(400).json(error.message)
        next(errorHandler(404, 'Erro ao buscar um contrato!'))
    }
}