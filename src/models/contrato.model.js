import mongoose from "mongoose"

const contratoSchema = new mongoose.Schema({
    clienteRef: {
        type: String,
        require: true
    },
    equipe: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    dt_inicio: {
        type: String,
        require: true
    },
    dt_fim: {
        type: String,
        require: true
    },
    valor: {
        type: String,
        require: true
    }
})

const ContratoModel = mongoose.model("ContratoModel", contratoSchema)
export default ContratoModel