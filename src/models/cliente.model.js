import mongoose from 'mongoose'

const clienteSchema = new mongoose.Schema({    
  nome : {
    type: String,
    require: true
  },
  telefone : {
    type: String,
    require: true
  },
  email : {
    type: String,
    require: true,
  },
  cnpj : {
    type: String,
    require: true
  },
  endereco : {
    type: String,
    require: true
  }
})

const ClienteModel = mongoose.model('ClienteModel', clienteSchema)
export default ClienteModel