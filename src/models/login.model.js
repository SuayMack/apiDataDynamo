import mongoose from "mongoose"

const loginSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    senha: {
        type: String,
        require: true
    }
})

const LoginModel = mongoose.model("LoginModel", loginSchema)
export default LoginModel